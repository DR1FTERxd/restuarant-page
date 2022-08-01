function createMenu() {
   const menuTab = document.createElement('div')
   menuTab.setAttribute('id', 'menuTab')
   const menuTxt = document.createElement('div')
   menuTxt.setAttribute('id', 'menuTxt')
   menuTxt.innerHTML= ('menutxt')
   menuTab.appendChild(menuTxt)
   return menuTab
}






function loadMenu() {
   const scren = document.getElementById("screen")
   const menu = createMenu();

   scren.appendChild(menu)



   return screen

}

export default loadMenu




