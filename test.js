console.log("TEST HOT FIX");
// button function 
function buttonFunction() {
    console.log("Button clicked!");
}
// Add event listener to the button
document.getElementById("myButton").addEventListener("click", buttonFunction);
// Add a new button to the HTML
const newButton = document.createElement("button");
newButton.id = "myButton";
newButton.textContent = "Click Me!";
document.body.appendChild(newButton);
// Add a new div to the HTML
const newDiv = document.createElement("div");
newDiv.id = "myDiv";
newDiv.textContent = "This is a new div!";
document.body.appendChild(newDiv);
// Add a new paragraph to the HTML
const newParagraph = document.createElement("p");
newParagraph.id = "myParagraph";
newParagraph.textContent = "This is a new paragraph!";
document.body.appendChild(newParagraph);
// Add a new image to the HTML      
const newImage = document.createElement("img");
newImage.id = "myImage";
newImage.src = "https://via.placeholder.com/150";
newImage.alt = "Placeholder Image";
document.body.appendChild(newImage);
// Add a new input field to the HTML
const newInput = document.createElement("input");
newInput.id = "myInput";
newInput.type = "text";
newInput.placeholder = "Type something...";
document.body.appendChild(newInput);            
// Add a new select dropdown to the HTML
const newSelect = document.createElement("select");
newSelect.id = "mySelect";
const option1 = document.createElement("option");
option1.value = "option1";
option1.textContent = "Option 1";
const option2 = document.createElement("option");
option2.value = "option2";
option2.textContent = "Option 2";
newSelect.appendChild(option1);
newSelect.appendChild(option2);
document.body.appendChild(newSelect);
// Add a new checkbox to the HTML
const newCheckbox = document.createElement("input");
newCheckbox.id = "myCheckbox";
newCheckbox.type = "checkbox";
newCheckbox.name = "myCheckbox";
newCheckbox.value = "checked";
const checkboxLabel = document.createElement("label");
checkboxLabel.htmlFor = "myCheckbox";
checkboxLabel.textContent = "Check me!";
document.body.appendChild(newCheckbox);
document.body.appendChild(checkboxLabel);   