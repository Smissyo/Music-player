# Custom Music Player 🎵

A clean, responsive, and dynamic web-based music player built from scratch. This project features real-time UI state management, custom audio event tracking, and smooth interactive progress sliders to deliver a seamless listening experience.

## 🔗 Live Demo
You can listen to the live player right in your browser here:
👉 **[Launch Custom Music Player](https://smissyo.github.io/Music-player/))**

*(Note: Remember to replace `YOUR_GITHUB_USERNAME` in the link above with your actual GitHub username!)*

## ✨ Features
* **Dynamic Playlist Controls:** Play, pause, skip forward, and jump back across a customized track list with synchronized icon state updates.
* **Smart UI Binding:** Track titles, artist metadata, and cover art swap out instantly whenever the song changes.
* **Automatic Timeline Synchronization:** A custom progress slider that advances second-by-second alongside the audio track, paired with real-time numeric time counters (`MM:SS`).
* **Manual Scrubbing/Seeking:** Click or drag anywhere along the timeline slider to instantly jump to that exact timestamp in the song.
* **Continuous Auto-Play:** Listens for the end of a track and automatically cycles to the next song in the queue for a non-stop playback loop.

## 🛠️ Built With
* **HTML5:** Semantic architecture and native audio element manipulation.
* **CSS3:** Custom styling, layout design, and fluid transitions.
* **JavaScript & jQuery:** DOM manipulation, mathematical time-to-percentage conversions, and custom audio event listening (`timeupdate`, `loadedmetadata`, `ended`).

## 📁 Project Architecture
```text
custom-music-player/
├── images/            # Album artwork and background assets
├── music/             # Audio tracks (.mp3 files)
├── index.html         # Application core structure
├── style.css          # Visual styles and layouts
├── script.js          # Main playback application logic
└── README.md          # Project documentation
