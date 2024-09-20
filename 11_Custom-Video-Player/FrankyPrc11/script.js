const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const fullScreenBtn = player.querySelector('.fullScreen');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//點擊切換播放/暫停 
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    const icon = video.paused ? `<i class="icon-play"></i>` : `<i class="icon-pause"></i>`;
    toggle.innerHTML = icon;
    video[method]();
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);


