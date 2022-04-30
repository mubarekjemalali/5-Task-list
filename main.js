const storageinput = document.querySelector('.storage');
const textarea = document.querySelector('.showarea');
const button = document.querySelector('.buttonAdd');
const buttonClear = document.querySelector('.buttonClear');
const storedInput = localStorage.getItem('textinput')


const saveToLocalStorage = () => {
    if (localStorage.getItem('textinput') && storageinput.value != null) {
        localStorage.setItem("textinput", localStorage.getItem("textinput") + '\n' + storageinput.value);
    } else {
        localStorage.setItem("textinput", storageinput.value);
    }
    if (localStorage.getItem('textinput')) {
        textarea.textContent = localStorage.getItem('textinput')
    }
}

const clearStorage = () => {
    localStorage.clear()
    textarea.textContent = ''
}

if (storedInput) {
    textarea.textContent = storedInput
}


button.addEventListener('click', saveToLocalStorage)
buttonClear.addEventListener('click', clearStorage)


