let timeLeft = 120;
let hacking = false;
let portsOpened = false;
let currentFolder = 1;

function updateTime() {
  document.getElementById("time").textContent = timeLeft;
}

function updateStatus(message) {
  document.getElementById("hack-status").textContent = message;
}

function openPorts() {
  if (!portsOpened) {
    portsOpened = true;
    document.getElementById("open-ports").disabled = true;
    document.getElementById("folder1").style.display = "block";
    updateStatus("Ports opened. Start navigating through the folders.");
  }
}

function navigateFolder(folderNumber) {
  switch (folderNumber) {
    case 1:
      document.querySelector('#folderContent1').style.display = "block";

      document.querySelector('#folderContent0').style.display = "none";
      document.querySelector('#folderContent2').style.display = "none";
      break;
    case 2:
      document.querySelector('#folderContent2').style.display = "block";

      document.querySelector('#folderContent0').style.display = "none";
      document.querySelector('#folderContent1').style.display = "none";
      break;

    default:
      break;
  }
}

function startHacking() {
  if (!hacking && portsOpened) {
    updateStatus("You need to navigate the folders first.");
  } else if (!hacking && !portsOpened) {
    updateStatus("You need to open ports first.");
  }
}

// Timer logic
const interval = setInterval(() => {
  if (hacking) {
    clearInterval(interval);
    updateStatus("Hacking complete.");
  } else {
    timeLeft--;
    updateTime();
    if (timeLeft <= 0) {
      clearInterval(interval);
      updateStatus("Hacking attempt failed!");
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  }
}, 1000);
