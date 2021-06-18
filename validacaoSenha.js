

function validarSenha(){
    
const senha = document.getElementById('senha').value;
const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha != confirmarSenha){ 

         alert("Confirmação de senha incorreta");
         document.getElementById('senha').value = "";
         document.getElementById('confirmarSenha').value = "";
         document.getElementById('confirmarSenha').disabled = true;

         return false;
    }
    
    return true; 
}

function desabilitarConfirmar(){
    const senha = document.getElementById('senha').value;
    
    if(senha == '' || senha == " "){
        document.getElementById('confirmarSenha').disabled = true;
        document.getElementById('confirmarSenha').value = "";

        return true
    }
    else{
        document.getElementById('confirmarSenha').disabled = false;
      return false
    }
        
}

window.onload = desabilitarConfirmar()

