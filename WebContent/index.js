var xmlHttpRequest;

function sendWithGetMethodLogin() {
	var userElement = document.getElementById("user");
	var pwElement = document.getElementById("password");

	var url = "doGet?user=" + userElement.value +"&pw=" + pwElement.value;

	xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.onreadystatechange = receive;
	xmlHttpRequest.open("GET", url, true);
	xmlHttpRequest.send(null);
	if(userElement.value==""||pwElement.value==""){
		var cauntionElement = document.getElementById("cauntion");
		if(cauntionElement.childElementCount==0){
			var newElement = document.createElement("span");
			var newContent = document.createTextNode("ユーザーデータが存在しないか、パスワードが違います。");
			newElement.appendChild(newContent);
			cauntionElement.appendChild(newElement);
		}
	}else{
		window.location.href =　"mypage.html";
	}
}

function sendWithGetMethodSignup(){
	window.location.href =　"register.html";
}

function receive() {
	if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
		var response = JSON.parse(xmlHttpRequest.responseText);

		var outputElement = document.getElementById("output");
		outputElement.innerHTML = response.output;
	}
}

window.addEventListener("load", function() {
	var signupButtonElement = document.getElementById("signup_button");
	signupButtonElement.addEventListener("click",sendWithGetMethodSignup,false);
	var loginButtonElement = document.getElementById("login_button");
	loginButtonElement.addEventListener("click",sendWithGetMethodLogin,false);
}, false);
