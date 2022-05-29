var input = document.querySelector('.input');
var items=Array.from(document.querySelectorAll('.item'));
var preAns='0';

items.forEach(function(btn)
{
    btn.addEventListener('click',function()
    {
        if(input.innerHTML=='0')
        {
            input.innerHTML='';
        }
        if(btn.innerHTML=='AC')
        {
            input.innerHTML='0';
        }
        else if(btn.innerHTML=='DEL')
        {
            var tmp=Array.from(input.innerHTML);
            tmp.splice(tmp.length-1,1);
            if(tmp.length!=0)
            {
                input.innerHTML=tmp.join('');
            }
            else input.innerHTML='0';
        }
        else if(btn.innerHTML=='=')
        {
            input.innerHTML=eval(input.innerHTML);
            preAns=input.innerHTML;
        }
        else if(btn.innerHTML=='ANS')
        {
            input.innerHTML+=preAns;
        }
        else input.innerHTML+=btn.innerHTML;
    })
})

