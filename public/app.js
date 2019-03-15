// scrapes and displays all the articles
$('#scrape_new').on('click', function(){
    console.log('new articles');
    var result = result;
    $.ajax({
        method: 'GET',
        url:'/scrape',
        data: {
            result: result
        }
    }).then(function(data){
        console.log(data);
        window.location.reload('/');
    })
})

// clears all the articles
$('#clear').on('click', function(){

});

// 