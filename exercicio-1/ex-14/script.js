function carregar () {
    var msg = window.document.getElementById('img')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours

    msg.innerHTML = `agora sao ${hora} hora`
    
    if(hora >= 0 && hora < 12) {
        //bomdia
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
    } else {
        // boa noite
        img.src = 'fotonoite.png'

    }

}