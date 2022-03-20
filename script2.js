setInterval(() => {

        let time = document.getElementById("p1");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        time.textContent = hours + ":" + minutes + ":" + seconds;
    }, 1000);

    setInterval(() =>{
        bg = document.querySelector("body");
        //bg.style.backgroundImage = "url(https://source.unsplash.com/1600x1200?india)";
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1200?india')";
        // document.body.style.backgroundImage = "url('./img/London, United Kingdom 3l1sjp562qQ.jpg')";
        console.log("Chal be");
        // bg.style.backgroundColor = "red";
    },3000);
