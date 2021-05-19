function askName() {         //it ask your name to print on page
    var name = prompt("What is your name ?");
    document.getElementById("yourName").innerText = name;
}


// date function
    function showTime() {               
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session = date.getDay();


        //days
        if (session == 1) {
            session = "Monday";
        } else if (session == 2) {
            session = "Tuesday";
        } else if (session == 3) {
            session = "Wednesday";
        } else if (session == 4) {
            session = "Thursday";
        } else if (session == 5) {
            session = "Friday";
        } else if (session == 6) {
            session = "Saturday";
        } else if (session == 7) {
            session = "Sunday";
        }

        
        // when hours lower than 10 add "0" on the start
        if (h < 10) {
            h = "0" + h;
        }
        // when minutes lower than 10 add "0" on the start
        if (m < 10){
            m = "0" + m;
        }
        
        // when seconds lower than 10 add "0" on the start
        if (s < 10) {
            s = "0" + s;    
        }




        // H + M + S + DAYS      

        var time = h +":"+ m +":"+ s +" "+ session;
        document.getElementById("showClock").innerText = time;
        document.getElementById("showClock").textContent = time;

        setTimeout(showTime, 1000);      //????



}


askName();
showTime();


