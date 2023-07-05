
// how do we select an html element in js: we use document.getElementById function
const hourEl = document.getElementById("hour");
const minutsEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");



// function to run the clock
function updateClock(){
    // using this lines we get the data from our system using Dete Constructor
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h-12;
        ampm = "PM";
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;


    hourEl.innerText = h;
    minutsEl.innerText = m;
    secondEl.innerText = s;
    ampmEl , (innerText = ampm);

    // we have to make a function to call the main function every second:
    setTimeout(()=>{
        updateClock()
    }, 1000)
}
updateClock();

