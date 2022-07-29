function createHeader(id, text) {
    const header = document.createElement("header");
    header.setAttribute('id', id);
    const logo = document.createElement("h1");
    logo.textContent = text;
    header.appendChild(logo);
    return header
}

function createNavItem(id, text, class){
    const navItem = document.createElement('li')
    navItem.setAttribute('id', id);
    navItem.classList.add(clas)
}

function CreateNavbar() {
    const navbar = document.createElement('div');
    const navbarList = document.createElement('ul');
    

    return navbar
}

function mainaScreen(id) {
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

    const navbar = CreateNavbar();
    content.appendChild(navbar)

    const mainScreen = mainaScreen('screen', "aaa");
    content.appendChild(mainScreen)
    
    const footer = Createfooter('footer', 'Hope we see you in Turbo burger')
    content.appendChild(footer)
}

export default loadPage;