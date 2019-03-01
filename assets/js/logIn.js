$(document).ready(function () {
    $("#loginform").submit( function(ev){
        ev.preventDefault()
        var vin = $("#vin").val();
        var password = $("#phone").val();

        $.ajax
        ({
            method: "POST",
            url:    `http://localhost:3000/voters?VIN=${vin}&phone=${password}`,
              
        }).done(function(){
            window.location.assign("file:///C:/onlineVoting/user-dashboard.html");
        }).fail(function(){
            alert("you entered an invalid vin and/or password");
        })
    
  });
         
})