// define formulario
let frm = document.getElementById('form');

let phrase = {
    a: 'hola',
    b: 'c',
};

let a = 'The+\s.+';
let b = 'The cat'
let c = 'I|You|He|She|It|We|They'
let p = "j";
let s = `${a}|${b}|${c}`; // sujeto
let ExpReg = new RegExp("^("+s+")(\\s+"+p+")$");


console.log(ExpReg.test('The j')); 

console.log(phrase);

frm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let sentence = document.getElementById('sentence').value;

    try{
        console.log(validPhrase(sentence));
    }catch(err){
        console.log(`Error: ${err.message}`);
    }
});

function validPhrase(sentence){
    if(typeof sentence === 'string'){
        if(sentence.length){
            let firstChar = sentence[0];
            let latChar = sentence[sentence.length - 1];

            if(/[A-Z]/.test(firstChar) && latChar == '.'){


                return 'Hola';
            }else{
                return false;
            }

            return ;
        }else{
            throw Error('La cadena debe contener al menos un carácter.');
        }
    }else{
        throw TypeError('El argumento debe ser una cadena de caracteres');
    }
}