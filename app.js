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
	x.innerHTML = accelerationX.toFixed(2);
	y.innerHTML = accelerationY.toFixed(2);
	z.innerHTML = accelerationZ.toFixed(2);
	
	var x2 = document.getElementById('x2'),
	y2 = document.getElementById('y2'),
	    z2 = document.getElementById('z2'),
	    accelerationX2 = event.acceleration.x,
	    accelerationY2 = event.acceleration.y,
	    accelerationZ2 = event.acceleration.z;
	x2.innerHTML = accelerationX2.toFixed(2);
	y2.innerHTML = accelerationY2.toFixed(2);
	z2.innerHTML = accelerationZ2.toFixed(2);
}

window.addEventListener("devicemotion", handleMotionEvent, true);