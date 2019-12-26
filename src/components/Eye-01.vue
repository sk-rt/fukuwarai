<template>

<div class="eye eye-01" >

<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="209.2px" height="118px" viewBox="0 0 209.2 118" style="enable-background:new 0 0 209.2 118;"
	 xml:space="preserve">

<defs>
</defs>
<g>
	<path class="st0" d="M0,74.7c28.3,23.6,64.6,37.8,104.4,37.8c40,0,76.5-14.4,104.9-38.3C192.9,32.4,152.3,2.7,104.7,2.7
		C56.9,2.7,16.2,32.6,0,74.7z"/>
</g>
<g>
	<defs>
		<clipPath id="eyePathClip">
			<path id="eyePath" d="M0,74.7c28.3,23.6,64.6,37.8,104.4,37.8c40,0,76.5-14.4,104.9-38.3C192.9,32.4,152.3,2.7,104.7,2.7
			C56.9,2.7,16.2,32.6,0,74.7z"/>
		</clipPath>
	</defs>

	<g class="st1">
		<g class="pupil-inner mouseMoveEye">
		<circle class="st2" cx="104.7" cy="59" r="59"/>
		<circle class="st3" cx="104.7" cy="59" r="28.4"/>
		<circle class="st4" cx="86.5" cy="37.8" r="13.2"/>
		</g>
	</g>
</g>
</svg>

</div>
</template>

<style scoped>
/*! autoprefixer: off */

.st0{fill:#FFFFFF;}
.st1{
	/* autoprefixer: off */
	clip-path:url(#eyePathClip);
}
.st2{fill:#8F311A;}
.st3{fill:#570000;}
.st4{opacity:0.3;fill:#FFFFFF;}
.st5{
	/* autoprefixer: off */
	clip-path:url(#SVGID_4_);
}
#eyePath, .st0 {
	transition: .2s all 0s;
}
.is-moving #eyePath,
.is-moving .st0 {
	transition: .1s all .2s;
	transform: scale(1,0.0);
	transform-origin: 50% 60%;
}

</style>
