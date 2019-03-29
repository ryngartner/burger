// Seperate file to attach our handlers until the DOM is fully loaded

$(function () {

  $(".devour-button").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = {
      name: $("#burger").val().trim(),
      devoured: true
    };
    // Send POST request
    $.ajax("/burger/eat/" + id, {
      type: "POST",
      data: newDevour
    }).then(function () {
      console.log("Change devour to", newDevour);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: false
    };
    // Send POST request
    $.ajax("/burger/create", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });

})