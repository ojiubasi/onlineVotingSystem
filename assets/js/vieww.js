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
                candidateData +="<td>"+ '<button id="update"> update </button><button id="delete">delete</button>'+"</td>"                    
                candidateData +="</tr>"
            })
            $("#candidatesDataTable").append(candidateData)
        })
        .fail(function () {
            alert("server not responding")
        })
    })