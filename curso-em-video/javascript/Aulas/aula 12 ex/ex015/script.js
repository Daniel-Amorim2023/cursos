function executar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'imagens/manha-250.png'
        document.body.style.background = 'yellow'
    } else if ( hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'imagens/tarde-250.png'
        document.body.style.background = 'green'
    } else {
        //Boa Noite
        img.src = 'imagens/noite-250.png'
        document.body.style.background = 'blue'
    }

}
