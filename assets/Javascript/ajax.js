// Initial Variables
var topics = ["Full Metal Alchemist", "Samurai Champloo", "Elfen Lied", "Black Lagoon", "My Hero Academia", "Samurai Jack", "Pokemon", "Eureka Seven", "Kill La Kill", "Guren Lagann", "Ghost in the Shell", "Trigun", "Inuyasha"];
var userTopics = $("#topicInput");


// Document Ready
$(document).ready(function () {
    // Loop for Creating Inital Topic Buttons
    for (i = 0; i < topics.length; i++) {
        // console.log(topics)
        $("#topicButtons").append(`<button id="${topics[i]}" class="topicButtons">${topics[i]}</button>`)
    }


    //Activates Submit Button
    $("#submitButton").click(userInput)

    // Submit Button Function
    function userInput (e) {
        e.preventDefault();

        // Keeps Users From Being Able to Add Multiple of the Same Topic
        if (topics.indexOf(userTopics.val()) === -1) {
            topics.push(userTopics.val())
            $("#topicButtons").append(`<button id="${userTopics.val()}" class="topicButtons">${userTopics.val()}</button>`)
            // console.log(topics)
        }

    }


    // Activates and Controls Topic Buttons
    $(document).on('click', '.topicButtons', function(event) {
        $("#topicGIFs").empty()

        // Set Var for Giphy API
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=AttVip230BugV7EkTVWyqtcdLXTohkOw&q=" + event.target.id + "&limit=10&offset=0&rating=PG&lang=en"

        // API Function
        $.ajax({
            url: queryURL,
            method: "GET",
          }).then(function(response) {
            console.log(response)

            // Loop for Displaying GIF Responses
            for (var i = 0; i < response.data.length; i++) {
                $("#topicGIFs").append(`<div class="gifDivs"><p>Rating: ${response.data[i].rating}</p><img src='${response.data[i].images.fixed_height_still.url}' data-still='${response.data[i].images.fixed_height_still.url}' data-animate='${response.data[i].images.fixed_height.url}' data-state='still' width='200px' height='200px' class='GIFs'></div>`)
            }


            // Function for Playing/Pausing Gifs
            $(".GIFs").on("click", function() {
                var state = $(this).attr("data-state");
    
                if (state === "still") {
                  var animateURL = $(this).attr("data-animate")
                  $(this).attr("src", animateURL);
                  $(this).attr("data-state", "animate");
                } 

                else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }
            })

        })

    })

});