// button add
const btnAgregar = document.querySelector('.form__add');
const listaTask = document.querySelector('.list')
let contador = 0;
btnAgregar.addEventListener('click', e=>{
    e.preventDefault();
    contador++;
    if(contador < 4){
        const element = document.createElement('li');
        element.innerHTML = 
        ` <li class="list__content">
                <textarea class="form__content" name="" id="" rows="3" ></textarea>
          </li>
        `
        listaTask.appendChild(element);
        return;
    }
    else{
        btnAgregar.classList.add('form__add--disabled');
        const icon = btnAgregar.querySelector('i');
        icon.classList = ['ri-lock-line']
    }
    
});


// button submit
const btnSubmit = document.querySelector('input[type="submit"]');
btnSubmit.addEventListener('click', e =>{
    e.preventDefault();
    console.log("Se agrego una card");
})