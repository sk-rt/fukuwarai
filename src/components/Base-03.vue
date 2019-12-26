<template>
  <div class="base base-03">
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="1286.2px" height="1063.8px" viewBox="0 0 1286.2 1063.8"
	 style="enable-background:new 0 0 1286.2 1063.8;" xml:space="preserve">

<defs>
</defs>
<g class="mimi-01">
	<path d="M1158.1,25.1C1026-27.3,869.6,4.6,769.3,105.4c-100,100.5-133.5,256.5-80.2,388.8c132.2,53.3,288.3,19.8,388.8-80.2
		C1178.6,313.6,1210.6,157.3,1158.1,25.1z"/>
	<g>
		<path class="st0" d="M802.6,459.7c-32.3,0-64-4.9-94.4-14.6c-35.1-110.3-6.2-231.6,76.5-314.3c58.7-58.7,136.8-91.1,219.9-91.1
			c32.3,0,64,4.9,94.4,14.6c35.1,110.3,6.2,231.6-76.5,314.3C963.8,427.3,885.7,459.7,802.6,459.7
			C802.6,459.7,802.6,459.7,802.6,459.7z"/>
	</g>
</g>
<g class="mimi-02">
	<path d="M121.3,25.1c-53.3,132.2-19.8,288.3,80.2,388.8c100.3,100.8,256.7,132.7,388.8,80.2c52.5-132.1,20.5-288.5-80.2-388.8
		C409.6,5.4,253.6-28.1,121.3,25.1z"/>
	<g>
		<path class="st0" d="M476.8,459.7c-83.1,0-161.2-32.3-219.9-91.1c-82.7-82.7-111.6-204-76.5-314.3c30.5-9.7,62.1-14.6,94.4-14.6
			c83.1,0,161.2,32.3,219.9,91.1c82.7,82.7,111.6,204,76.5,314.3C540.8,454.8,509.1,459.7,476.8,459.7
			C476.8,459.7,476.8,459.7,476.8,459.7z"/>
	</g>
</g>
<g>
	<circle cx="639.6" cy="544.8" r="519"/>
</g>
<g>
	<g class="hige-01">
		<g>
			<path class="st1" d="M191.1,645.8c68.8,0,133.7,16.4,191.1,45.5c-53.5-39.3-119.6-62.5-191.1-62.5S53.5,652,0,691.2
				C57.4,662.2,122.3,645.8,191.1,645.8z"/>
		</g>
		<g>
			<path class="st1" d="M195.9,714.1c63.7-12.6,126.8-9.2,185.3,7.2c-56.8-26.6-122.2-36-188.4-22.9
				c-66.2,13.1-123.1,46.6-165.6,92.8C75.1,753.7,132.2,726.6,195.9,714.1z"/>
		</g>
		<g>
			<path class="st1" d="M205,774.7c57.5-21.3,116.8-27.6,173.8-21.1c-56.9-16.3-119.3-15.2-179,6.9C140,782.6,92,822.4,59.4,871.8
				C98.3,829.7,147.5,796,205,774.7z"/>
		</g>
	</g>
	<g class="hige-02">
		<g>
			<path class="st1" d="M1095.1,613.8c-68.8,0-133.7,16.4-191.1,45.5c53.5-39.3,119.6-62.5,191.1-62.5s137.5,23.2,191.1,62.5
				C1228.8,630.2,1163.8,613.8,1095.1,613.8z"/>
		</g>
		<g>
			<path class="st1" d="M1090.3,682.1c-63.7-12.6-126.8-9.2-185.3,7.2c56.8-26.6,122.2-36,188.4-22.9
				c66.2,13.1,123.1,46.6,165.6,92.8C1211.1,721.7,1153.9,694.6,1090.3,682.1z"/>
		</g>
		<g>
			<path class="st1" d="M1081.2,742.7c-57.5-21.3-116.8-27.6-173.8-21.1c56.9-16.3,119.3-15.2,179,6.9
				c59.7,22.1,107.8,61.9,140.4,111.3C1187.8,797.7,1138.6,764,1081.2,742.7z"/>
		</g>
	</g>
</g>
</svg>


</div>
</template>
<script>
export default {
	created: function(){
		this.$store.commit('changeBg','bg-base-03')
	}
}
</script>
<style scoped>
/*! autoprefixer: off */
	.st0{fill:#3D250A;}
	.st1{fill:#222222;}
	.base {
		position: absolute;
		top:50%;
		left:50%;
		transform: translate3d(-50%,-50%,0);
	}
	.mimi-01 {
		transform-box: fill-box;
		transition: .6s all .6s;
		transform-origin: 70% 20% 0;
		transform: translate3d(0,0,0);
	}
	.mimi-02 {
		transform-box: fill-box;
		transition: .6s all .6s;
		transform-origin: 30% 20% 0;
		transform: translate3d(0,0,0);
	}
	.is-moving .mimi-01 {
		transition: .8s all 0s;
		transform: rotate(-17deg) translateY(-70px);
	}
	.is-moving .mimi-02 {
		transition: .8s all 0s;
		transform: rotate(17deg) translateY(-70px);
	}

	.hige-01 {
		transition: .6s all .6s;
		transform-origin: 25% 50%;
	}
	.hige-02 {
		transition: .6s all .6s;
		transform-origin: 75% 50%;
	}
	.is-moving .hige-01 {
		transition: .8s all 0s;
		transform: skewY(30deg) translateY(0px);
	}
	.is-moving .hige-02 {
		transition: .8s all 0s;
		transform: skewY(-30deg) translateY(0px);
	}

</style>
