import loadPage from './modules/page-load';
import loadMenu from './modules/menu';
import loadHome from './modules/home';
import loadContact from './modules/contact';



//function navigation() {
   // const home = document.getElementById('home')
   // const menu = document.getElementById('menu');
  //  const contact = document.getElementById('contact');
    
   // home.addEventListener('click', loadHome);
   // menu.addEventListener('click', loadMenu);
    //contact.addEventListener('click', loadContact);

//}

function navigation() {
const tabs = document.querySelectorAll('[data-tab-target]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target =  document.querySelector('[data-tab-item]')
        target.classList.add('active')
    })
})
}

imp()


function imp(){
    loadPage();
    loadMenu();
    loadContact();
    loadHome();
    navigation();
}
