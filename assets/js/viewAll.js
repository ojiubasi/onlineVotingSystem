$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/candidates",
    })
        .done(function (data) {
            var candidateData = "";
            $.each(data, function (key, value) {
                var deleteBtn = $(`<a href = http://localhost:3000/candidates/${info.id} type = "button" id = "delete"> Delete </a>`)
                var updateBtn = $(`<a href = http://localhost:3000/candidates/${info.id} type = "button" id = "update"> Update </a>`)
                candidateData += "<tr>"
                candidateData +="<td>"+ value.candidateId+ "</td>"
                candidateData +="<td>"+ value.firstName+ " "+value.lastName+ "</td>"
                candidateData +="<td>"+ value.office+"</td>"
                candidateData +="<td>"+ value.politicalParty+"</td>"
                candidateData +="<td>" +deleteBtn+updateBtn+"</td>"                    
                candidateData +="</tr>"
                
                $(deleteBtn).click(function(e){
                    var url = $(this).attr("href");
                    $.ajax({
                        method: "DELETE",
                        url: url,
                        success: function(){
                            alert("candidate deleted successfully")
                        }
                    })
                })

                $(updateBtn).click(function(){
                    var url = $(this).attr("href");
                    $.ajax({
                        method: "PUT",
                        url:    url,
                        success:
                    })
                })
            })
            $("#candidatesDataTable").append(candidateData)
        })
        .fail(function () {
            alert("server not responding")
        })
    })