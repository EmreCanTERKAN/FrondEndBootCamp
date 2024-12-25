

document.addEventListener("DOMContentLoaded", () => {
    // Kullanıcıdan bir değer alıyoruz
    const userValue = prompt("Lütfen adınızı girin:");
  
    // Span etiketini seçiyoruz
    const displaySpan = document.getElementById("myName");
  
    // Girilen değeri span içine yazıyoruz (değer girilmezse varsayılan mesaj)
    displaySpan.innerHTML = userValue ? userValue : "Değer girilmedi";
  });
  
  document.addEventListener("DOMContentLoaded", () => {
      const clockDiv = document.getElementById("myClock");
  
      let seconds = 0; // Saniye başlangıç değeri
      let minutes = 0; // Dakika başlangıç değeri
      let hours = 0;   // Saat başlangıç değeri
  
      // Başlangıç günü alınıyor
      const startDayIndex = new Date().getDay(); // Şu anki gün (0: Pazar, 1: Pazartesi, ...)
      const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
      const startDayName = days[startDayIndex]; // Şu anki günün adı
  
      // Sayaç fonksiyonu
      function updateTimer() {
          seconds++; // Saniyeyi artır
  
          if (seconds === 60) {
              seconds = 0;
              minutes++; // Dakikayı artır
          }
          if (minutes === 60) {
              minutes = 0;
              hours++; // Saati artır
          }
  
          // Zaman formatını oluştur
          const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          
          // Sonuçları div'e yazdır
          clockDiv.innerHTML = `${timeString} ${startDayName}`;
      }
  
      // Her 1 saniyede bir çalıştır
      setInterval(updateTimer, 1000);
  });
  