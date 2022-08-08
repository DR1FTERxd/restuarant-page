function createContact() {
    const contactTab = document.createElement('div');
    contactTab.setAttribute('id', 'contactTab');
    contactTab.setAttribute('data-tab-content', '#contact');
    
    const contactTxt1 = document.createElement('h1');
    contactTxt1.setAttribute= ('id', 'contactTxt1');
    contactTxt1.innerHTML = ('Contact');

    const contactTxt2 = document.createElement('p');
    contactTxt2.setAttribute = ('id', 'contactTxt2');
    contactTxt2.innerHTML = ('our number: +47641264682');


    

    const locationTabTxt = document.createElement('p');
    locationTabTxt.setAttribute('id', 'locationTabTxt');
    locationTabTxt.innerHTML = ("We are in the west coast, Usa")

    const box2 = document.createElement('div');
    box2.setAttribute('id', 'box2');

    const photo3 = document.createElement('img');
    photo3.setAttribute('id', 'photo3');
    photo3.src = './images/location1.png'

    const photo4 = document.createElement('img');
    photo4.setAttribute('id', 'photo4');
    photo4.src = './images/locotaion2.png'

    

    contactTab.appendChild(contactTxt1);
    contactTab.appendChild(contactTxt2);
    contactTab.appendChild(locationTabTxt);
    contactTab.appendChild(box2);
    box2.appendChild(photo3);
    box2.appendChild(photo4);

    
    return contactTab
}




function loadContact() {
    const scren = document.getElementById('screen');


    const contact = createContact();

    scren.appendChild(contact);

}

export default loadContact;
