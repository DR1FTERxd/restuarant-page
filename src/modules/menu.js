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
   menuTxt2.innerHTML= ('Our menu')

   const menuphoto2 = document.createElement('img');
   menuphoto2.setAttribute('id', 'menuphoto2');
   menuphoto2.src = ('/dist/images/menuphoto2.jpg')

   const menuGrid = document.createElement('div');
   menuGrid.setAttribute('id', 'menuGrid')

   const gridItem1 = document.createElement('div');
   gridItem1.setAttribute('class', 'grid-item');
   gridItem1.innerHTML = ('Drinks');
   const gridItem1Txt = document.createElement('p');
   gridItem1Txt.setAttribute('id', 'grid-item-txt1');
   gridItem1Txt.innerHTML = ('Tasti-Cola, Water, Sparkling-Water.')

   const gridItem2 = document.createElement('div');
   gridItem2.setAttribute('class', 'grid-item')
   gridItem2.innerHTML = ('Addons')
   const gridItem2Txt = document.createElement('p');
   gridItem2Txt.setAttribute('id', 'grid-item-txt2');
   gridItem2Txt.innerHTML = ('French fries, Chips, BBQ-Fries,')

   
   const gridItem3 = document.createElement('div');
   gridItem3.setAttribute('class', 'grid-item')
   gridItem3.innerHTML = ('Sauces')
   const gridItem3Txt = document.createElement('p');
   gridItem3Txt.setAttribute('id', 'grid-item-txt');
   gridItem3Txt.innerHTML = ('Ketchup, mustard, garlic, bbq, ')
   const gridItem3Txt2 = document.createElement('p');
   gridItem3Txt2.setAttribute('id', 'grid-item-txt');
   gridItem3Txt2.innerHTML = ('Sausces cost extra 0.50$')
   
   const gridItem4 = document.createElement('div');
   gridItem4.setAttribute('class', 'grid-item')
   gridItem4.setAttribute('id', 'grid-item4')
   gridItem4.innerHTML = ('Packeges')
   const gridItem4Txt1 = document.createElement('p');
   gridItem4Txt1.setAttribute('id', 'grid-item-txt1');
   gridItem4Txt1.innerHTML = ('Economy: Only the burger it self.')
   const gridItem4Txt2 = document.createElement('p');
   gridItem4Txt2.setAttribute('id', 'grid-item-txt2');
   gridItem4Txt2.innerHTML = ('Base: Burger, small drink, small portion addon.')
   const gridItem4Txt3 = document.createElement('p');
   gridItem4Txt3.setAttribute('id', 'grid-item-txt3');
   gridItem4Txt3.innerHTML = ('Medium: Burger, medium drink, medium portion addon.')
   const gridItem4Txt4 = document.createElement('p');
   gridItem4Txt4.setAttribute('id', 'grid-item-txt4');
   gridItem4Txt4.innerHTML = ('Big: Burger, Big drink, Big portion addon.')


   menuTab.appendChild(menuTxt1)
   menuTab.appendChild(menuPhoto1)
   menuTab.appendChild(menuTxt2)
   menuTab.appendChild(menuphoto2)
   menuTab.appendChild(menuGrid)
   menuGrid.appendChild(gridItem1)
   menuGrid.appendChild(gridItem2)
   menuGrid.appendChild(gridItem3)
   menuGrid.appendChild(gridItem4)
   gridItem1.appendChild(gridItem1Txt)
   gridItem2.appendChild(gridItem2Txt)
   gridItem3.appendChild(gridItem3Txt)
   gridItem3.appendChild(gridItem3Txt2)
   gridItem4.appendChild(gridItem4Txt1)
   gridItem4.appendChild(gridItem4Txt2)
   gridItem4.appendChild(gridItem4Txt3)
   gridItem4.appendChild(gridItem4Txt4)
   return menuTab
}




function loadMenu() {
   const scren = document.getElementById("screen")
   const menu = createMenu();

   scren.appendChild(menu)



   return screen

}

export default loadMenu




