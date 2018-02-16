//Se mandan a llamar los elementos por medio del id para el textarea
var $comment = $("#comment");
// Se mandan a llamar el elemento por medio del id para el lugar donde se mostrara el texto que viene del textarea
var $commentShow = $("#print");
//Se mandan a llamar los elementos por medio del id para los botones que daran estilo
var $lg = $("#large");
var $md = $("#medium");
var $sm = $("#small");
var $cTxt = $("#colorText");
var $cF = $("#colorFondo");
var $lft = $("#izquierda");
var $ctr = $("#centrar");
var $rgt = $("#derecha");
// Se mandan a llamar el elemento por medio del id para Agregar evento.
var $btn = $("#submit");
// Se agrega el comentario al lugar indicado del html.
var $pstCom = $("#post");
// Se crea objeto de arrays vacio para guardar los datos.
var $data = [{
  content:'hola',
  style : {
    color: 'red',
    background: 'black',
    fontsize: '60px',
    textalign: 'left'
  },
  content:'adios',
  style : {
    color: 'white',
    background: 'red',
    fontsize: '30px',
    textalign: 'center'
  },
}];
console.log($data)
// Se inicializa jquery
$(document).ready(function() {
  // se agrega el evento al textarea para comenzar la funcion de obtener el valor.
  $comment.keyup(getText);
  // Se agrega el evento click que dara el estilo en especifico.
  $lg.click(sizeLarge);
  $md.click(sizeMd);
  $sm.click(sizeSm);
  $cTxt.click(colorTx);
  $cF.click(colorF);
  $lft.click(textLeft);
  $ctr.click(textCenter);
  $rgt.click(textRight);
  // Boton para postear comentario final
  $btn.click(postComment);
});

function getText(){
  var $text = $comment.val().trim();
  $commentShow.text($text);
};

// Agrega clases con estilo en css para darle formato al párrafo.
function sizeLarge(){
  $("#print").css('fontSize','60px');
};
function sizeMd(){
  $("#print").css('fontSize','40px');
};
function sizeSm(){
  $("#print").css('fontSize','10px');
};
// Indica por un prompt el color de texto que indicas.
function colorTx(){
  var $changeColor = prompt('¿Qué color quieres?');
  $("#print").css("color") = $changeColor;
  console.log(changeColor);
};
// Indica por un prompt el color de fondo que indicas.
function colorF(){
  var $changeBack = prompt('¿Qué color quieres?');
  $("#print").css("backgroundColor") = $changeBack;
};
function textLeft() {
  $("#print").css('textAlign','left');
};
function textCenter() {
  $("#print").css('textAlign','center');
};
function textRight() {
  $("#print").css('textAlign','right');
};

// .clone sirve para clonar un elemento.
function postComment(){
  $comment.val(" ");
  var $newComment = $("#print").clone().prependTo($pstCom).removeAttr('id');
  $commentShow.empty().removeAttr('class').css("background-color", "").css("color","");
  // keptData($newComment);
};

// Se guarda el comentario en un array.
// function keptData($newComment){
//   var array = $dta.push($newComment);
//   console.log(array);
// };

// content
// var x = { content:null,style:{} };
// x.content=newX;
// newX.style.color=text.style.color
//
// object.assign(parametro1,parametro2)
