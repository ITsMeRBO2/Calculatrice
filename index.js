function showModal() {
    document.getElementById('modal').style.display = 'block';
    document.body.classList.add('modal-open'); 
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('modal-open'); 
}

const ecran = document.querySelector('.ecran');
let currentInput = ''; 

function buttonClick(value) {
    if (value === 'C') {
        currentInput = ''; 
        ecran.textContent = '0'; 
    } else if (value === '=') {
        try {
            currentInput = eval(currentInput); 
            ecran.textContent = currentInput; 
        } catch {
            ecran.textContent = 'ERREUR';
            alert("Ereur ya zamal!!!"); 
        }
    } else {
        currentInput += value; 
        ecran.textContent = currentInput; 
    }
}