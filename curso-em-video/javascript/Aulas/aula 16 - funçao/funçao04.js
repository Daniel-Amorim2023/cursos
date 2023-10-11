function fatorial(f)
{
    var fat = 1
    for(let c = f; c > 0; c--)
    {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))