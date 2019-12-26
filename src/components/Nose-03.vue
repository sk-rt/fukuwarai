<template>
  <div class="nose nose-03">
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="149.8px" height="71px" viewBox="0 0 149.8 71" style="enable-background:new 0 0 149.8 71;"
	 xml:space="preserve">

	<g class="st0 mouseMoveEl">
		<g class="nose-path">
			<path class="st1" d="M74.9,19C47.8,19,22.3,12.1,0,0c2.1,39.6,34.8,71,74.9,71c40.1,0,72.8-31.4,74.9-71
				C127.5,12.1,102,19,74.9,19z"/>
		</g>
	</g>
</svg>

</div>

</template>
<style scoped>
	.st0{opacity:0.4;}
	.st1{fill:#A46751;}
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
