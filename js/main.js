let frm = document.getElementById('form');

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

            return /[A-Z]/.test(firstChar) && latChar == '.';
        }else{
            throw Error('La cadena debe contener al menos un carácter.');
        }
    }else{
        throw TypeError('El argumento debe ser una cadena de caracteres');
    }
}