function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length >= 0 && fano.value.length < 4 || fano.value > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            if (idade <= 10) {
                //criança
                genero = 'menino'
                img.setAttribute('src', 'imagens/menino-250.png')
            } else if (idade < 25) {
                // jovem
                genero = 'jovem'
                img.setAttribute('src', 'imagens/jovem-h-250.png')
            } else if (idade < 65) {
                // adulto
                genero = 'homem'
                img.setAttribute('src', 'imagens/homem-250.png')
            } else {
                //idoso
                genero = 'senhor'
                img.setAttribute('src', 'imagens/senhor-250.png')
            }

        } else if (fsex[1].checked) {
            if (idade <= 10) {
                //criança
                genero = 'uma menina'
                img.setAttribute('src', 'imagens/menina-250.png')
            } else if (idade < 25) {
                // jovem
                genero = 'jovem'
                img.setAttribute('src', 'imagens/jovem-m-250.png')
            } else if (idade < 65) {
                // adulto
                genero = 'mulher'
                img.setAttribute('src', 'imagens/mulher-250.png')
            } else {
                //idoso
                genero = 'senhora'
                img.setAttribute('src', 'imagens/senhora-250.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos que é ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}