function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `agora sao ${hora} hora`
    
    if(hora >= 0 && hora < 12) {
        //bomdia
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto-tarde.png'
        img.style.height = "400px"
    } else {
        // boa noite
        img.src = 'fotonoite.png'
        img.style.height = "400px"
        img.style.width = "350px"

    }

}