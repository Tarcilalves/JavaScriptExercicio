/* 3 - criar um nova função para retornar um valor booleano - verdadeiro ou falso - 
para verificar e informar se um determinado numero atribuido a uma variavel é primo. */

function verificarNumeroPrimo(numero){
    
    for (let i = 2; i <= numero / 2; i++){
        if(numero % i === 0){
            return false;
        }
    }

    return true // se a sobra for 1 é primo.


}

let numeroDigitado= 22

if(verificarNumeroPrimo(numeroDigitado)){
    alert('É primo')
}else{
    alert('É par')
}



