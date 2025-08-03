# 🎵 Mood-Based Music Recommender (Face Detection Edition)

An upgraded version of our mood-based music web app that uses **face detection and expression analysis** to recommend songs that match your current mood — no buttons needed!

## ✨ Features

- 🎭 Detects your mood using **face-api.js** via webcam
- 🎶 Automatically plays music based on detected expression:
  - 😊 Happy
  - 😢 Sad
  - 😠 Angry
  - 😲 Surprised
  - 😐 Neutral
- 🔊 Audio plays in a loop and updates every few seconds
- 📦 Lightweight and responsive interface

## 🛠 Technologies Used

- HTML, CSS, JavaScript
- [face-api.js](https://github.com/justadudewhohacks/face-api.js)
- Local `.mp3` music files stored in the `music/` directory

## 📁 Folder Structure

mood_music_project/
├── index.html
├── script.js
├── style.css
├── music/
│ ├── happy.mp3
│ ├── sad.mp3
│ ├── angry.mp3
│ ├── surprised.mp3
│ └── neutral.mp3
└── models/
└── [face-api.js model files]

bash
Copy
Edit

## 🚀 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/dharmanarukula/mood_music_project.git
   cd mood_music_project
Start a local server (required for webcam access in browser)

bash
Copy
Edit
python -m http.server
Open in browser
Visit:

arduino
Copy
Edit
http://localhost:8000
Allow webcam access

The app will automatically detect your mood and play the appropriate music.

🔐 Permissions
This app only uses your webcam temporarily in real-time to detect facial expressions.

It does not record or store any video or personal data.

✅ Future Improvements
Add custom playlists and streaming integration

Add visual mood icons/emojis

Improve expression accuracy and support more emotions

Mobile support



## How to Run
Open `index.html` in a browser.
