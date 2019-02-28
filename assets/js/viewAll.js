$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/candidates",
    })
        .done(function (data) {
            var candidateData = "";
            $.each(data, function (key, value) {
                
                candidateData += `<tr>`
                candidateData +=`<td>`+ value.candidateId+ `</td>`
                candidateData +=`<td>`+ value.firstName+ " "+value.lastName+ `</td>`
                candidateData +=`<td>`+ value.office+`</td>`
                candidateData +=`<td>`+ value.politicalParty+`</td>`
                candidateData +=`<td>`+ `<a href=${JSON.stringify(value)} type = "button" id = "delete"> Delete </a>`+
                                        `<a href=${JSON.stringify(value)} type = "button" id = "viewSingle"> View </a>`+`</td>`                    
                candidateData +=`</tr>`

            })
            $("#candidatesDataTable").append(candidateData)
            //code to delete a candidate's record from server starts here
            $(document).on("click", "#delete", function(e){
                e.preventDefault();
                var url = $(this).attr("href");
                $.ajax({
                    method: "DELETE",
                    url: url
                }).done(function(){
                    alert("record deleted")
                    window.location.assign("")
                }).fail(function(){
                    alert("failed")
                })
            })
            //code to view a specific candidate's profile starts here
            $(document).on("click", "#viewSingle", function(e){
                e.preventDefault();
                var url = $(this).attr("href");
                localStorage.setItem("viewSingle", url);
                window.location.replace("file:///C:/onlineVoting/candidateProfile.html");
            })
        })
        .fail(function () {
            alert("server not responding")
        })
    })