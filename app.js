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
    document.querySelector('body').innerHTML = '你的瀏覽器不支援';
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
}

window.addEventListener("devicemotion", handleMotionEvent, true);