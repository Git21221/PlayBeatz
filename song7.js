console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("song7/1.mp3");
let bottomPlay = document.getElementById('bottomPlay');
let bottomPlay1 = document.getElementById('bottomPlay1');
let progBar = document.getElementById('progBar');
let songPic = document.getElementById('songPic');
let ftrSongDisplayName = document.getElementById('ftrSongDisplayName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let timeStamp = document.getElementsByClassName("timeStamp").duration;
let track = document.getElementsByClassName('track')[0];
let circleontrack = document.getElementsByClassName('circleontrack')[0];
let dot = document.getElementsByClassName('dot')[0];
let songs = [
    { songName: "Desh Mere (Mohammad Rafi)", coverPath: "cover7/1.jpg"},
    { songName: "Gerua - Dilwale (Mohammad Rafi)", coverPath: "cover7/2.jpg"},
    { songName: "Janam Janam - Dilwale (Mohammad Rafi)", coverPath: "cover7/3.jpg"},
    { songName: "Kalank - Title Song(Mohammad Rafi)", coverPath: "cover7/4.jpg"},
    { songName: "Khairiyat Sad – Chhichhore(Mohammad Rafi)", coverPath: "cover7/5.jpg"},
    { songName: "Raabta - Title Song (Mohammad Rafi)", coverPath: "cover7/6.jpg"},
    { songName: "Phir Mohabbat - Murder 2(Mohammad Rafi)", coverPath: "cover7/7.jpg"},
    { songName: "Tera Yaar Hoon Main - Sonu Ke Titu Ki Sweety(Mohammad Rafi)", coverPath: "cover7/8.jpg"},
    { songName: "Tum Hi Ho - Aashiqui 2 (Mohammad Rafi)", coverPath: "cover7/9.jpg"},
    { songName: "Tum Saath Ho - Tamasha (Mohammad Rafi)", coverPath: "cover7/10.jpg"},
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// Handle play/pause click
bottomPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        bottomPlay.classList.remove('fa-play');
        bottomPlay1.classList.remove('fa-play');
        bottomPlay.classList.add('fa-pause');
        bottomPlay1.classList.add('fa-pause');
        songPic.style.opacity = 1;
    }
    else {
        audioElement.pause();
        bottomPlay.classList.remove('fa-pause');
        bottomPlay1.classList.remove('fa-pause');
        bottomPlay.classList.add('fa-play');
        bottomPlay1.classList.add('fa-play');
        songPic.style.opacity = 0;
    }
})



// Listen to Events
let timeStart = document.getElementById('timeStart');
let timeEnd = document.getElementById('timeEnd');
audioElement.addEventListener('timeupdate', () => {

    let music_curr = audioElement.currentTime;
    let music_dur = audioElement.duration;

    // update curr time
    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    timeStart.innerText = `${min1}:${sec1}`;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    timeEnd.innerText = `${min}:${sec}`;

    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progBar.value = progress;
    let seekBar = progBar.value;
    track.style.width = `${seekBar}%`;
    circleontrack.style.left = `${seekBar}%`;
})

progBar.addEventListener('change', () => {
    audioElement.currentTime = progBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `song7/${songIndex + 1}.mp3`;
        songPic.src = `cover7/${songIndex + 1}.jpg`;
        ftrSongDisplayName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        songPic.style.opacity = 1;
        bottomPlay.classList.remove('fa-play');
        bottomPlay1.classList.remove('fa-play');
        bottomPlay.classList.add('fa-pause');
        bottomPlay1.classList.add('fa-pause');
    })
})

// next button

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song7/${songIndex + 1}.mp3`;
    songPic.src = `cover7/${songIndex + 1}.jpg`;
    ftrSongDisplayName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    bottomPlay.classList.remove('fa-play');
    bottomPlay1.classList.remove('fa-play');
    bottomPlay.classList.add('fa-pause');
    bottomPlay1.classList.add('fa-pause');
})

// previous button

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song7/${songIndex + 1}.mp3`;
    songPic.src = `cover7/${songIndex + 1}.jpg`;
    ftrSongDisplayName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    bottomPlay.classList.remove('fa-play');
    bottomPlay1.classList.remove('fa-play');
    bottomPlay.classList.add('fa-pause');
    bottomPlay1.classList.add('fa-pause');
})

let vol_icon = document.getElementById('vol_icon');
let volBar = document.getElementById('volBar');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
volBar.addEventListener('change', () => {
    if (volBar.value == 100) {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume');
        vol_icon.classList.remove('fa-volume-low');
    }
    if (volBar.value == 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume');
        vol_icon.classList.remove('fa-volume-low');
    }
    if (volBar.value > 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume');
        vol_icon.classList.add('fa-volume-low');
    }

    if (volBar.value > 25) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.add('fa-volume');
        vol_icon.classList.remove('fa-volume-low');
    }

    if (volBar.value > 55) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.add('fa-volume');
        vol_icon.classList.remove('fa-volume-low');
    }
    if (volBar.value > 50) {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume');
        vol_icon.classList.remove('fa-volume-low');
    }

    let vol_a = volBar.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    audioElement.volume = vol_a / 100;
})
