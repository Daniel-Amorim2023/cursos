function tabuada()
{
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0)
    {
        window.alert('ERRO!! É necessário digitar um número para gerar a tabuada.')
    } else
    {
        tab.innerHTML = ''
        var n = Number(num.value)
        for(let c = 0; c <= 10; c++)
        {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
    
}