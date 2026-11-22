function parimpar(n) {
    
    if (n==0){
        return "neutro"
    } else if(n % 2 ==0){
        return "par"
    } else {
        return "impar"
    }
}

resultado = parimpar(2) // vai enviar o numero 11 pra funcao e vai receber um return
console.log(resultado)