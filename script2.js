function Promptuser()
{
    var txt;
    var name=window.prompt("Entrez votre nom!");
    if(name!=null || name=="")
    {
        txt = "Bonjour" + name;
    }
    document.getElementById('name').innerHTML=Date();
}