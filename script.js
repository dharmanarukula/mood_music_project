const video = document.createElement("video");
video.autoplay = true;
video.style.display = "none";
document.body.appendChild(video);

const recommendation = document.getElementById("recommendation");

// Load models from public CDN
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/'),
  faceapi.nets.faceExpressionNet.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/')
]).then(startVideo);

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: {} })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => console.error("Error accessing webcam: ", err));
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.appendChild(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detections.length > 0) {
      const expression = Object.entries(
        detections[0].expressions
      ).reduce((a, b) => (a[1] > b[1] ? a : b))[0];

      recommendation.innerText = getMusicRecommendation(expression);
    }
  }, 3000);
});

function getMusicRecommendation(expression) {
  let message = "";
  let audioSrc = "";

  switch (expression) {
    case "happy":
      message = "😊 You're happy! Playing upbeat music!";
      audioSrc = "music/happy.mp3";
      break;
    case "sad":
      message = "😢 Feeling down? Playing something calm.";
      audioSrc = "music/sad.mp3";
      break;
    case "angry":
      message = "😠 Angry? Playing something relaxing.";
      audioSrc = "music/angry.mp3";
      break;
    case "surprised":
      message = "😲 Wow! Playing energetic music.";
      audioSrc = "music/surprised.mp3";
      break;
    case "neutral":
      message = "😐 Neutral mood detected. Here's something light.";
      audioSrc = "music/neutral.mp3";
      break;
    default:
      message = "🎶 Detecting mood... hang tight!";
  }

  playMusic(audioSrc);
  return message;
}

function playMusic(src) {
  if (!src) return;
  let audio = document.getElementById("bg-music");
  if (!audio) {
    audio = document.createElement("audio");
    audio.id = "bg-music";
    audio.loop = true;
    document.body.appendChild(audio);
  }
  audio.src = src;
  audio.play().catch(e => console.warn("Music play blocked:", e));
}
