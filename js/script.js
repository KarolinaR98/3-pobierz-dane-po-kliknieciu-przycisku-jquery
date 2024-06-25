$(function() {

    let button = $('#get-data');
    let body = $('body');

    button.on('click', function(){
       /* $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){

                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pId = $('<p></p>').text(`ID: ${data.id}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr>');

                body.append(pUserId, pId, pTitle, pBody, hr);
            })
            .fail(function(error){
                console.log(error);
            })*/

            $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){

                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pId = $('<p></p>').text(`ID: ${data.id}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr>');

                body.append(pUserId, pId, pTitle, pBody, hr);
            })
            .fail(function(error){
                console.log(error);
            })

        
    })
});