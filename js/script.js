var op = 0;
var nome = "";
var idade = 0;
var sexo = "";

function clica() {
    if (window.event.keyCode === 13 && op != 2) {
        enviar();
    }
}

function o(){
	sexo = "Outro";
	$('#enviar').show();
}
function m(){
	sexo = "Masculino";
	$('#enviar').show();
}
function f(){
	sexo = "Feminino";
	$('#enviar').show();
}

function enviar (){	
	var html = "";
	var novoTexto = "";
	var $target = $('#chatlogs');
	switch(op){
		case 0://nome
			nome = document.getElementById("texto").value;
			//nova pergunta
			novoTexto = "<div class=\"chat friend\">"+
			"<div class=\"user-photo\"><img src=\"img/user-one.png\"></div>"+
			"<p class=\"chat-message\">Muito bem, "+ nome +
			", prazer em lhe conhecer. Poderia me informar sua idade?</p></div>";
			//resposta
			html = "<div class=\"chat self\">"+
			"<div class=\"user-photo\"><img src=\"img/user-two.png\"></div>"+
			"<p class=\"chat-message\">"+ nome +"</p></div>";
			//enviando resposta e nova pergunta
			$(html).appendTo("#msg");
			$(novoTexto).appendTo("#msg");
			//limpando o campo de digitação 
			document.getElementById('texto').value='';
			//reescrevendo o placeholder
			$('#texto').attr("placeholder", "Digite sua idade");
			op++;
			$target.animate({
				scrollTop: $target.height()
			},1000);
		break;
		case 1://idade
			idade = document.getElementById("texto").value;
			//nova pergunta
			novoTexto = "<div class=\"chat friend\">"+
			"<div class=\"user-photo\"><img src=\"img/user-one.png\"></div>"+
			"<p class=\"chat-message\">Já que tens "+ idade +
			" anos, <br> Vamos para mais uma pergunta: Qual seu sexo:</p><br>"+
			"<button class=\"botao-sexo\" onclick=\"o()\">Outro</button>"+
			"<button class=\"botao-sexo\" onclick=\"f()\">Feminino</button>"+
			"<button class=\"botao-sexo\" onclick=\"m()\">Masculino</button>"+
			"</div>";
			//resposta
			html = "<div class=\"chat self\">"+
			"<div class=\"user-photo\"><img src=\"img/user-two.png\"></div>"+
			"<p class=\"chat-message\">"+ idade +"</p></div>";
			
			$(html).appendTo("#msg");
			$(novoTexto).appendTo("#msg");
			document.getElementById('texto').value='';
			$('#texto').attr("placeholder", "Escolha seu sexo em uma das caixas acima");
			op++;
			
			$('#enviar').hide();
			$target.animate({
				scrollTop: $target.height()
			},1000);
		break;
		case 2://sexo
			novoTexto = "<div class=\"chat friend\">"+
			"<div class=\"user-photo\"><img src=\"img/user-one.png\"></div>"+
			"<p class=\"chat-message\">Nome: "+ nome +
			"<br>Idade: "+ idade +"<br>Sexo: "+ sexo +"<br></p>"+
			"</div>";

			html = "<div class=\"chat self\">"+
			"<div class=\"user-photo\"><img src=\"img/user-two.png\"></div>"+
			"<p class=\"chat-message\">"+ sexo +"</p></div>";
			
			document.getElementById('texto').value='';
			$(html).appendTo("#msg");
			$(novoTexto).appendTo("#msg");
			op++;
			
			$target.animate({
				scrollTop: $target.height()
			},1000);
			
			$('#enviar').hide();
			$('#texto').hide();
			$target.animate({
				scrollTop: $target.height()
			},1000);
		break;
	}
}