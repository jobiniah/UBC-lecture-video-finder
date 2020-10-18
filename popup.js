  let searchButton = document.getElementById('searchButton');

  searchButton.onclick = function(element) {
    chrome.tabs.executeScript({
        code: `
        var video = document.getElementById("playback-video-playback-video_html5_api");
        a=video.getAttribute('src')
        window.open(a, "_blank");
        `        
    });
  };


