// Seperate file to attach our handlers until the DOM is fully loaded

$(function () {

  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = {
      name: $("#burger").val().trim(),
      devoured: true
    };
    // Send PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
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