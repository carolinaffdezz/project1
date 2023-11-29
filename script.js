
//Para el progreso de la serie

let episodesCount = 830;
let progressCount = 249;

function decrementEpisodes() {
    if (episodesCount > 0) {
      episodesCount--;
      progressCount--;
      updateEpisodes();
    }
  }

function updateEpisodes() {
  const episodesCountElement = document.getElementById('episodesCount');
  const progressCountElement = document.getElementById('progressCount');

  episodesCountElement.innerText = episodesCount;
  progressCountElement.innerText = progressCount;

}

function incrementEpisodes() {
    episodesCount++;
    progressCount++;
    updateEpisodes();
    showInteraction();
  }
  

//Para que salga un mensaje cada vez que le damos al +
function showInteraction() {
    const interactionContainer = document.createElement('div');
    interactionContainer.classList.add('gente');

    const timestamp = new Date();
    const timeElapsed = calculateTimeElapsed(timestamp);
  
    interactionContainer.innerHTML = `
      
    <div id="gente">
    <div>
        <img src="https://pm1.aminoapps.com/6427/ad1c18ec21693a01d8150264abf6ff18f7a5489c_hq.jpg" alt="One piece">
    </div>
        <div class="visto">
            <div class="time">
            <div class="esteban">
                carolinaffdezz
            </div>
            <div>
                ${timeElapsed}
            </div>
            </div>
        <div>
            Watched episode ${progressCount} of
        </div>
        <div class="esteban">
            One Piece
        </div>
        <div>
            <a href="/project1/Follow/follow.html"><img id="donk" src="https://i.pinimg.com/736x/c5/37/51/c537514842e075654fe04aab0e7a6d2f.jpg" alt="deku"></a>
        </div>
    </div>
    </div>
    `;
  
    // Añade la interacción al cuerpo del documento

    const watchedEpisodeMessageContainer = document.getElementById('watched-episode-message');
    watchedEpisodeMessageContainer.innerHTML = '';
    watchedEpisodeMessageContainer.appendChild(interactionContainer);
  }
  

function calculateTimeElapsed(timestamp) {
  const now = new Date();
  const timeDiff = now - timestamp;
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return 'Just now';
  }
}

    
  //Para que al darle click el cuadro de texto se ponga en blanco
  function clearStatusText() {
    const statusTextElement = document.getElementById('write-status');
    if (statusTextElement.innerText === 'Write a status...') {
      statusTextElement.innerText = '';
    }
  }
  


function postStatus() {
    const statusTextElement = document.getElementById('write-status');
    const statusText = statusTextElement.innerText.trim();
  
    if (statusText === '' || statusText === 'Write a status...') {
      alert('El estado no puede estar vacío');
      return;
    }
  
    const statusesContainer = document.getElementById('statuses');
    const statusElement = document.createElement('div');
    const timestamp = new Date();
    const timeElapsed = calculateTimeElapsed(timestamp);
    statusElement.classList.add('status-entry');
    statusElement.innerHTML = `
      <div class="user-avatar">
        <img id="fotoUsuario" height=50px src="https://i.pinimg.com/736x/c5/37/51/c537514842e075654fe04aab0e7a6d2f.jpg" alt="user-avatar">
      </div>
      <div class="status-text">
        <div class="user-name">
          carolinaffdezz
        </div>
        <div class="status-content">
          ${statusText}
        </div>
        <div class="timestamp">
          ${timeElapsed}
        </div>
        <button onclick="replyToStatus(this)">Reply</button>
      </div>
    `;
  
    statusesContainer.appendChild(statusElement);
  
    // Limpiar el área de escritura después de publicar el estado
    statusTextElement.innerText = 'Write a status...';
  }
  
  
  function replyToStatus(button) {
    const statusText = prompt('Reply to this status:');
    if (statusText) {
      const replyContainer = document.createElement('div');
      const timestamp = new Date();
      const timeElapsed = calculateTimeElapsed(timestamp);
      replyContainer.classList.add('reply-entry');
      replyContainer.innerHTML = `
        <div class="user-avatar">
          <img id="fotoUsuario" src="https://i.pinimg.com/736x/c5/37/51/c537514842e075654fe04aab0e7a6d2f.jpg" alt="user-avatar">
        </div>
        <div class="status-text">
          <div class="user-name">
            carolinaffdezz
          </div>
          <div class="status-content">
            ${statusText}
          </div>
          <div class="timestamp">
            ${timeElapsed}
          </div>
        </div>
      `;
  
      // Crear un contenedor adicional para la respuesta
      const replyContainerWrapper = document.createElement('div');
      replyContainerWrapper.classList.add('reply-container');
      replyContainerWrapper.appendChild(replyContainer);
  
      // Insertar la respuesta justo después del estado original
      const statusEntry = button.parentElement.parentElement;
      statusEntry.insertAdjacentHTML('afterend', replyContainerWrapper.outerHTML);
    }
  }            


//modo oscuro

// Supongamos que tienes una variable llamada currentMode que contiene el modo actual
var currentMode = "dark"; // Cambia esto según tus necesidades

// Ahora, construye la URL de la imagen usando la variable currentMode
var imageUrl = "https://cdn3.iconfinder.com/data/icons/photography/512/Icon_20-512.png";
if (currentMode === "dark") {
    imageUrl = "https://cdn3.iconfinder.com/data/icons/photography/512/Icon_20-512.png";
} else if (currentMode === "light") {
    imageUrl = "https://cdn3.iconfinder.com/data/icons/photography/512/Icon_20-512.png";
}

// Obtiene la referencia al elemento de imagen por su ID
var modoInterruptor = document.getElementById("modoInterruptor");

// Luego, establece la fuente de la imagen con la URL construida
modoInterruptor.src = imageUrl;

