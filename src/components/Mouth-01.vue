<template>
  <div class="mouth mouth-01">
<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In  -->
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="480.6px" height="240px" viewBox="0 0 480.6 240" style="enable-background:new 0 0 480.6 240;"
	 xml:space="preserve">

<defs>
</defs>
<g>
	<g>
		<path class="st0 mouth-path" d="M240.3,60C158.2,60,78.9,71.8,4,93.9C47.3,180.5,136.9,240,240.3,240s192.9-59.5,236.3-146.1
			C401.6,71.8,322.3,60,240.3,60z"/>
	</g>
</g>
<g class="">
	<defs>

		<clipPath id="SVGID_2_">
			<path id="SVGID_1_" class="mouth-path" d="M240.3,60C158.2,60,78.9,71.8,4,93.9C47.3,180.5,136.9,240,240.3,240s192.9-59.5,236.3-146.1
				C401.6,71.8,322.3,60,240.3,60z"/>
		</clipPath>
	</defs>

	<g class="tooth ">
		<g class="mouseMoveEl">
		<path class="st1" d="M0,56.8C74.3,86.6,155.4,103,240.3,103c84.9,0,166-16.4,240.3-46.3C408.3,20.4,326.7,0,240.3,0
			C153.9,0,72.3,20.4,0,56.8z"/>
		</g>
	</g>
</g>
</svg>

    </div>

</template>
<style scoped>
	.st0{fill:#730012;}
	.st1{fill:#FFFFFF;}
	.tooth {
		/* autoprefixer: off */
		clip-path:url(#SVGID_2_)
	}
	.mouth {
		position: absolute;
	}
	.mouth-path{
		transition: .6s all .2s cubic-bezier(0.250, 0.460, 0.450, 0.940);
		transform-origin: 50% 20%;
	}
	.is-moving .mouth-path {
		transition: .5s all 0s;
		transform: scale(1,0.5);
	}
</style>
