<template>

<div class="eye eye-02" >
<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In  -->
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="201.1px" height="171.7px" viewBox="0 0 201.1 171.7" style="enable-background:new 0 0 201.1 171.7;"
	 xml:space="preserve">

<defs>
</defs>
<g class="st0 eye-mabuta">
	<path class="st1" d="M102.5,14.9c21.4,0.3,41.7,5.4,59.7,14.4C148.2,11.7,126.8,0.3,102.7,0C78.6-0.3,56.9,10.4,42.5,27.6
		C60.7,19.1,81.1,14.6,102.5,14.9z"/>
</g>
<g>
	<g class="eye-bg">
		<path class="st2" d="M0,133.3c26.1,23.9,60.8,38.5,98.9,38.5c39.7,0,75.8-15.8,102.1-41.5c-4.4-51.6-47.7-92-100.4-92
			C46.9,38.1,3,80.2,0,133.3z"/>
	</g>
</g>
<g>
	<defs>
		<clipPath id="eye02_2">
			<path id="eye02_1" d="M0,133.3c26.1,23.9,60.8,38.5,98.9,38.5c39.7,0,75.8-15.8,102.1-41.5c-4.4-51.6-47.7-92-100.4-92
				C46.9,38.1,3,80.2,0,133.3z"/>
		</clipPath>
	</defs>

	<g class="st3">
		<g class="pupil">
		<g class="pupil-inner mouseMoveEye">
		<circle class="st4" cx="102.4" cy="105.8" r="62.9"/>
		<circle class="st5" cx="102.4" cy="105.8" r="36.3"/>
		<circle class="st6" cx="75.9" cy="84.1" r="14.4"/>
		</g>
		</g>
	</g>
</g>
</svg>


</div>
</template>

<style scoped>
/*! a */

.st0{opacity:0.3;}
.st1{fill:#AA6C51;}
.st2{fill:#FFFFFF;}
.st3{
	/* autoprefixer: off */
	clip-path:url(#eye02_2);
	}
.st4{fill:#457C66;}
.st5{fill:#11573C;}
.st6{fill:#739C8C;}

#eye02_1, .eye-bg, .eye-mabuta,.pupil {
	transition: .4s all .6s;

}
.is-moving .eye-mabuta {
	transform: translate(0,-20px);
	transition: .5s all 0s;
	transform-origin: 50% 60%;
}
.is-moving #eye02_1,
.is-moving .eye-bg {
	transition: .5s all 0s;
	transform: scale(1,1.2);
	transform-origin: 50% 60%;
}
.is-moving .pupil  {
	transition: .5s all 0s;
	transform: scale(1.1,1.1);
	transform-origin: 50% 60%;
}
</style>
