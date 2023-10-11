function contar () {
    let res = document.getElementById('res')
    let ini = document.getElementById('numin')
    let fim = document.getElementById('numfim')
    let pas = document.getElementById('numpas')
    
    if (ini.value.length == 0 || fim.value == '' || pas.value == '') 
    {
        window.alert('ERROR!!! Preencha os formulários!!')
    } else if (pas.value == 0) 
    {
        window.alert('ERROR!!! Passo igual a zero. Tente outro número!')
    } else 
    {
        res.innerHTML = '<strong>Começando a contar:</strong> <br>'
        if (Number(ini.value) < Number(fim.value))
        {
            for (let c = Number(ini.value); c <= Number(fim.value); c += Number(pas.value)) 
            {
            res.innerHTML += `${c} &rarr;`
            }
        } else 
        {
            // Sequência decrescente
            for (let c = Number(ini.value); c >= Number(fim.value); c -= Number(pas.value)) 
            {
            res.innerHTML += `${c} &rarr;`
            }
        }
        
        res.innerHTML += 'Fim'
    }
}