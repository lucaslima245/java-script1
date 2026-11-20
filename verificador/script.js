
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('erro verifique os dados e tente novamente') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade < 15) {
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'homem-velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if(idade >= 0 && idade < 15) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //faz mostrar a imagem
    }
}
