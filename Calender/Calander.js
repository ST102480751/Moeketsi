
const Dated= document.getElementById('Datedisplay');
const show= document.getElementById('date');




function showday(){
    const today = new Date();
    
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById("Datedisplay").innerHTML = date;
   



   
   

    
}

show.addEventListener("click",  function(){
const Date= '#'+ showday();

    

     
       
   day=Pad(day)
   month=Pad(month);
   year = Pad(year);
   
      Datedisplay.textContent = `${day}:${month}:${year}`; 
   
      document.getElementById("Datedisplay") = Date;
   

});



function Pad(unit){
    return(("0") + unit).length >2 ? unit : "0" + unit;
    }

