


a=2;
async function load(){
    try{
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const task = await response.json();
        
        task.forEach(element =>
           newLign(element.id,element.title,element.completed)
        );
    }
    catch(e) {
        console.error(e);
    }
    
}

function newLign(id,title,completed){
    console.log(id,title,completed)
    const body=document.getElementById('table-body');
    const lign=document.createElement('tr');
    
    body.appendChild(lign);
    lign.innerHTML+=`<td>${id}</td>`;
    lign.innerHTML+=`<td>${title}</td>`;
    lign.innerHTML+=`<td>${completed}</td>`;
    
}