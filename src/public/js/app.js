//Constantes
const inputRef = document.getElementById('ref');
const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const inputSubmit = document.getElementById('submit');

//EL botón está deshabilitado por defecto
inputSubmit.disabled = true;

//Event Listeners
inputRef.addEventListener('keyup', ingresarProductos);
inputName.addEventListener('keyup', ingresarProductos);
inputPrice.addEventListener('keyup', ingresarProductos);

//Funciones
function ingresarProductos() {
    if(inputRef.value != "" && inputName.value != "" && inputPrice.value != "") {
        inputSubmit.disabled = false;
    }
    if(inputRef.value === "",  inputName.value === "", inputPrice.value === "") {
        inputSubmit.disabled = true;
    }
}

