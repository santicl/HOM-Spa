document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector('.Video-Header-Mobile');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const headerText = document.querySelector('.Brand__Image');

    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            headerText.style.visibility = 'hidden';
        } else {
            video.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            headerText.style.visibility = 'visible';
        }
    });

    video.addEventListener('ended', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        headerText.style.visibility = 'visible';
        video.load(); // Recarga el video para que vuelva a mostrar el poster
    });

    video.addEventListener('canplaythrough', function() {
        playPauseBtn.style.display = 'block';
    });
});