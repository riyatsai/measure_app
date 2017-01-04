if(window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', function(event) {
		var a = document.getElementById('alpha'),
			b = document.getElementById('beta'),
          	g = document.getElementById('gamma'),
          	alpha = event.webkitCompassHeading,
          	beta = event.beta,
          	gamma = event.gamma;
			a.innerHTML = alphat.toFixed(4);
			b.innerHTML = beta.toFixed(4);
			g.innerHTML = gamma.toFixed(4);
		},false);
}else{
    document.querySelector('body').innerHTML = '不支援';
}