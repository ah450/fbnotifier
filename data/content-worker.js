this.document.body.innerHTML = '<script type="text/javascript"></script>'
setTimeout(function(){
    //do what you need here
(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
}, 2000);

setTimeout(function(){
     	console.log('hey')
  FB.init({
    appId      : '280615805470396',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
    
  });

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
    console.log('Logged in.');
  }
  else {
    console.log('not Logged in.');
  }
  });

}, 16000);