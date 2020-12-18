
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
