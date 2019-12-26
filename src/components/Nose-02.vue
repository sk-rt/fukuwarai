<template>
  <div class="nose nose-02">
	<svg version="1.1"
		xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
		x="0px" y="0px" width="150px" height="35.6px" viewBox="0 0 150 35.6" style="enable-background:new 0 0 150 35.6;"
		xml:space="preserve" class="">
	<g class="mouseMoveEl">
	<path class="st0 nose-path " d="M75,17C48.1,17,22.7,10.9,0,0c17.8,21.7,44.8,35.6,75,35.6c30.2,0,57.2-13.9,75-35.6C127.3,10.9,101.9,17,75,17
		z"/>
		</g>
	</svg>


	</div>

</template>
<style scoped>
	.st0{fill:#663512;}
	.nose {
		position: absolute;
	}
	.nose-path{
		transition: .6s all .2s cubic-bezier(0.250, 0.460, 0.450, 0.940);
		transform-origin: 50% 20%;
	}
	.is-moving .nose-path {
		transition: .5s all 0s;
		transform: translateY(-5px);
	}
</style>
