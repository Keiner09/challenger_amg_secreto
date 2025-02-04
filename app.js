// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 
let amigoAleatorio = amigos.length;

function agregarAmigo(){
    let listaAmigos = document.getElementById('amigo').value;
    if (listaAmigos == ''){
        alert('Por favor, inserte un nombre.')
    }else{
        //agreagar lista de amigos.
        amigos.push(listaAmigos);
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        
        for (let i = 1; i < amigos.length; i++) {
            let lit = document.createElement('li');
           
            lit.textContent = amigos[i];
           
            lista.appendChild(lit);
        }
        
    }

}

function sortearAmigo(){
    let generarAmigoAle = Math.floor(Math.random()* amigoAleatorio)+1;
    console.log(generarAmigoAle)
    if (generarAmigoAle == amigoAleatorio){
        console.log('dadasdj')
    }
    
}
sortearAmigo();