function bodyScale(){
	var devicewidth=document.documentElement.clientWidth;
	var deviceheight=document.documentElement.clientHeight;

	var scale=devicewidth/1440;

	document.body.style.zoom=scale;
}
window.onload=window.onresize=function(){
	bodyScale();
};