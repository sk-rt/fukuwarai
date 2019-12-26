<template >
<div>
	
	<component v-bind:is="currentBase"></component>
	<component v-bind:is="currentEye"></component>
	<component v-bind:is="currentNose"></component>
	<component v-bind:is="currentMouth"></component>
	<div class="face-error">
		<div v-if="errorMessage.common">{{errorMessage.common}}</div>
		<div v-if="errorMessage.base">{{errorMessage.base}}</div>
		<div v-if="errorMessage.eyes">{{errorMessage.eyes}}</div>
		<div v-if="errorMessage.nose">{{errorMessage.nose}}</div>
		<div v-if="errorMessage.mouth">{{errorMessage.mouth}}</div>
	</div>
</div>
</template>
<style>

</style>

<script>
import store from '../store';

import Base01 from './Base-01.vue'
import Base02 from './Base-02.vue'
import Base03 from './Base-03.vue'

import Eyes01 from './Eyes-01.vue'
import Eyes02 from './Eyes-02.vue'
import Eyes03 from './Eyes-03.vue'

import Mouth01 from './Mouth-01.vue'
import Mouth02 from './Mouth-02.vue'
import Mouth03 from './Mouth-03.vue'

import Nose01 from './Nose-01.vue'
import Nose02 from './Nose-02.vue'
import Nose03 from './Nose-03.vue'

export default {
	components: {
		Base01,
		Base02,
		Base03,
		Eyes01,
		Eyes02,
		Eyes03,
		Mouth01,
		Mouth02,
		Mouth03,
		Nose01,
		Nose02,
		Nose03
	},
	data: function (){
		return {
			isError: false,
			errorMessage: {
				common:"",
				base: "",
				eyes: "",
				nose: "",
				mouth: ""
			},
			documentStyle : {}
		}
	},
	mounted(){
		this.documentStyle = document.createElement("style");
		this.documentStyle.setAttribute("type", "text/css");
		this.documentStyle.textContent = this.styles;
		document.getElementsByTagName('head').item(0).appendChild(this.documentStyle);
		console.dir(this.documentStyle);

	},
	watch: {
		styles: function(val){
			this.documentStyle.textContent = this.styles;
			document.getElementsByTagName('head').item(0).appendChild(this.documentStyle);
			console.dir(this.documentStyle);

		}
	},
	computed: {
		parts(){
			let list = {
				base: "",
				eye: "",
				nose: "",
				mouth:""
			};
			 try {
				list = eval( `(${store.state.facePartsList})` );
			} catch (e) {
				console.log("ERROR. JSON.parse failed");
				this.errorMessage.common = "構文エラー";
				return list;
			}
			console.log(list);
			this.checkExistComponent(list);
			this.errorMessage.common = "";
			return list;
		},
		styles(){
			return store.state.faceLayout;
		},
		currentBase() {
			if(this.hasComponentNum(this.parts.base)){
				this.errorMessage.base = "";
				return "base-" + this.parts.base;
			} else {
				this.errorMessage.base = "輪郭のパーツがありません";
				return false;
			}
		},
		currentEye() {
			if(this.hasComponentNum(this.parts.eye)){
				this.errorMessage.eyes = "";
				return "eyes-" + this.parts.eye;
			} else {
				this.errorMessage.eyes = "目のパーツがありません";
				return false;
			}
		},
		currentNose() {
			if(this.hasComponentNum(this.parts.nose)){
				this.errorMessage.nose = "";
				return "nose-" + this.parts.nose;
			} else {
				this.errorMessage.nose = "鼻のパーツがありません";
				return false;
			}
		},
		currentMouth() {
			if(this.hasComponentNum(this.parts.mouth)){
				this.errorMessage.mouth = "";
				return "mouth-" + this.parts.mouth;
			} else {
				this.errorMessage.mouth = "口のパーツがありません";
				return false;
			}
		},
		
	},
	methods: {
		hasComponentNum(num){
			if(num === "01" || num === "02" || num === "03" ){
				return true;
			} else {
				return false
			}
		},
		checkExistComponent(list) {
			if(typeof list !== "object") return false;
			Object.keys(list).forEach(key => {
				console.log(this);				
			});

		}
	}
}
</script>

