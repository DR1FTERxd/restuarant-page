function createHeader(id, text) {
    const header = document.createElement("header");
    header.setAttribute('id', id);
    const logo = document.createElement("h1");
    logo.textContent = text;
    header.appendChild(logo);
    return header
}

function createNavItem(id, text, clas){
    const navItem = document.createElement('li')
    navItem.setAttribute('id', id);
    navItem.classList.add(clas)
    navItem.textContent = text;
    
    return navItem

}

function CreateNavbar(id) {
    const navbar = document.createElement('div');
    navbar.setAttribute('id', id)
    const navbarList = document.createElement('ul');

    const home = createNavItem('home', 'Home', 'navbar_item');
    const menu = createNavItem('menu', 'Menu', 'navbar_item');
    const contact = createNavItem('contact', 'Contact', 'navbar_item');

    home.setAttribute('data-tab-target', '#homeTab');
    menu.setAttribute('data-tab-target', '#menuTab');
    contact.setAttribute('data-tab-target', '#contactTab');

    navbar.appendChild(navbarList)  
    navbarList.appendChild(home)
    navbarList.appendChild(menu)
    navbarList.appendChild(contact)
    
    

    return navbar
}

function mainaScreen(id, text) {
    const screen = document.createElement('div');
    screen.setAttribute('id', id);
    
    

    return screen
}

function Createfooter(id, text){
    const footer = document.createElement('div');
    footer.setAttribute('id', id);
    const footerTxt = document.createElement('p');
    footerTxt.textContent = text;
    footer.appendChild(footerTxt)

    return footer;
}


function loadPage(){
    const content = document.getElementById("content");

    const header = createHeader("header", 'Turbo Burger');
    content.appendChild(header)

    const navbar = CreateNavbar('navbara');
    content.appendChild(navbar)

    const mainScreen = mainaScreen('screen');
    content.appendChild(mainScreen)
    
    const footer = Createfooter('footer', 'Hope we see you in Turbo burger')
    content.appendChild(footer)
}

export default loadPage;