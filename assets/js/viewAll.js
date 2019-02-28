$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/candidates",
    })
        .done(function (data) {
            var candidateData = "";
            $.each(data, function (key, value) {
                
                candidateData += "<tr>"
                candidateData +="<td>"+ value.candidateId+ "</td>"
                candidateData +="<td>"+ value.firstName+ " "+value.lastName+ "</td>"
                candidateData +="<td>"+ value.office+"</td>"
                candidateData +="<td>"+ value.politicalParty+"</td>"
                candidateData +="<td>"+ '<button id="delete"> Delete </button><button id="update">Update</button>'+"</td>"                    
                candidateData +="</tr>"

                $("#delete").click(function(e){
                    e.preventDefault();
                    $.ajax({
                        method: "DELETE",
                        url: `http://localhost:3000/candidates/${value.id}`,
                        
                    }).done(function(){
                        alert("record deleted")
                        window.location.assign("")
                    }).fail(function(){
                        alert("failed")
                    })
                })

                $("#update").click(function(d){
                    d.preventDefault();
                    $.ajax({
                        method: "PUT",
                        url:    `http://localhost:3000/candidates/${value.id}`
                    }).done(function(){
                        window.location.assign("")
                    })
                })
            })
            $("#candidatesDataTable").append(candidateData)
        })
        .fail(function () {
            alert("server not responding")
        })
    })