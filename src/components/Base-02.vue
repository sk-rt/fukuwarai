<template>
  <div class="base base-02">

<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In  -->
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="1250.6px" height="1119px" viewBox="0 0 1250.6 1119" style="enable-background:new 0 0 1250.6 1119;"
	 xml:space="preserve">

<defs>
</defs>
<g class="hair-back">
	<g>
		<path class="st0" d="M610.8,37C316.2,37,77.4,286.6,77.4,594.5c0,9.1,0.2,18.2,0.6,27.2c-0.2,0-0.4,0.1-0.6,0.1
			C77.3,756.1,49.7,883.9,0,1000c106.7,40.7,222.4,63,343.4,63c332.7,0,626-168.5,799.2-424.8c1.1-14.4,1.6-29,1.6-43.7
			C1144.2,252.7,905.4,37,610.8,37z"/>
	</g>
</g>
<g class="hair-back">
	<g>
		<path class="st0" d="M1288.1,785.5c-23.7-80-37.4-164.3-39.4-251.5c-12.1-15.8-25.1-30.8-38.8-45.1
			C1173,226,956.3,24.1,694.5,24.1c-287.7,0-520.9,210.6-520.9,544.4c0,125,40.3,240.2,108.1,332.1c3,44.2,11.4,86.9,24.5,127.6
			c92.8,29.7,191.6,45.7,294.2,45.7C869.7,1074,1113.2,963.6,1288.1,785.5z"/>
	</g>
</g>
<g>
	<circle class="st1" cx="656.4" cy="587" r="532"/>
</g>
<g>
	<g class="hair-main">
		<path class="st2" d="M1250.6,556.4C1234.7,246.4,978.3,0,664.4,0c-324.2,0-587,262.8-587,587c0,12.4,0.4,24.7,1.1,36.9
			C276.4,581.3,433.9,430.4,486,236.2C611.7,439,836.3,574,1092.4,574C1146.8,574,1199.7,567.9,1250.6,556.4z"/>
	</g>
</g>
<g>
	<g class="hair-point-1">
		<path class="st3" d="M645.6,292.9c57,35.5,117.6,58.4,177.7,69.3c-61.5,14.7-133.9,3.3-198.1-36.7c-64.2-40-106.3-100-120.1-161.7
			C541.3,213,588.6,257.4,645.6,292.9z"/>
	</g>
	<g class="hair-point-2">
		<path class="st4" d="M1040.8,269.9c55.2,76.3,94.6,157.8,118.4,238.8c9.1-83.4-17.2-181.2-79.3-267.1
			c-62.1-85.9-146.7-141.5-228.8-158.9C920.6,130.7,985.6,193.7,1040.8,269.9z"/>
	</g>
</g>
</svg>

</div>
</template>
<script>
export default {
	created: function(){
		this.$store.commit('changeBg','bg-base-02')
	}
}
</script>
<style scoped>
 .st0{fill:#991136;}
	.st1{fill:#EECEB5;}
	.st2{fill:#6C1112;}
	.st3{fill:#B6112E;}
	.st4{fill:#99112E;}
  .base {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate3d(-53%,-50%,0);
  }
  .hair-main,
  .hair-back{
	transition: .6s all .6s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	transform-origin: 50% 23%;

  }
  .hair-point-1,
  .hair-point-2 {
	transition: .6s all .8s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	 transform-origin: 50% 25%;

  }
   .is-moving .hair-main,
   .is-moving .hair-back {
	transform-origin: 50% 0%;
	  transition: .8s all 0s;
	   transform: scale(1,0.94) ;
  }
  .is-moving .hair-back {
	  transform: scale(1,0.94) ;
  }
  .is-moving .hair-point-1 {
	  transition: .5s all 0s;
	  transform: rotate(-9deg);
  }
  .is-moving .hair-point-2 {
	  transition: .6s all .2s;
	  transform: rotate(-40deg);
  }
</style>
