function formCotacao(){

    var form =  document.getElementById("formulario");    
    var form2 =  document.getElementById("formulario2");

}

function criandoCotacao(){
    

    var nome = document.getElementsByName("nome");
    var idade = document.getElementsByName("idade");
    var plano = document.getElementsByName("reg");   
    var id = document.getElementsByName("id1");

    var dados = JSON.parse(localStorage.getItem("dadosCotacao"));

        
    if (dados.length == null)
    {
        localStorage.setItem("dadosCotacao", "[]");
        dados = [];
    }

    var auxRegistro = {
        nome: nome.value,
        idade: idade.value,
        plano: plano.value,
        id: id1.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosCotacao", JSON.stringify(dados));
    alert("Registro incluido com sucesso para cotação! ")

   nome.value = "";
    idade.value = "";
    plano.value = "";
    id.value = "";



  
}