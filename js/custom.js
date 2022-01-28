var controleCampo = 1;
function adicionarCampo() {
    controleCampo++;
    document.getElementById('formulario').insertAdjacentHTML('beforeend', '<div class="form-group" id="campo' + controleCampo + '"><span id="msgAlerta' + controleCampo + '"<label> Nome: </label><input type="text" name="nome' + controleCampo + '" id="nome' + controleCampo + '" placeholder="Nome do beneficiario" /> <label> Idade: </label><input type="number" name="idade' + controleCampo + '" id="idade' + controleCampo + '" placeholder="Idade do beneficiario" /> <button type="button" id="' + controleCampo + '" onclick="removerCampo (' + controleCampo + ')"> -  </button></div>');    
    var id = document.getElementById("campo").value = controleCampo;
}

function removerCampo(campo){
    document.getElementById('campo' + campo).remove();
}