const respuestas = {
  "¿qué es una red social?": "Es una plataforma en línea para conectar personas, compartir contenido e interactuar.",
  "¿cuál es la red social más usada?": "Facebook sigue siendo una de las más usadas a nivel mundial.",
  "¿qué es un influencer?": "Es una persona con muchos seguidores que puede influir en las decisiones de otros.",
  "¿qué es un hashtag?": "Es una etiqueta con el símbolo # que clasifica contenidos por temas.",
  "¿para qué sirve instagram?": "Instagram se usa para compartir fotos, videos y hacer transmisiones en vivo.",
  "¿qué es un algoritmo en redes sociales?": "Es un sistema que decide qué contenido mostrarte según tus intereses.",
  "¿qué significa viral?": "Que algo se difunde rápidamente por internet alcanzando a muchas personas.",
  "¿qué es tiktok?": "Es una red social popular donde se comparten videos cortos con música o efectos.",
  "¿cuáles son los riesgos de las redes sociales?": "Pueden incluir pérdida de privacidad, ciberacoso o adicción.",
  "¿cómo proteger mi cuenta?": "Usa contraseñas seguras, activa la verificación en dos pasos y evita enlaces sospechosos."
};

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.toLowerCase().trim();

  if (userText === "") return;

  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.textContent = userText;
  chatBox.appendChild(userMsg);

  const respuesta = respuestas[userText] || "Lo siento, aún no tengo una respuesta para eso.";
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.textContent = respuesta;
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
