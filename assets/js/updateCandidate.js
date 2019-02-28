$(document).ready(function () {

        
    $("#udateBtn").on("click", function(e) {
        e.preventDefault()
        var firstname = $("#firstname");
        var lastname = $("#lastname");
        var updates = {
            firstName: firstname.val(),
            lastName:  lastname.val()
        }
        $.ajax({
            method: "PUT",
            url: `http://localhost:3000/candidates?id=1`,
            data: updates
        }).done(function(){
            alert("update successful!");
        }).fail(function(){
            alert("coundn't update server")
        })
    })

})