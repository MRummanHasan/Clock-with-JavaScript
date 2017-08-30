    var secondHand = document.querySelector('.second-hand');
    var minHand = document.querySelector('.min-hand');
    var hourHand = document.querySelector('.hour-hand');

    function setDate(){
        var now = new Date();
        var seconds = now.getSeconds();
        var secondsDegree = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = 'rotate(' + secondsDegree + 'deg)';

        var mins = now.getMinutes();
        var minDegrees = ((mins / 60) * 360) + 90;
        minHand.style.transform = 'rotate(' + minDegrees + 'deg)';

        var hours = now.getHours();
        var hourDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
    }

    setInterval(setDate, 1000);

    var Hr = document.querySelector('#hr');
    var Min = document.querySelector('#min');
    var Sec = document.querySelector('#sec');
    function digitalClock(){
        var now = new Date();

        Hr.innerHTML = now.getHours(); 
        Min.innerHTML = now.getMinutes();
        Sec.innerHTML = now.getSeconds();
    }
    setInterval(digitalClock, 1000);


