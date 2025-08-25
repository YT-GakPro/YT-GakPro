document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih, pesan kamu sudah terkirim!");
  });
});
