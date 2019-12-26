<template>

<div class="eye eye-03" >

<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="248px" height="167.2px" viewBox="0 0 248 167.2" style="enable-background:new 0 0 248 167.2;"
	 xml:space="preserve">

<defs>
</defs>
<g>
	<path class="st0" d="M124,0C55.5,0,0,49.7,0,111c0,1.7,0,3.3,0.1,5c29,31.2,72.8,51.1,121.8,51.1c51.5,0,97.2-22,126.1-56.1
			c0,0,0,0,0-0.1C248,49.7,192.5,0,124,0z"/>
</g>
<g>
	<path class="st1" d="M16.7,109.7c25.1,30.2,62.9,49.4,105.1,49.4c44.3,0,83.7-21.1,108.6-53.8c-3.7-55.8-50.1-99.9-106.8-99.9
			C65.6,5.5,18.2,51.9,16.7,109.7z"/>
</g>
<g>
<defs>
	<clipPath id="eye03_2">
		<path id="eye03_1" d="M16.7,109.7c25.1,30.2,62.9,49.4,105.1,49.4c44.3,0,83.7-21.1,108.6-53.8c-3.7-55.8-50.1-99.9-106.8-99.9
			C65.6,5.5,18.2,51.9,16.7,109.7z"/>
	</clipPath>
</defs>

<g class="pupil">
	<g class="pupil-inner mouseMoveEye">
		<circle class="st2" cx="123.3" cy="88.2" r="52.5"/>

		</g>
		<circle class="st3" cx="94.3" cy="51.8" r="15.4"/>
	</g>
</g>
</svg>


</div>
</template>

<style scoped>
/*! autoprefixer: off */

.st0{fill:#202020;}
.st1{fill:#FFFF00;}
.st2{clip-path:url(#eye03_2);}
.st3{clip-path:url(#eye03_2);fill:#FFFFFF;}
.st4{}
.pupil {
	clip-path:url(#eye03_2)
}

.pupil .st2 {
	transition: .4s all .6s;
	transform-origin: 50% 50%;
}
.is-moving .pupil .st2 {
	transition: .5s all 0s;
	transform: scale(0.5,1.1);
	transform-origin: 50% 50%;
}
</style>
