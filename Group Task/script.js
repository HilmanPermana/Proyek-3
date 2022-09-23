const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick =()=>{
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.focus();
  if(searchInput.value != ""){
    var values = searchInput.value;
    searchData.classList.remove("active");
    searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
  }else{
    searchData.textContent = "";
  }
}
cancelBtn.onclick =()=>{
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.toggle("active");
  searchInput.value = "";
}

$((document).ready(function() {
    $(".")
    $.ajax({
        url: "https://newsapi.org/v2/everything?q=covid19&apiKey=8f808460a6ac4712a84eb7deae391fae",
        type: "get",
        dataType: "json",
        success: m=> {
            m.articles.forEach(function(c) {
                var covid_text = "Covid News: " + c.description;
                $("body").append("<div style='margin-bottom: 10px;'>" + covid_text + "</div></div>")
            })
        }
    });
});


// $(document).ready(function () {
//   $(".search-icon").click(function (e) {
//       var validate = Validate();
//       $("#message").html(validate);
//       if (validate.length == 0) {
//           $.ajax({
//               url: "http://imdb.wemakesites.net/api/search?q=" + $("#searchInput").val(),
//               data: { "api_key": "9c4d2620-32a1-4f4a-abd0-c88b008f383e" },
//               crossDomain: true,
//               dataType: "jsonp",
//               success: function (result, status, xhr) {
//                   var resultHtml = $("<div class=\"resultDiv\"><p>Names</p>");
//                   for (i = 0; i < result["data"]["results"]["names"].length; i++) {
//                       resultHtml.append("<div class=\"result\" resourceId=\"" + result["data"]["results"]["names"][i]["id"] + "\">" + "<img src=\"" + result["data"]["results"]["names"][i]["thumbnail"] + "\" />" + "<p><a>" + result["data"]["results"]["names"][i]["title"] + "</a></p></div>")
//                   }

//                   resultHtml.append("<p>Titles</p>");
//                   for (i = 0; i < result["data"]["results"]["titles"].length; i++) {
//                       resultHtml.append("<div class=\"result\" resourceId=\"" + result["data"]["results"]["titles"][i]["id"] + "\">" + "<img src=\"" + result["data"]["results"]["titles"][i]["thumbnail"] + "\" />" + "<p><a>" + result["data"]["results"]["titles"][i]["title"] + "</a></p></div>")
//                   }

//                   resultHtml.append("</div>");

//                   $("#message").html(resultHtml);
//               },
//               error: function (xhr, status, error) {
//                   $("#message").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
//               }
//           });
//       }
//   });

//   function Validate() {
//       var errorMessage = "";
//       if ($("#searchInput").val() == "") {
//           errorMessage += "► Enter Search Text";
//       }
//       return errorMessage;
//   }

//   $(document).ajaxStart(function () {
//       $(".textAlignCenter img").show();
//   });

//   $(document).ajaxStop(function () {
//       $(".textAlignCenter img").hide();
//   });

// });


