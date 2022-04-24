// Write your code here!
const element = document.getElementById("main");
document.body.remove(element);

const newHeader = document.createElement("h1");
newHeader.id ="victory"
newHeader.textContent="Lian Hong is the champion"
document.body.append(newHeader);