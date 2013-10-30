/***
 * Configura a div modal para que ela possua o titulo e a mensagem desejada no momento de execução
 * @param titulo string para o topo da div
 * @param mensagem string que estará dentro da div
 * @param duration int milisseconds to display modal div in document.
 * return void
 */
function AlertDialog(titulo,mensagem,duration,retornar,url){
  if(duration == 0 || duration == null){
    duration = 1200;
  }
  $("body").css('overflow','hidden');
  //Adicionando-a titulo
  $("div.title span#line").text(titulo);
  //E a mensagem respectiva ( pode variar )
  $("div.loader span").text(mensagem);
  //Se não foi prepara a div modal para ser exibida.
  $("div.modal").addClass('js-modal').fadeIn('slow')
  .delay(duration)
  .fadeOut('slow', function() {
     // Após ela ser exibida seu titulo e texto são removidos
     $("div.title span#line").text('');
     $("div.loader span").text('');
     if(retornar == true){
      if(url == null){
        window.location = 'index.html';
      }
      else{
        window.location = url;
      }
     }
  });
}

function ClearModal(){
	$("div.title span#line").text('');
	$("div.loader span").text('');
}

title = new Array(
    "Informação",
    "Alerta",
    "Erro",
    "Confirmação",
    "Sair"
  );

mensagem = new Array(
  'Senha não informada.',
  'Login não informado.',
  'Telefone para adição, não informado.',
  'Você não está autorizado.'
  )

function VerifyAutenticated(outofLinks){
   var cookie_autenticated = "autenticated";
   if(outofLinks == true){
    $("a").click(function(event) {
      if($.cookie(cookie_autenticated) == undefined){
        event.preventDefault();
        AlertDialog(title[2],mensagem[3],null,true);
      }
    });
  }
  else{
    if($.cookie(cookie_autenticated) == undefined){
        AlertDialog(title[2],mensagem[3],null,true);
      }
  }
}
