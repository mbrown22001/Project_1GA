//https://www.youtube.com/watch?v=x7WJEmxNlEs referenced this video to make my timer!

// Variable for going through the array values and for audio
i = 0;
let instruMusic = document.getElementById('firstSong');
let realMusic;
// Song Lyrics
let songOne = ['Mayday,' , 'Mayday' , 'The' , 'ship' , 'is' , 'slowly' , 'sinking' , 'They' , 'think' , 'Im' , 'crazy,' , 'they' , 'dont' , 'know' , 'the' , 'feeling' , 'Theyre' , 'all' , 'around' , 'me' , 'Circling' , 'like' , 'vultures' , 'They' , 'wanna' , 'break' , 'me' , 'and' , 'wash' , 'away' , 'my' , 'colors' , 'Take' , 'me' , 'high' , 'and' , 'Ill' , 'sing' , 'Oh' , 'you' , 'make' , 'everything' , 'okay' , 'We' , 'are' , 'one' , 'and' , 'the' , 'same' , 'Oh' , 'you' , 'take' , 'all' , 'of' , 'the' , 'pain' , 'away' , 'Save' , 'me' , 'if' , 'I' , 'become' , 'My' , 'demons' , '' ,]
// Song Lyrics for the User to Input
let songTwo = []

// Lyric input button
let input = document.getElementById('userInput')

// Add the array to the p id and remove commas in the song array.
function startGame(){
let x = document.getElementById('p');
x.classList.remove('hidden');
x.innerHTML = songOne.join(' ');
setInterval(updateCountdown, 1000);
instruMusic.play();
}

function resetGame(){
document.getElementById('p').classList.add('hidden')
//document.getElementById('p2').classList.add('hidden')
songTwo.splice(0, songTwo)
console.log(songTwo)
}



// 'Overwrite' the first p id.
function addon(){
    let y = document.getElementById('p2')
    y.innerHTML = songTwo.join(' ')
}





//The below allows me assign text values using the return key. 
//Also keeps track of what word is being added to the second array.
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById('myBtn').click();
    }

    for (;songOne[i];){
        if(input.value == songOne[i]){
            songTwo.push(input.value)
            addon()
            console.log(songTwo)
            i++;
        }

       // if(songOne.length = songTwo.length){
       //     youWin();
       // }

       // if(time = 0 &&  songOne.length != songTwo.length){
       //     youLose();
      //  }

        else (i > songOne.length);{
           return;
            
        }
        
    }
    })
//Keeps track of the in-game time. When the timer reaches 0 the player loses.
    const startingMinutes = 4;
    let time = (startingMinutes * 60)+1;

    const countdownEl = document.getElementById('finalCountdown')

    //setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds: seconds;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }

function youWin() {
    alert('You have beat the game! Congrats!')
}

function youLose(){
    alert('Better luck next time. Sorry!')
}
    
