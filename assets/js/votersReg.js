$(document).ready(function () {

        
    $("#submitregbtn").on("click", function(e) {
        e.preventDefault()
        var $firstName = $("#firstname")
        var $lastName = $("#lastname")
        var $otherName = $("#othername")
        var $phone = $("#phonenum")
        var $email = $("#email")
        var $state = $("#state")
        const $vin = Math.floor(Math.random() * (1000 - 100 + 1)) + 100
        var votersData = {
            VIN: $vin,
            firstName: $firstName.val(),
            lastName: $lastName.val(),
            otherName: $otherName.val(),
            phone:      $phone.val(),
            email:      $email.val(),
            state:      $state.val() 
        }
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/voters",
            data: votersData
        })
            .done(function (data) {
                alert("voter registered successfully!")
                window.location.assign("");
            }).fail(function () {
                alert("couldn't reach server")
            })
    })

})