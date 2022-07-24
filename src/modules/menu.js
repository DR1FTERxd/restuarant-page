function createmenu() {
    const menu = document.createElement('div');
    menu.setAttribute(id , 'id');
    const menuTxt = document.createElement('p');
    menuTxt.innerHTML = ('aaaa');

    menu.appendChild(menuTxt);

    return menu
}


function loadMenu() {
    const screen = document.getElementById('screen');
    const menu = createmenu();

    screen.appendChild(menu)

}

export default loadMenu;