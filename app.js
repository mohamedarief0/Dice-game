
let dice = document.getElementById('num');

function rotate(){

    let num = Math.floor(((Math.random()*6) + 1));
    let audio = document.getElementById('audio');

    if (num != 7) {

        dice.classList.add('rotations');    
        dice.innerText = num;
        setTimeout(()=>{
            
            num= Math.floor(((Math.random()*6) + 1));
            dice.innerText = num;
            num= Math.floor(((Math.random()*6) + 1));
            dice.innerText = num;
            num= Math.floor(((Math.random()*6) + 1));
            dice.innerText = num;
            dice.classList.remove('rotations');
        },700);
        audio.play();


    }

    
    
}