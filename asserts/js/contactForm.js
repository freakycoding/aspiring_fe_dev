const nameInput = document.querySelector('#nameInput')
const phone = document.querySelector('#phone')
const option = document.querySelector('option')
const display = document.querySelector('.display');
const messege = document.querySelector('#messege')
const button = document.querySelector('button');

const data = []
let errMessege = document.createElement('p');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const ul = document.createElement('ul');

    const nameText = document.createElement('li');
    nameText.textContent = nameInput.value;
    if (nameInput.value === '') {
        return errMessege.textContent = `Name must not be empty!`
    }
    errMessege.textContent = '';
    
    const phoneInput = document.createElement('li');
    phoneInput.textContent = phone.value;
    if (phoneInput.value === '') {
        return errMessege.textContent = `Phone number must not be empty!`
    }
    errMessege.textContent = '';
    
    const messegeInput = document.createElement('p');
    messegeInput.textContent = messege.value;
    if (messegeInput.value === '') {
        return errMessege.textContent = `Messege must not be empty!`
    }

    if(nameText && phoneInput && messegeInput){

        data.push(nameText, phoneInput, messegeInput)
        console.log(`Successfully added:Name ${errMessege.textContent = nameText} Phone: ${errMessege.textContent = phoneInput} Phone: ${errMessege.textContent = messegeInput}`)
    }

    ul.appendChild(nameText);
    ul.appendChild(phoneInput);
    ul.appendChild(messegeInput)
    
    display.appendChild(ul)
})

errMessege.textContent = '';
display.appendChild(errMessege)