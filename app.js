if(window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', function(event) {
		var a = document.getElementById('alpha'),
			b = document.getElementById('beta'),
          	g = document.getElementById('gamma'),
          	alpha = event.alpha,
          	beta = event.beta,
          	gamma = event.gamma;
			a.innerHTML = alpha;
			b.innerHTML = beta;
			g.innerHTML = gamma;
		},false);
}else{
    document.querySelector('body').innerHTML = '你的瀏覽器不支援';
}