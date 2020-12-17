

// window.addEventListener('load', () => {

//   const codesmithURL = 'https://codesmith.io/';
  
//     const body = document.querySelector('body');
//     const div = document.createElement('div');
  
//     const audio = new Audio('get-back-to-work.mp3');
//      // alert('test')
//     const kyle = document.createElement('img');
//     div.setAttribute('id', 'codesmith-popup');
//     kyle.setAttribute('id', 'kyle');
//     kyle.setAttribute('src', 'CSX-logo.png');
      
//   console.log(window.location.href);
//     setTimeout( () => {
//         body.appendChild(div);
//         div.appendChild(kyle);
//         //audio.play();
//     }, 1000);
//   })


// const consoleLog = () => { 
//     console.log(window.location.href);
//     let string = window.location.href;
//     console.log(string.substring(0, 21));
//   }

// const playAudio = () => {
//     const audio = new Audio('get-back-to-work.mp3');
//     //audio.muted = true;
//     audio.play();
//   }

// function kyle() {
//     if (document.readyState === "loading") { 
//         document.addEventListener("DOMContentLoaded", () => {
//         });
//       } else {
//         //  https://codesmith.io // 20
//         if (window.location.href !== 'https://codesmith.io/') {
//         //consoleLog();
//         alert("hi");
//         //audio.muted = false;
//         playAudio();
          
//         }
//       }
//     setTimeout(kyle, 5000); 
// }

//setTimeout(kyle, 5000); 
chrome.runtime.onMessage.addListener(function(message){
        if(message.msg === "eye"){
            const audio = new Audio('La-Jolla-Blvd.mp3');
            audio.play();        
        }
      });

chrome.runtime.onMessage.addListener(function(message){
    if(message.msg === "get"){
        const audio = new Audio('get-back-to-work.mp3');
        audio.play();        
    }
  });
