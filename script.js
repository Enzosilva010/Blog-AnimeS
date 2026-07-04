function abrirPagina(pagina){

    window.open(pagina, "_blank");

}

const botao = document.getElementById("darkMode");

botao.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

function enviarComentario(){

    const comentario = document.querySelector(".comentarios textarea");

    if(comentario.value.trim() === ""){

        alert("Escreva um comentário antes de enviar!");

        return;

    }

    comentario.value="";

    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("contador");

    mensagem.classList.add("ativa");

    let tempo = 3;

    contador.textContent = "Fechando em " + tempo + "...";

    const intervalo = setInterval(()=>{

        tempo--;

        if(tempo > 0){

            contador.textContent = "Fechando em " + tempo + "...";

        }else{

            clearInterval(intervalo);

            mensagem.classList.remove("ativa");

        }

    },1000);

}
