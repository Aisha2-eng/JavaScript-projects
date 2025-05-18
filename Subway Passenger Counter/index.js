        // document.getElementById("passenger-count").innerText=5;
let count =0;
let saveEl = document.getElementById("save-el");
function increment() {
    count++;
    document.getElementById("passenger-count").textContent = count;
}

function save() {
   saveEl.textContent += count + " - ";
   document.getElementById("passenger-count").textContent = 0;
    count = 0;
}