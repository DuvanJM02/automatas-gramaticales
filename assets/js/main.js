// Define formulario y otros elementos HTML
const FRM = document.getElementById('form');
const MSG = document.getElementById('msg');
const INP = document.getElementById('sentence');

// Define la gramática a usar
let a = 'The+\\s[a-z]+';                                // Articulo único
let b = '[A-Z][a-z]+';                                  // Pronombres o nombres u objetos
let c = 'I|You|He|She|It|We|They';                      // Primera persona
let d = '(This|That|These|Those)';                        // Articulos demostrativos
let e = `${d}+\\s[a-z]+`;                                // REGEX Articulo desmotrativo + objeto
let n = "(don't|do+\\s(not)|doesn't|does+\\s(not))";    // Negación
let p = `${n}\\s+[A-Za-z0-9].+[.]`;                     // Predicado
let s = `${a}|${b}|${c}|${e}`;                          // Expresión regular de los sujetos
let ExpReg = new RegExp("^("+s+")(\\s+"+p+")$");        // Expresión regular de la frase

// Detecta el evento "submit" del formulario
FRM.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Extrae la información del input
    let sentence = document.getElementById('sentence').value;
    try{
        // validPhrase compuera la frase en inglés y showMessage muestra el mensaje
        let vf = validPhrase(sentence);
        showMessage(vf, 'success');
    }catch(err){
        showMessage(`Error: ${err.message}`, 'danger');
    }
});

// Función que valida que la frase esté correcta
function validPhrase(sentence){
    if(typeof sentence === 'string'){
        if(sentence.length){
            let firstChar = sentence[0];
            let latChar = sentence[sentence.length - 1];

            if(/[A-Z]/.test(firstChar) && latChar == '.'){
                if(ExpReg.test(sentence)){
                    return `The sentence '${sentence}' is correct.`;
                }else{
                    throw Error('The sentence is incorrect.');
                }
            }else{
                throw Error('The sentence is misspelled.');
            }
        }else{
            throw Error('The string must contain at least one character.');
        }
    }else{
        throw TypeError('The argument must be a string.');
    }
}

function showMessage(param, status) {
    MSG.innerHTML = `<p class="text-${status}"><strong>${param}</strong></p>`;
    status == 'success' ? INP.value = '' : param;
    INP.classList.add('is-' + (status == 'success' ? 'valid' : 'invalid'));

    setInterval(function(){
        MSG.innerHTML = "";
        INP.classList.remove('is-' + (status == 'success' ? 'valid' : 'invalid'));
    }, 6000);
}