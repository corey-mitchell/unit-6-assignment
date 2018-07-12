// Initial Variables
var topics = ["batman", "superman", "spiderman", "john wayne"];
var userTopics = $("#topicInput")


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
        console.log(event.target.id)

        // Places User Click Into Giphy API
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=AttVip230BugV7EkTVWyqtcdLXTohkOw&q=" + event.target.id + "&limit=10&offset=0&rating=PG&lang=en"

        // API Function
        $.get(queryURL).then(function(response) {
            console.log(response)

        })

    })


});