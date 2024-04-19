// a - criar um loop que exibirá um intervalo de valores que vai de 1 até 20;

let exeUm = new Promise(function(resolve, reject){
    setTimeout(
        () => {
            
            for (let i = 0; i <= 20; i++){
               resolve(console.log(i))
            }
        }, 5000,
    );
})
console.log(exeUm)
exeUm.then( 
    intervaloDeUmADez => console.log(intervaloDeUmADez)      
)

//b - criar um novo loop que imprime os intervalos de números impares menores do que 100;

let exeDois = new Promise(function(resolve, reject){  
    setTimeout(   
        () => {            
            for (let i = 1; i < 100; i += 2) {
                resolve(console.log(i))
            }
        }, 10000
    );
})
console.log(exeDois)
exeDois.then(
    intervalosDeNumImparAteCem => console.log(intervalosDeNumImparAteCem)      
)

//c - imprimir a tabuada do número 9;
let exeTres = new Promise(function(resolve, reject){
    setTimeout(
        () => {            
            for (let i = 1; i <= 10; i ++ ) {
               resolve(console.log(i * 9))
            }
        }, 15000
    );
})
console.log(exeTres)
exeTres.then( 
    TabuadaNumeroNove => console.log(TabuadaNumeroNove)       
)








