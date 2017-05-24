// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };
//
// function success(pos) {
//   var crd = pos.coords;
//   console.log('Your current position is:');
//   console.log('Latitude : ' + crd.latitude);
//   console.log('Longitude: ' + crd.longitude);
//   console.log('More or less ' + crd.accuracy + ' meters.');
//   var a = document.getElementById('alpha')
//   	  a.innerHTML = crd.latitude;
// };
//
// function error(err) {
//   console.warn('ERROR(' + err.code + '): ' + err.message);
// };
//
// navigator.geolocation.getCurrentPosition(success, error, options);

(function(){
	window.trigger = false;
	window.magicZ  = [];
	window.myVar;
	window.second = 0;
	window.st = false;
})();
if(window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', function(event) {
		var a = document.getElementById('alpha'),
			b = document.getElementById('beta'),
          	g = document.getElementById('gamma'),
          	alpha = event.webkitCompassHeading,
          	beta = event.beta,
          	gamma = event.gamma;
			a.innerHTML = alpha.toFixed(4);
			b.innerHTML = beta.toFixed(2);
			g.innerHTML = gamma.toFixed(2);
		},false);
}else{
    document.querySelector('body').innerHTML = '不支援';
}

function handleMotionEvent(event) {
	var x = document.getElementById('x'),
	y = document.getElementById('y'),
    z = document.getElementById('z'),
    accelerationX = event.accelerationIncludingGravity.x,
    accelerationY = event.accelerationIncludingGravity.y,
    accelerationZ = event.accelerationIncludingGravity.z;
	x.innerHTML = accelerationX.toFixed(4);
	y.innerHTML = accelerationY.toFixed(4);
	z.innerHTML = accelerationZ.toFixed(4);

	var x2 = document.getElementById('x2'),
		y2 = document.getElementById('y2'),
	    z2 = document.getElementById('z2'),
	    accelerationX2 = event.acceleration.x,
	    accelerationY2 = event.acceleration.y,
	    accelerationZ2 = event.acceleration.z;
	x2.innerHTML = accelerationX2.toFixed(4);
	y2.innerHTML = accelerationY2.toFixed(4);
	z2.innerHTML = accelerationZ2.toFixed(4);

	if(window.trigger){
		if(window.second%2==0 && !window.st){
			window.st = true;
			window.magicZ[window.second/2] = [accelerationX2.toFixed(4),accelerationY2.toFixed(4),accelerationZ2.toFixed(4),event.interval];
			window.st = false;
		}
	}

}

window.addEventListener("devicemotion", handleMotionEvent, true);



function start(){
	if(window.trigger==false){
		window.trigger = true;
		window.myVar = setInterval(myTimer ,16.6666);
	}
}
function stop(){
	if(window.trigger==true){
		$('#hahaha').html(JSON.stringify(window.magicZ));
		clearInterval(window.myVar);
		window.second = 0;
		window.magicZ = [];
		window.trigger= false;
	}
}

function myTimer(){
	window.second++;
	$('#time').html(window.second);
}
window.addEventListener("devicemotion", handleMotionEvent, true);
