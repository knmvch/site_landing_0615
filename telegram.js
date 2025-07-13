document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const token = "7275369844:AAFfi8fSiyys95mCwz6elV2_k4nlN-_uRkY";
  const chatId = "7275369844";
  const name = this.name.value;
  const phone = this.phone.value;
  const message = this.message.value;

  const text = `💆‍♀️ Новая заявка:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📝 Сообщение: ${message}`;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

  fetch(url).then(() => {
    document.getElementById("status").innerText = "Заявка отправлена!";
    this.reset();
  }).catch(() => {
    document.getElementById("status").innerText = "Ошибка отправки 😢";
  });
});
