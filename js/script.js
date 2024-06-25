$(function() {

    let button = $('#get-data');
    let body = $('body');

    button.on('click', function(){
       /* $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){

                let pUserId = $('<p>'+ data.userId +'</p>');
                let pId = $('<p>'+ data.id +'</p>');
                let pTitle = $('<p>' + data.title + '</p>');
                let pBody = $('<p>' + data.body + '</p>');
                let hr = $('<hr>');

                body.append(pUserId, pId, pTitle, pBody, hr);
            })
            .fail(function(error){
                console.log(error);
            })*/

            $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data){

                let pUserId = $('<p>User ID: '+ data.userId +'</p>');
                let pId = $('<p>ID: '+ data.id +'</p>');
                let pTitle = $('<p>Title: ' + data.title + '</p>');
                let pBody = $('<p>Body: ' + data.body + '</p>');
                let hr = $('<hr>');

                body.append(pUserId, pId, pTitle, pBody, hr);
            })
            .fail(function(error){
                console.log(error);
            })

        
    })
});