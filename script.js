const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Play & Pause Video

const toggleVideoStatus = () => {
    return true;
}


// update play pause icon
const updatePlayIcon = () => {
    return true;
}

// update progress and time stamp

const updateProgress = () => {
    return true;
}


// Event Listenders
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', togglePlayIcon);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
