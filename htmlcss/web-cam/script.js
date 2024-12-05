document.getElementById('openCameraBtn').addEventListener('click', openCamera);
document.getElementById('closeCameraBtn').addEventListener('click', closeCamera);

function openCamera() {
    document.getElementById('cameraContainer').classList.remove('hidden');
    
    // Получаем доступ к камере
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const videoElement = document.getElementById('videoElement');
            videoElement.srcObject = stream;
        })
        .catch(err => {
            console.error('Ошибка доступа к камере:', err);
        });
}

function closeCamera() {
    const videoElement = document.getElementById('videoElement');
    const stream = videoElement.srcObject;
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
    
    document.getElementById('cameraContainer').classList.add('hidden');
}
