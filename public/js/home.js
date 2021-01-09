$(document).ready(function(){
        
    $('#searchBtn').on("click", function(e){
        e.preventDefault()
        document.location.replace('/search');
    })
    $('#loginBtn').on("click", function(e){
        e.preventDefault()
        document.location.replace('/login');
    })

    $("#logo").on("click", function(e){
        e.preventDefault()
        document.location.replace('/')
    })

});
