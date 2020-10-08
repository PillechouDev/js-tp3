
async function load(){
    try{
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        
        

        const tasks = await response.json();

        tasks.forEach(element =>
           newLign(element.id,element.title,element.completed),
           
        );

        showHit(tasks.length);

    }
    catch(e) {
        console.error(e);
    }
    
}

function newLign(id,title,completed){
    const body=document.getElementById('table-body');
    const lign=document.createElement('tr');
    body.appendChild(lign);
    lign.innerHTML+=`<td>${id}</td>`;
    lign.innerHTML+=`<td>${title}</td>`;
    lign.innerHTML+=`<td id="${completed}">${completed}</td>`;
}

function showHit(hit){
    document.getElementById('hit').innerHTML+=`<p>Le nombre de reponse est de : ${hit}`
}


function send(){
    nameTask = document.getElementById('title').value
    choiceCompleted = document.getElementById('choice').value
    var request = fetch('https://jsonplaceholder.typicode.com/todos', { 
      
        // Adding method type 
        method: "POST", 
          
        // Adding body or contents to send 
        body: JSON.stringify({ 
            title: nameTask,
            completed: choiceCompleted
        }), 
          
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }) 
      
    // Converting to JSON 
    .then(response => response.json()) 
    
    // Displaying results to console 
    .then(json => newLign(json.id,json.title,json.completed)); 
    
}

