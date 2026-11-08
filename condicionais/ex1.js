let agora = new Date()
let hora = agora.getHours //pega a hora do sistema rodando 

console.log(`agora sao exatamente 
    ${hora}`)
if(hora < 12) {
    console.log("BOM DIA")
} else if (hora <= 18) {
    console.log("boa tarde")
} else {
    console.log("boa noite")
}

//////////////////////////////

var now = new Date()
var diasem = now.getDay()

console.log(diasem)

switch (diasem){
    case 0:
        console.log("DOMINGO")
        break;
    case 1:
        console.log("segunda")
        break;
    case 3:
        console.log("terca")
        break;
    case 4:
        console.log("quarta")
        break;
    case 5:
        console.log("quinta")
        break;
    case 6:
        console.log("sabado")
        break;
       
    }   