// Initial Variables
var topics = ["topic1", "topic2", "topic3", "topic4", "topic5"];
var userTopics = $("#topicInput")

// Document Ready
$(document).ready(function () {
    // for loop for creating initial topic buttons
    for (i = 0; i < topics.length; i++) {
        $("#topicButtons").append("<button class='topicButtons'>" + topics[i] + "</button>")
    }


    //activates submit button
    $("#submitButton").click(userInput)

    // controls submit button
    function userInput (e) {
        e.preventDefault();

        // keeps users from being able to add multiple of the same topic
        if (topics.indexOf(userTopics.val()) === -1) {
            topics.push(userTopics.val())
            $("#topicButtons").append("<button class='topicButtons'>" + userTopics.val() + "</button>")
            console.log(topics)
        }

    }

});