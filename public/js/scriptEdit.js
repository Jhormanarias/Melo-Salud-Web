let btnGenAl = document.getElementById('btnGenAl');
let FormGenAleatorio = document.getElementById('FormGenAleatorio');

FormGenAleatorio.style.display="none";

btnGenAl.addEventListener('click', ()=>{
    if(FormGenAleatorio.style.display=="none")
    {
        FormGenAleatorio.style.display="block"
    }
    else
    {
        FormGenAleatorio.style.display="none"
    }
});
