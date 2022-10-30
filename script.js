var web3;

async function connect(){

    await window.web3.currentProvider.enable();
    web3=new Web3(window.web3.currentProvider);

}


    

        const daysEl = document.getElementById("days")
        const hoursEl = document.getElementById("hours")
        const minEl = document.getElementById("min")
        const secEl = document.getElementById("sec") 


        const countNFT = "30 Oct 2022"
        function countdown(){

            const countNFT = new Date(count);
            const currentDate = new Date();

            const totalSeconds = (countNFT - currentDate) / 1000;

            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600 % 24);
            const min = Math.floor(totalSeconds / 60 % 60);
            const sec = Math.floor(totalSeconds) % 60;


            daysEl.innerHTML = days;
            hoursEl.innerHTML = formatTime(hours);
            minEl.innerHTML = formatTime(min);
            secEl.innerHTML = formatTime(sec);
        }

        
        function formatTime(time){
            return time < 10 ? `0${time}` : time;
        }

        countNFT();

        setInterval(countNFT, 1000)
           
                
        
          
        