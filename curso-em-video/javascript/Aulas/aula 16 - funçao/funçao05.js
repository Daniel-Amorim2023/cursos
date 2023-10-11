//recursividade

function fatorial(f)
{
    if (f == 1)
    {
        return 1
    } else
    {
        return f * fatorial(f - 1)
    }
}

console.log(fatorial(5))