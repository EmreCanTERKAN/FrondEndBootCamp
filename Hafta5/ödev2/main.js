// Tüm butonları seç
const buttons = document.querySelectorAll('.buttons button');

// Her buton için tıklama olay dinleyicisi ekle
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Butonun data-sound özelliğinden ses dosyasını al
        const soundFile = button.getAttribute('data-sound');
        
        // Yeni bir ses nesnesi oluştur ve çal
        const audio = new Audio(soundFile);
        audio.play();
    });
});
