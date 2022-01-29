
function criandoCotacao() {

    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const plano = document.getElementById("reg");
    const id = document.getElementById("id1");

    let dados = JSON.parse(localStorage.getItem("dadosCotacao")) ?? [];

    dados.push({
        nome: nome.value,
        idade: idade.value,
        plano: plano.value,
        id: id.value
    });

    localStorage.setItem("dadosCotacao", JSON.stringify(dados));
    alert("Registro incluido com sucesso para cotação! ")


    nome.value = "";
    idade.value = "";
    plano.value = "";
    id.value = "";

}

