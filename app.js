// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 


//funcion para agregar amigos
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
        limpiarCaja();
    }
    return

}

//funcion para sortearn amigos
function sortearAmigo(){
    if (amigos.length > 0){
        let generarAmigoAle = Math.floor(Math.random()* amigos.length);
        let amigoAleatorio = amigos[generarAmigoAle];
     
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = '';
        let lit = document.createElement('li');
        lit.textContent = `Tu amigo secreto es ${amigoAleatorio}`;
        amigoSorteado.appendChild(lit);
    }else{
        alert('NO HAY AMIGOS INGRESADOS PARA SORTEAR.')
    }
    return
}
//funcion para limpiar la caja de texto
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}
//Para agregar amigos con el evento enter 
document.getElementById('amigo').addEventListener('keydown', function(enter){
    if (enter.key === 'Enter'){
        enter.preventDefault();
        agregarAmigo();
    }
});


