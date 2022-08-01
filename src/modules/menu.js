function createMenu(text, id) {
   const menu = document.createElement('div')
   menu.setAttribute('id', id)
   const menutxt = document.createElement('p')
   menutxt.textContent = text

   return createMenu
}


function loadMenu() {

   const scren = document.getElementById('screen')

   const menu = createMenu()

   scren.appendChild(menu('asa', 'text'));
}





