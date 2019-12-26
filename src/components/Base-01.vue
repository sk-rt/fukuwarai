<template>
  <div class="base base-01">


<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In  -->
<svg version="1.1"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
	 x="0px" y="0px" width="1163.9px" height="1119px" viewBox="0 0 1163.9 1119" style="enable-background:new 0 0 1163.9 1119;"
	 xml:space="preserve">

<defs>
</defs>
<g>
	<circle class="st0" cx="582" cy="587" r="532"/>
</g>
<g>
	<path class="st1 kaminoke" d="M1163.9,510C1126.2,222.2,880,0,582,0C283.9,0,37.8,222.1,0,509.8c34,6.7,69.1,10.2,105.1,10.2
		c207,0,386.7-116.4,477.4-287.3C673.1,403.6,852.9,520,1059.8,520C1095.4,520,1130.2,516.5,1163.9,510z"/>
</g>
<path class="st2 maegami-1" d="M386,402.5c-81.9,46.4-170,71.7-258.1,77.8c91.7,35.6,198,31.2,290.2-21c92.2-52.2,150.6-141.2,167.3-238.1
	C535,293.6,468,356.2,386,402.5z"/>
<path class="st2 maegami-2" d="M534.2,369.4c-26.1,49.1-62,89.6-103.9,120.6c57-11.3,108.5-47.2,137.9-102.5c29.4-55.3,30.3-118.1,7.9-171.7
	C573.9,267.9,560.3,320.3,534.2,369.4z"/>
<path class="st2" d="M899.6,238.2c65.7,67.5,116.5,142.4,151.8,219.1c-3.1-83.9-43.3-176.8-117.2-252.7
	c-73.9-76-165.7-118.7-249.4-124.1C760.4,117.8,833.9,170.7,899.6,238.2z"/>
</svg>

</div>
</template>
<script>
export default {
	created: function(){
		this.$store.commit('changeBg','bg-base-01')
	}
}
</script>
<style scoped>
  .st0{fill:#D9C6A1;}
	.st1{fill:#663512;}
	.st2{fill:#572E0F;}
  .base {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate3d(-50%,-50%,0);
  }
  .kaminoke,
  .maegami-1,
  .maegami-2 {
	transition: .6s all .5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	 transform-origin: 50% 23%;

  }
   .is-moving .kaminoke {
	transform-origin: 50% 0%;
	  transition: .5s all 0s;
	  transform: scale(1,1.05) rotate(1deg);
  }
  .is-moving .maegami-1 {
	  transition: .5s all 0s;
	  transform: skewX(-15deg);
  }
  .is-moving .maegami-2 {
	  transition: .6s all .1s;
	  transform: skewX(-10deg);
  }
</style>
