$(document).ready(function(){
          //Invoke Pincode Search API
		  $("#btnSearch").click(function(){
		    pincode = $("#searchCriteria").val();
		    var xhr = new XMLHttpRequest({mozSystem: true});
			xhr.open("GET", "http://pin-codes.in/api/pincode/" + pincode, true);
			xhr.onreadystatechange = function() {
			  if (xhr.readyState == 4) {
				obj = JSON.parse(xhr.responseText);
				result = "<li>Post Office: " + obj.PostOffice + "</li>";
				result += "<li>District: " + obj.District + "</li>";
				result += "<li>State: " + obj.State + "</li>";
				console.log(result);
				$("#searchResults").html(result);
				$('#searchResults').listview('refresh');
			  }
			}
			xhr.send();
		  
		  });
		  });