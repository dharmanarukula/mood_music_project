function recommendMusic(mood) {
  let music;
  switch (mood) {
    case 'happy':
      music = 'Try "Happy" by Pharrell Williams or some upbeat pop!';
      break;
    case 'sad':
      music = 'Listen to "Someone Like You" by Adele or mellow acoustic tracks.';
      break;
    case 'angry':
      music = 'Rock out to Linkin Park or go for heavy metal to let it out.';
      break;
    case 'relaxed':
      music = 'Try some Lo-fi, Jazz, or Chillhop playlists.';
      break;
    default:
      music = 'Please select a mood.';
  }
  document.getElementById("recommendation").innerText = music;
}
