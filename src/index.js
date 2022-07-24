import loadPage from './modules/page-load';
import contact from './modules/contact';
import loadMenu from './modules/menu';
import home from './modules/home';



function navigation() {
    const home = document.getElementById('homeBtn')
    const menu = document.getElementById('menuBtn');
    const contact = document.getElementById('contactBtn');
    
    home.addEventListener('click', loadHome);
    menu.addEventListener('click', console.log('a'));
    contact.addEventListener('click', loadContact);

}

imp()


function imp(){
    loadPage();
    contact();
    loadMenu();
    navigation();
    home();
}
