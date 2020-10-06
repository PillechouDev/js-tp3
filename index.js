



async function load(){
    try{
         await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()).then(console.log);
    }
    catch(e) {
        console.error(e);
    }
    response.forEach(element => {
        
    });
}

function newLign(){
    const body=document.getElementById('table-body');
    const lign=document.createElement('tr');
    const element=document.createElement('td');

    body.appendChild(lign);
    lign.appendChild(element);

}