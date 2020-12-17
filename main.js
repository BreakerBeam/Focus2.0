if (document.readyState === "loading") { 
  // document.addEventListener("DOMContentLoaded", () => {
  // });
} else {
  if(window.location.href.slice(0,20) === 'https://codesmith.io' 
  || window.location.href.slice(0,21) === 'https://developer.moz' 
  || window.location.href.slice(0,21) === 'https://www.w3schools' 
  || window.location.href.slice(0,21) === 'https://stackoverflow' 
  || window.location.href.slice(0,18) === 'https://www.google' 
  || window.location.href.slice(0,14) === 'https://github') {
    //do nothing
  } else {
    //alert('test')

    const body = document.querySelector('body');
    const div = document.createElement('div');
    const kyle = document.createElement('img');
    const button = document.createElement('button');
    const creepyKyle = document.createElement('img');
    const link = document.createElement('button');

    div.setAttribute('id', 'codesmith-popup');

    kyle.setAttribute('id', 'kyle');
    kyle.setAttribute('src', 'https://i.giphy.com/media/hXbX1BJEMmBqDR1ASt/giphy.webp');

    button.setAttribute('id', 'secret-button')
    button.innerHTML = "Please Kyle, just let me look at silly memes"
    //button.setAttribute('onclick', 'buttonFunc()')
    button.onclick = () => {
      creepyKyle.remove();
      button.remove();
      div.appendChild(kyle);
      div.appendChild(link);
      chrome.runtime.sendMessage({msg: 'get'})
    }

    creepyKyle.setAttribute('id', 'creepyKyle');
    creepyKyle.setAttribute('src', 'https://i.giphy.com/media/n30PYbpxNVoo61pswJ/giphy.webp');

    link.setAttribute('id', 'link-to-code')
    
    link.setAttribute('onclick', "location.href = 'https://codesmith.io/';")
    link.innerHTML = "Okay, tell me where I should go to learn"

    setTimeout( () => {
        body.insertAdjacentElement('afterbegin', div);
        div.appendChild(creepyKyle);
        div.appendChild(button);
        chrome.runtime.sendMessage({msg: 'eye'})
    }, 500);

    // function buttonFunc() {
    //   creepyKyle.remove();
    //   button.remove();
    //   div.appendChild(kyle);
    //   div.appendChild(link);
    //   chrome.runtime.sendMessage({msg: 'get'})
    // }
  }
}

// // audio.muted = true;

// const consoleLog = () => { 
//   console.log(window.location.href);
//   let string = window.location.href;
//   console.log(string.substring(0, 21));
// }

// const playAudio = () => {
//   const audio = new Audio('get-back-to-work.mp3');
//   // audio.muted = true;
//   audio.play();
//   // document.getElementById('ID').play();
//   // document.removeEventListener('click', musicPlay);
// }

// if (document.readyState === "loading") { 
//   document.addEventListener("DOMContentLoaded", doSomething);
// } else {
//   //  https://codesmith.io // 20
//   if (window.location.href !== 'https://codesmith.io/') {
//   consoleLog();
//   alert('test');
//   //audio.muted = false;
//   document.addEventListener('click', playAudio)
// //  playAudio();
//    // IF you get a console.log - then you're not on codesmith    
//   }
// }

