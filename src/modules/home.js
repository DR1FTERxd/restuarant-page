function createHome() {
    const homeTab =document.createElement('div')
    homeTab.setAttribute('id', 'homeTab')
    homeTab.setAttribute('data-tab-content', '#home')
    homeTab.setAttribute('class', 'active')


    const homeTxt1 = document.createElement('h1')
    homeTxt1.setAttribute('id', 'homeTxt1')
    homeTxt1.innerHTML = ("Home")

    const homeTxt2 = document.createElement('p')
    homeTxt2.setAttribute('id', 'homeTxt2');
    homeTxt2.innerHTML = ('welcome too our fast food restuarant')
    

    homeTab.appendChild(homeTxt1)
    homeTab.appendChild(homeTxt2)

    return homeTab
}


function loadHome() {
    
    const scren = document.getElementById("screen")

    const home = createHome();

    scren.appendChild(home)

}

export default loadHome;