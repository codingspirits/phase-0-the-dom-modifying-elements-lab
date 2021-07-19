/*const element = document.createElement('div');
document.body.appendChild(element);
const ul = document.createElement('ul');
for (let i=0; i<3; i++) {
    const li = document.createElement('li');
    li.innerHTML = (i+1).toString();
    ul.appendChild(li);
}

element.appendChild(ul);*/

/*
<!DOCTYPE html>
<html>
  <head>
    <title>Creating and Inserting DOM Elements</title>
  </head>
  <script type="application/javascript">
  </script>
  <body>
    <main id="main"></main>
    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
*/

//const main = document.getElementsByName('main'); 
//main.remove(); //Why does this not work?
document.querySelector("main#main").remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory'

newHeader.innerHTML = "XXX is the champion"

//document.body.appendChild(newHeader)
