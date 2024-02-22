let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null;
let laps = [];

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("lap-timer").addEventListener("click", () => {
  if (int !== null) {
    laps.push(`${hours} : ${minutes} : ${seconds} : ${milliseconds}`);
    updateLapList();
  }
});

document.getElementById("pause-timer").addEventListener("click", () => {
	clearInterval(int);
  });
  
  document.getElementById("reset-timer").addEventListener("click", () => {
	clearInterval(int);
	[milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
	timerRef.innerHTML = "00 : 00 : 00 : 000";
  });
  
  document.getElementById("reset-timer").addEventListener("click", () => {
	  laps = [];
	  updateLapList();
	});


function displayTimer() {
  milliseconds += 10;
  seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds;
  minutes = seconds == 0 && milliseconds == 0 ? (minutes + 1) % 60 : minutes;
  hours = minutes == 0 && seconds == 0 && milliseconds == 0 ? hours + 1 : hours;
  milliseconds = milliseconds == 1000 ? 0 : milliseconds;

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(milliseconds).padStart(3, "0");

  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}




function updateLapList() {
	let lapList = document.getElementById("lap-list");
	lapList.innerHTML = "";
  
	for (let i = 0; i < laps.length; i++) {
	  let lapItem = document.createElement("li");
	  lapItem.innerText = `Lap ${i + 1}: ${laps[i]}`;
	  lapList.appendChild(lapItem);
	}
  }

  
