let numero = [-10, 20, 30, 40, 50];

let res = numero.filter(positivos) 
console.log(res)

function positivos(numero) {
  return numero >= 0;
}

let moradia1 = {
    tipo: "casa",
    comodos: "4",
    endereco: "Rua 2",
    vendida: true,
situacaoa : function (){
return ("moradaia do tipo " + this.tipo + " com " + this.comodos + " cômodos,no endereço " + this.endereco);
    }
}
let moradia2 = {
    tipo: "Apartamento",
    comodos: "6",
    endereco: "Rua 5",
    vendida: false,
    situacaob : function (){
        return ("moradaia do tipo " + this.tipo + " com " + this.comodos + " cômodos,no endereço " + this.endereco);
    }
}
let moradia3 = {
    tipo: "Apartamento",
    comodos: "3",
    endereco: "Rua 8",
    vendida: false,
    situacaoc : function (){
        return ("moradaia do tipo " + this.tipo + " com " + this.comodos + " cômodos,no endereço " + this.endereco);
    }
}
//let tudob = moradia3.situacaoc();   
//let tudoa = moradia2.situacaob();   
let tudo = moradia1.situacaoa();
console.log(tudo)

let Identificadormoradias = []
Identificadormoradias.push(moradia1)
Identificadormoradias.push(moradia2)
Identificadomoradias.push(moradia3)

Identificadormoradia.forEach(listarDisponiveis)
//let filtro = Identificadormoradia.filter(listarDisponiveis)

function listarDisponiveis(elemento){
if(elemento.vendida == false){
   console.log(`A moradia é do tipo: ${elemento.tipo}`)
   console.log(`Tem ${elemento.comodos} comodos`)
   console.log(`Endereco ${elemento.endereco}`)
   console.log(`A situacao é: ${elemento.vendida}`)
        console.log("moradaia do tipo " + elemento.tipo + " com " + elemento.comodos + " cômodos,no endereço " + elemento.endereco);
    }return listarDisponiveis;
}