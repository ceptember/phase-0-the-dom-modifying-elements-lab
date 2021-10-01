// Write your code here!
//remove the <main> with id 'main':
/*'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME 
is the champion" inside: */

document.getElementById('main').remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Christy is the champion"
document.body.append(newHeader);