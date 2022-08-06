function createHome() {
    const homeTab =document.createElement('div')
    homeTab.setAttribute('id', 'homeTab')
    homeTab.setAttribute('data-tab-content', '#home')
    homeTab.setAttribute('class', 'active')


    const homeTxt1 = document.createElement('h1');
    homeTxt1.setAttribute('id', 'homeTxt1');
    homeTxt1.innerHTML = ("Home");

    const homeTxt2 = document.createElement('p');
    homeTxt2.setAttribute('id', 'homeTxt2');
    homeTxt2.innerHTML = ('Hello and Welcome to Turbo Burger, fast food restuarant.');
    

    const box = document.createElement('div');
    box.setAttribute('id', 'box');

    const photo = document.createElement('img');
    photo.setAttribute('id', 'photo1');
    photo.src = "./images/screenshot_2022-08-05_13-43-44.png";
    const photo2 = document.createElement('img');
    photo2.setAttribute('id', 'photo2');
    photo2.src = "./images/screenshot_2022-08-06_15-03-29.png"

    

    homeTab.appendChild(homeTxt1);
    homeTab.appendChild(homeTxt2);
    homeTab.appendChild(box);
    box.appendChild(photo);
    box.appendChild(photo2)

    return homeTab
}


function loadHome() {
    
    const scren = document.getElementById("screen")

    const home = createHome();

    scren.appendChild(home)

}

export default loadHome;