import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
import '../styles/style.css';

// console.log('Hello Coders! :)');

// manipulasi hamburger
const btnHamburger=document.getElementById('hamburger');
const btnDrawer = document.querySelector('#drawer');
const heroImage = document.querySelector('.hero-image');
const main = document.querySelector('main');

 
btnHamburger.onclick=function(){
  btnDrawer.classList.toggle('active');
}
 
main.onclick=function(){
  btnDrawer.classList.remove('active');
}
heroImage.onclick=function(){
  btnDrawer.classList.remove('active');
}



// utk menampilkan data dari DATA.json
fetch('data/DATA.json')
  .then(response => response.json())
  .then(data => {
    const listResto = document.getElementById('list-resto');
    data.restaurants.forEach(restoran => {
      const resto = document.createElement('div');
      resto.classList.add('resto');

      resto.innerHTML = `
        <img src="${restoran.pictureId}" alt="Restoran ${restoran.name}">
        <h3>${restoran.name}</h3>
        <p><strong>Kota:</strong> ${restoran.city}</p>
        <p><strong>Rating:</strong> <span class="rating">${restoran.rating}</span></p>
        <button class="more-desc">Deskripsi</button>
        <p class="desc" hidden>${restoran.description}</p>
      `;

      listResto.appendChild(resto);
    });

  
    const btnDescs = document.querySelectorAll('.more-desc');
    btnDescs.forEach(btn => {
      btn.addEventListener('click', function() {
        const desc = this.nextElementSibling;
        desc.removeAttribute('hidden');
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
