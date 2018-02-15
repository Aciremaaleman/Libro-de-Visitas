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
// Se mandan a llamar el elemento por medio del id para subir el texto
var $btn = $("#submit");
// Se agrega el comentario al lugar indicado
// var $postComment = $("#post");
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

function getText(e){
  e.preventDefault();
  var $text = $comment.val().trim();
  $commentShow.text($text);
};

function sizeLarge(){
  $("#print").attr('class','large');

};
function sizeMd(){
  $("#print").attr('class','medium');
};
function sizeSm(){
  $("#print").attr('class','small');
};
function colorTx(){
  $("#print").attr('class','colorText');
};
function colorF(){
  $("#print").attr('class','colorBack');
};
function textLeft() {
  $("#print").attr('class','left');
};
function textCenter() {
  $("#print").attr('class','center');
};
function textRight() {
  $("#print").attr('class','right');
};

function postComment(e){
  e.preventDefault();
  var $textComment = $commentShow.val().trim();
  $("#post").text($textComment);
};
