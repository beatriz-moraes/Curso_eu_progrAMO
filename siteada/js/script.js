
document.getElementById("botaoEnviar").addEventListener("click", validaForm)

function validaForm (){
	if (document.getElementById("nome").value != "" && document.getElementById("email").value != "") {
		alert("Prontinho, você receberá as novidades por e-mail")

	}else{
		alert("Por favor, preencha os campos nome e email!")
	}
}