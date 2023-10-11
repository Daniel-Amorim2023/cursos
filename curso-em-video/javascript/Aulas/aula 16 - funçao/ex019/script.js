var vetornum = []
var sel = document.getElementById('txtsel')

function adicionar()
{
    var num = document.getElementById('txtnum')
    var nu = Number(num.value)
    
    
    if (nu > 100 ||  nu < 0 || num.value.length == 0)
    {
        window.alert('ERRO!!!! Por favor, digite um número entre 0 e 100.')
    } else
    {
        if ( vetornum.indexOf(num.value) != -1 )
        {
            window.alert('ERRO!!! O valor já foi inserido na lista.')
        } 
        else
        {
            vetornum.push(num.value)
            let item = document.createElement('option')
            item.text = `Valor ${nu} foi adicionado.`
            sel.appendChild(item)
        }
        
    }
    num.value = ''
    num.focus()
}

function analisar()
{
    res = document.getElementById('res')
    if (vetornum == 0) {
        window.alert('ERRO!!! Adicione pelo menos um número na lista.')
    }
    else
    {
        var soma = 0
        for (let c = 0; c < vetornum.length; c++)
        {
            soma += Number(vetornum[c])
        }
        var media = soma / vetornum.length
        var maior = Math.max.apply(null, vetornum)
        var menor = Math.min.apply(null, vetornum)
        res.innerHTML = `Foram adicionados ${vetornum.length} números <br>
        O somatório de todas os valores é ${soma} <br>
        A média de todos os números é ${media} <br>
        O maior número é ${maior}. <br>
        O menor número é ${menor}.`
        vetornum = []
        sel.innerHTML = ''

}
    }
    