(function(){
    var request = new XMLHttpRequest();
    
    var names = [];
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            names = JSON.parse(request.responseText);
            console.log(names);
        }
    }

    request.open("GET","http://localhost:58696/home/getter", true);
    request.send();

})();