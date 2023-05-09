
//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"anzina",
    senhaUsuario:"12345"
}

localStorage.setItem("user1",)

//VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO
const usuario = {
    nomeUsuario:"",
    senhaUsuario:""
}

localStorage.setItem("user1", usuario1)
localStorage.setItem("user2", usuario2)


addEventListener("click",(evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;

        //Armazenando os dados no OBJETO
        usuario.nomeUsuario = document.querySelector("#idUser").value;
        usuario.senhaUsuario = document.querySelector("#idPass").value;
        const h1Titulo = document.querySelector("#titulo");
        //VALIDAÇÃO
        if(usuario.nomeUsuario == "pf0670" && usuario.senhaUsuario == "12345"){
            console.log("VALIDADO!");   
            h1Titulo.innerHTML = "Bem vindo : " + usuario.nomeUsuario;
        }else{
            console.log("NÃO VALIDOU!");
            h1Titulo.innerHTML = "";
        }


    }

});