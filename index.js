



async function load(){
    try{
         await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()).then(console.log)
    }
    catch(e) {
        console.error(e);
    }
}