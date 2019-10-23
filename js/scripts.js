$(document).ready(function() {
  $("form#your-name").submit(function(event) {
    var name = $("#name").val();
     $("#name-output").after("Are you sure your name is " + name + "?");
    event.preventDefault();
  });

  $("form#fav-animal").submit(function(event) {
    var animal = $("#animal").val();
     $("#animal-output").after("Are you sure your name is " + animal + "?");
    event.preventDefault();
  });
});
