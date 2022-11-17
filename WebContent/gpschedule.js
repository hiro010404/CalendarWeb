

var frends_list = document.getElementById("frends")

for(var i=0;i<100;i++){
  var gpButton = document.createElement("button");
  gpButton.className = "frend_button";
  //gpButton.setAttribute("id", "frend_button");
  //var gpContent = document.createTextNode("チェンバーファン同好会");
  var nameContent = "<span id='frend_name'>チェンバーファン同好会</span>"
  var imgContent = "<img src='favicon.png' width='70' height='70'>"
  gpButton.insertAdjacentHTML("afterbegin",nameContent);
  gpButton.insertAdjacentHTML("afterbegin",imgContent);
  //gpButton.appendChild(gpContent);
  frends_list.appendChild(gpButton);
  frends_list.appendChild(document.createElement("br"));
}


window.addEventListener("load", function() {


}, false);
