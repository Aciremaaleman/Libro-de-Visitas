var $textOne = $("#textarea_one");
var $textTwo = $("#text_two");
var $submitText = $("#submit");

$(document).ready(function() {
  $textOne.keyup(enter);
  $textTwo.keyup(paint);
  $submitText.click(paint);

});

function enter(){
  var $text = $textOne.val().trim();
  console.log($text);
  paint($text);
};

function paint($text){
  var $container = $('<div class="row"> </div>');
  var $div = $('<div></div>');
  var $p = $("<p 'id=text_two'></p>");

  $p.text($text);
  $container.append($div);
  $container.append($p);
  $("#text_two").prepend($container);


};
