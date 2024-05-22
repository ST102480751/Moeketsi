const btn = document.getElementById("time");
const clock= document.getElementById("displayTime");

function updateTime(){
  const Nako= new Date();
  const hour = Nako.getHours();
  const minutes = Nako.getMinutes();
  const seconds = Nako.getSeconds();
  
   const formattedTime = `${hour}:${minutes}:${seconds}`;// formats time as a string

   document.getElementById("displayTime").textContent = formattedTime;
}

updateTime();
setInterval(updateTime,1000);

btn.addEventListener("click", function() {
  updateTime();
});

