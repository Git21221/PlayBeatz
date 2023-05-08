console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("song9/1.mp3");
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
    { songName: "Abhi Na Jao – Hum Dono (Asha)", coverPath: "cover9/1.jpg"},
    { songName: "O Mere Raja – Johny Mere Naam (Asha)", coverPath: "cover9/2.jpg"},
    { songName: "Aap Yaha Aaye Kis Liye – Kal Aaj Aur Kaal (Asha)", coverPath: "cover9/3.jpg"},
    { songName: "Radha Kaise Na Jaale – Lagan (Asha)", coverPath: "cover9/4.jpg"},
    { songName: "Pyaar Humara Amar Rahega - Muddat(Asha)", coverPath: "cover9/5.jpg"},
    { songName: "Chhod Do Aanchal – Paying Guest (Asha)", coverPath: "cover9/6.jpg"},
    { songName: "Kya Dekhte Ho - Qurbani(Asha)", coverPath: "cover9/7.jpg"},
    { songName: "Rangeela Re - Rangeela(Asha)", coverPath: "cover9/8.jpg"},
    { songName: "Pyaar Karne Waale - Shaan (Asha)", coverPath: "cover9/9.jpg"},
    { songName: "Do Lafzon Ki Hain Dil Ki – The Great Gambler (Asha)", coverPath: "cover9/10.jpg"},
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

        element.classList.remove('fa-music');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-music');
        audioElement.src = `song9/${songIndex + 1}.mp3`;
        songPic.src = `cover9/${songIndex + 1}.jpg`;
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
    audioElement.src = `song9/${songIndex + 1}.mp3`;
    songPic.src = `cover9/${songIndex + 1}.jpg`;
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
    audioElement.src = `song9/${songIndex + 1}.mp3`;
    songPic.src = `cover9/${songIndex + 1}.jpg`;
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

