function createMenu() {
   const menuTab = document.createElement('div')
   menuTab.setAttribute('id', 'menuTab')
   menuTab.setAttribute('data-tab-content', '#menu')
   
   const menuTxt1 = document.createElement('h1')
   menuTxt1.setAttribute('id', 'menuTxt1')
   menuTxt1.innerHTML= ('Our new special!')
   
   const menuPhoto1 = document.createElement('img');
   menuPhoto1.setAttribute('id', 'MenuPhoto1');
   menuPhoto1.src = ('/dist/images/menuphoto.png')


   const menuTxt2 = document.createElement('p')
   menuTxt2.setAttribute('id', 'menuTxt2')
   menuTxt2.innerHTML= ('our menu')

   const menuphoto2 = document.createElement('img');
   menuphoto2.setAttribute('id', 'menuphoto2');
   menuphoto2.src = ('/dist/images/menuphoto2.jpg')

   const menuGrid = document.createElement('div');
   menuGrid.setAttribute('id', 'menuGrid')

   const gridItem1 = document.createElement('div');
   gridItem1.setAttribute('id', 'grid-item')
   gridItem1.innerHTML = ('1')
   const gridItem2 = document.createElement('div');
   gridItem2.setAttribute('id', 'grid-item')
   gridItem2.innerHTML = ('2')
   const gridItem3 = document.createElement('div');
   gridItem3.setAttribute('id', 'grid-item')
   gridItem3.innerHTML = ('3')
   const gridItem4 = document.createElement('div');
   gridItem4.setAttribute('id', 'grid-item')
   gridItem4.innerHTML = ('4')
   



   menuTab.appendChild(menuTxt1)
   menuTab.appendChild(menuPhoto1)
   menuTab.appendChild(menuTxt2)
   menuTab.appendChild(menuphoto2)
   menuTab.appendChild(menuGrid)
   menuGrid.appendChild(gridItem1)
   menuGrid.appendChild(gridItem2)
   menuGrid.appendChild(gridItem3)
   menuGrid.appendChild(gridItem4)
   return menuTab
}




function loadMenu() {
   const scren = document.getElementById("screen")
   const menu = createMenu();

   scren.appendChild(menu)



   return screen

}

export default loadMenu




