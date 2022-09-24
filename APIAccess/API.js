// $(function() {
//     $.ajax({
//     url: "http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=55.9895989531941,-3.796229726988194",
//    method: "GET",
//     dataType: "json",
//     success: function(data) {
//         var str = "";          
//        for(var i= 0; i < data.jobsBreakdown.length; i++){

//             str +='Job Title : '+data.jobsBreakdown[i].description+' and Related Trades <br> Percentage of Occupancies in Area : '+data.jobsBreakdown[i].percentage.toPrecision(2)+'% <br><br>';
//        }
//       $("body").html(str);
//     }
//     });
// });