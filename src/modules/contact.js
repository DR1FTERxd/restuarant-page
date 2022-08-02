function createContact() {
    const contactTab = document.createElement('div');
    contactTab.setAttribute('id', 'contactTab');
    
    const contactTxt1 = document.createElement('h1')
    contactTxt1.setAttribute= ('id', 'contactTxt1')
    contactTxt1.innerHTML = ('Contact')

    const contactTxt2 = document.createElement('p');
    contactTxt2.setAttribute = ('id', 'contactTxt2');
    contactTxt2.innerHTML = ('our number: +47641264682')


    contactTab.appendChild(contactTxt1)
    contactTab.appendChild(contactTxt2)
    
    return contactTab
}




function loadContact() {
    const scren = document.getElementById('screen');


    const contact = createContact();

    scren.appendChild(contact);

}

export default loadContact;
