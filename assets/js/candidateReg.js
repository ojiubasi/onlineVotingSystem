$(document).ready(function () {     
    $("#candidateReg").on("click", function(e) {
        e.preventDefault()
        var firstName = $("#firstname")
        var lastName = $("#lastname")
        var office = $("#office")  
        var email = $("#email")
        var politicalParty = $("#party")
        var description = $("#describe")
        const CID = Math.floor(Math.random() * (1000 - 100 + 1)) + 100
        var candidatesData = {
            candidateId: CID,
            firstName: firstName.val(),
            lastName: lastName.val(),
            office: office.val(),
            email:      email.val(),
            politicalParty:  politicalParty.val(),
            description:  description.val() 
        }
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/candidates",
            data: candidatesData
        })
            .done(function (data) {
                alert("candidate registered successfully!")
                window.location.assign("");
            }).fail(function () {
                alert("couldn't reach server")
            })
    })

})