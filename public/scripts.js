$('document').ready(function(){

var min = 100;
var max = 1000000;

function randomBalance(min, max){
  var test = $.ajax({
  url: '/balance?min=' + min + '&max=' + max
});
test.then(function(data){
  $('#balance').fadeOut(300, function(){
    $(this).empty().append('<p>' + data.text + data.balance + '</p>').fadeIn();
  });
});
};

randomBalance(min, max);

$('#randBal').click(function(){
  randomBalance(min, max);
})

$('form').on('submit', function(event){
  event.preventDefault();
  min = $('#min').val();
  max = $('#max').val();
  console.log(randomBalance(min, max));
  console.log(min, max);
})


});
