function createMenu() {
   const menuTab = document.createElement('div')
   menuTab.setAttribute('id', 'menuTab')
   menuTab.setAttribute('data-tab-item', '#menu')
   const menuTxt1 = document.createElement('h1')
   menuTxt1.setAttribute('id', 'menuTxt1')
   menuTxt1.innerHTML= ('Menu')

   const menuTxt2 = document.createElement('p')
   menuTxt2.setAttribute('id', 'menuTxt2')
   menuTxt2.innerHTML= ('our menu')

   menuTab.appendChild(menuTxt1)
   menuTab.appendChild(menuTxt2)
   return menuTab
}




function loadMenu() {
   const scren = document.getElementById("screen")
   const menu = createMenu();

   scren.appendChild(menu)



   return screen

}

export default loadMenu




