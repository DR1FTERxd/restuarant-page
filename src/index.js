import loadPage from './modules/page-load';
import loadMenu from './modules/menu';
import loadHome from './modules/home';
import loadContact from './modules/contact';



function navigation() {
    const home = document.getElementById('home')
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    
    home.addEventListener('click', loadHome);
    menu.addEventListener('click', loadMenu);
    contact.addEventListener('click', loadContact);

}

imp()


function imp(){
    loadPage();
    loadMenu();
    loadContact();
    loadHome();
    navigation();
}
