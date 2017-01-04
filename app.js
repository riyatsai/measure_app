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