var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = "#03b9f4 ";
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.shadowBlur = 17;
ctx.shadowColor = "#03a9f8 ";


// degToRad();
renderTime();


function degToRad(degree){
    var factor = Math.PI/180;
    return degree*factor;
    
}


function renderTime() {
    var now = new Date();
    var today = now.toDateString();
    var dayW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(today.slice(0, 3));
    var day = now.getDay();
    var month = now.getMonth();
    var time = now.toLocaleString();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var newSeconds = seconds+ (milliseconds/1000);
    
    //Background
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,500,500);
    
    // Mili Second
    ctx.beginPath();
    ctx.arc(250, 250, 230, degToRad(270), degToRad((milliseconds * 360 / 1000) - 90));
    ctx.stroke();
    
    // Second
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((newSeconds*6)-90));
    ctx.stroke();
    
    // Minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6)-90));
    ctx.stroke();
    
    // Hours
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((hours*30)-90));
    ctx.stroke();

    // Day of Month
    ctx.beginPath();
    ctx.arc(250, 250, 110, degToRad(270), degToRad((day*360/30)-90));
    ctx.stroke();

    // Month
    ctx.beginPath();
    ctx.arc(250, 250, 80, degToRad(270), degToRad((month*360/12)-90));
    ctx.stroke();

    // Day of Week
    ctx.beginPath();
    ctx.arc(250, 250, 50, degToRad(270), degToRad((dayW*360/7)-90));
    ctx.stroke();

    //Date
    // ctx.font = "25px Arial, bold";
    // ctx.fillStyle = '#03a9f4 ';
    // ctx.fillText(today, 175, 250);
    
    // Time
    // ctx.font = "15px Arial";
    // ctx.fillStyle = '#03a9f4 ';
    // ctx.fillText(time, 175, 280);
    
}
setInterval(renderTime, 10);