$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevour
        }).then(function() {
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var burgerName = {
            name: $("#ca").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerName
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        ); 
    });
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})