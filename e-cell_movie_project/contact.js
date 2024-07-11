const button = document.getElementById('Btn');
const form = document.getElementById('myform');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('youremail');
const popUp = document.querySelector('.pop');
const bar = document.querySelector('.bar');
const cross = document.querySelector('.cross');
const sidebar = document.querySelector('.sidebar');



button.addEventListener('click', (event) => {
    let firstValue = (firstName.value).trim();
    let lastValue = (lastName.value).trim();
    let emailValue = (email.value).trim();

    if (firstValue.length > 0 && lastValue.length > 0 && emailValue.length > 0) {
        event.preventDefault();
        popUp.innerHTML = `<p>Your form is submitted succesfully!</p>`;
        popUp.style.color = 'lime';

        popUp.style.display = 'flex';
        setTimeout(() => {
            popUp.style.display = 'none';
        }, 5000);
    }
    else {
        event.preventDefault();
        popUp.innerHTML = `<p>Properly fillout the form!</p>`;
        popUp.style.color = 'red';
        popUp.style.display = 'flex';
        setTimeout(() => {
            popUp.style.display = 'none';
        }, 5000);
    }
    form.reset();


});

bar.addEventListener('click',()=>{
    bar.style.display='none';
    sidebar.style.display='flex';
})
cross.addEventListener('click',()=>{
    sidebar.style.display='none';
    bar.style.display='flex';
})