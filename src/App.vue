<template>
<div id="pageWrapper" class="page-wrapper"
	:class="classObject">
  <div class="page-main">
    <div class="editor-block">
      <Editor></Editor>
    </div>
    <div id="faceBlock" class="face-block">
      <div class="face-scaler" :style="`transform:scale(${drawScale},${drawScale})`">
        <div class="face-container">
          <Face></Face>
          <div class="grid"><div class="grid-center"></div></div>
        </div>
      </div>
      <Ui></Ui>
    </div>
  </div>
  </div>
</template>

<script>
import Face from './components/Face.vue'
import Ui from './components/Ui.vue'
import Editor from './components/Editor.vue'
import './assets/css/base.css'
// import layout from './works/layout.css'
import './assets/css/face-sample.css'
import move from './assets/js/move'
import mouseMove from './assets/js/mouseMove'
import store from './store';

export default {
	name: 'App',
	components: {
		Face,
    Ui,
    Editor
  },
  data: function(){
    return {
      playGroundwidth: 1200
    }
  },
	mounted:  function(){
		this.$nextTick(function () {
			move();
			mouseMove();
    })
    this.playGroundwidth = document.getElementById("faceBlock").clientWidth;
    window.addEventListener("resize",()=>{
      this.playGroundwidth = document.getElementById("faceBlock").clientWidth
    })
	},
	computed: {
    drawScale(){
      if(this.playGroundwidth < 1400){
         return this.playGroundwidth / 1400
      } else {
        return 0.8
      }
    },
		classObject(){
			return [
				{
					isShowGrid: store.state.ui.isShowGrid,
					isShowSample: store.state.ui.isShowSample,
				},
				store.state.design.background
			]
		}

	}
}
</script>
