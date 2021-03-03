/* 

- When a user loads onto the screen the
clock starts the current time. 

*/

let showTime = () => {
    // Assignment of variables

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = currentTime(h);
    
    m = currentTime(m);
    s = currentTime(s);
    let day = "AM";
    day = (h >= 12) ? "PM" : "AM";
    h = (h == 24) ? h == 0 : h;
    let time = h + ":" + m + ":" + s + " " + day;
    
    // Adding text to the document
    document.getElementById("ClockDisplay")
    .innerHTML = time;
    setTimeout(showTime, 1000)
}

let currentTime = (k) => {
    if (k < 10) {
        return "0" + k
    } else {
        return k;
    }
}

showTime()
 



