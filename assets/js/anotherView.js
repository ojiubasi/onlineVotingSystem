$(document).ready(function(){
$.get("http://localhost:3000/candidates", function(data){
    console.log(data);

    for(const info of data){
        td = $(`<td id='newcolumn'></td>`);
        var candidateData = "";
        var deleteBtn = $(`<a href = http://localhost:3000/candidates/${info.id} type = "button" id = "delete"> Delete </a>`)
            var updateBtn = $(`<a href = http://localhost:3000/candidates/${info.id} type = "button" id = "update"> Update </a>`)
                candidateData += "<tr>"
                candidateData +="<td>"+ info.candidateId+ "</td>"
                candidateData +="<td>"+ info.firstName+ " "+info.lastName+ "</td>"
                candidateData +="<td>"+ info.office+"</td>"
                candidateData +="<td>"+ info.politicalParty+"</td>"
                candidateData +="td" + `<a href=${JSON.stringify(info)} type = "button" id = "delete"> Delete </a>` +"</td>"               
                candidateData +="</tr>"
                
                $(deleteBtn).click(function(e){
                    var url = $(this).attr("href");
                    $.ajax({
                        method: "DELETE",
                        url: url,
                        success: function(){
                            alert("candidate deleted successfully")
                        },
                        failure: function(){
                            alert("something is wrong")
                        }
                    })
                })

                $(updateBtn).click(function(){
                    var url = $(this).attr("href");
                    $.ajax({
                        method: "PUT",
                        url:    url,
                        success: function(){
                            alert("update was a success")
                        },
                        failure: function(){
                            alert("update didn't go well")
                        }
                    })
                })
                $("#candidatesDataTable").append(candidateData)
            }
   })

})