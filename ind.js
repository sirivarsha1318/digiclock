function update(){
    const now=new Date();
    let hours=now.getHours();
    hours=hours.toString().padStart(2.0);
    const meridiem=hours>=12 ? "PM" :"AM";
    hours=hours%12 ||12;
    const mins=now.getMinutes().toString().padStart(2.0);
    const sec=now.getSeconds().toString().padStart(2.0);
    const timeString=`${hours}:${mins}:${sec} ${meridiem}`;
    document.getElementById("clock").textContent=timeString;
}
update();
setInterval(update,1000);