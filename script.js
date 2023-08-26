let timeLeft = 50;
let hacking = false;
let portsOpened = false;
let currentFolder = 1;

//codes
function generateRandomCode() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    code += letters.charAt(randomIndex);
  }

  return code;
}

let codes = [generateRandomCode(), generateRandomCode(), generateRandomCode(), generateRandomCode()];
document.querySelector('#unlocker1pswd').textContent = codes[0];
document.querySelector('#unlocker2pswd').textContent = codes[1];
document.querySelector('#unlocker3pswd').textContent = codes[2];
document.querySelector('#unlocker4pswd').textContent = codes[3];

function updateTime() {
  document.getElementById("time").textContent = timeLeft;
}

function updateStatus(message) {
  document.getElementById("hack-status").textContent = message;
}

function openPorts() {
  if (!portsOpened) {
    if (document.querySelector('#unlocker1input').value.toUpperCase() == codes[0] && document.querySelector('#unlocker2input').value.toUpperCase() == codes[1]) {
      portsOpened = true;
      document.getElementById("open-ports").disabled = true;
      document.getElementById("open-ports").textContent = "Ports 22 & 23 opened. Start stage 2.";
    }

  }
}

function navigateFolder(folderNumber) {
  switch (folderNumber) {
    case 1:
      document.querySelector('#folderContent1').style.display = "block";

      document.querySelector('#folderContent0').style.display = "none";
      document.querySelector('#folderContent2').style.display = "none";
      document.querySelector('#folderContent3').style.display = "none";
      document.querySelector('#folderContent4').style.display = "none";
      break;
    case 2:
      document.querySelector('#folderContent2').style.display = "block";

      document.querySelector('#folderContent0').style.display = "none";
      document.querySelector('#folderContent1').style.display = "none";
      document.querySelector('#folderContent3').style.display = "none";
      document.querySelector('#folderContent4').style.display = "none";
      break;
    case 3:
      document.querySelector('#folderContent3').style.display = "block";

      document.querySelector('#folderContent0').style.display = "none";
      document.querySelector('#folderContent1').style.display = "none";
      document.querySelector('#folderContent2').style.display = "none";
      document.querySelector('#folderContent4').style.display = "none";
      break;
    case 4:
      document.querySelector('#folderContent4').style.display = "block";

      document.querySelector('#folderContent0').style.display = "none";
      document.querySelector('#folderContent1').style.display = "none";
      document.querySelector('#folderContent2').style.display = "none";
      document.querySelector('#folderContent3').style.display = "none";
      break;

    default:
      break;
  }
}

function startHacking() {
  if (portsOpened == true && document.querySelector('#unlocker3input').value.toUpperCase() == codes[2] && document.querySelector('#unlocker4input').value.toUpperCase() == codes[3]) {
    hacking = true;
    document.querySelector('#hacking').textContent = 'SERVER DATA: MMFSAASBNNN';
    document.querySelector('#hacking').disabled = true;
  }
}


// Timer logic
const interval = setInterval(() => {
  if (hacking) {
    clearInterval(interval);
  } else {
    timeLeft--;
    updateTime();
    if (timeLeft <= 0) {
      clearInterval(interval);
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  }
}, 1000);
