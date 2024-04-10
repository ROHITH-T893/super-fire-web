var box=document.getElementById("product")
var elem=box.querySelectorAll("div")
var serach=document.getElementById("serach")
serach.addEventListener("keyup",function(){
   var enval=event.target.value.toUpperCase()
    for(con=0;con<elem.length;con=con+1)
    {
        var pronam = elem[con].querySelector("p").textContent

        if(pronam.toUpperCase().indexOf(enval)<0)
        {
            elem[con].style.display="none"
       
        }
        else{
            elem[con].style.display="block"
            
        }
    }
})