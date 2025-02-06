// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 
let mostrarNombre = 0;


function agregarAmigo(){
    let listAmigos = document.getElementById('amigo').value;

    if (listAmigos == ''){
        alert('Por favor, inserte un nombre.')
    }else{
        //agreagar lista de amigos.
        amigos.push(listAmigos);
        
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        
        for (let i = 0; i < amigos.length; i++) {
            let lit = document.createElement('li');
            lit.textContent = amigos[i];
            lista.appendChild(lit);
            
        }
       
    }
}

function sortearAmigo(){
    let generarAmigoAle = Math.floor(Math.random()* amigos.length)+1;
    if (generarAmigoAle == 2){
        mostrarNombre = document.getElementById("Bienev"+'resultado');
        mostrarNombre.innerHTML = '';
        
    }
    console.log(generarAmigoAle)
    
    
}

sortearAmigo();
