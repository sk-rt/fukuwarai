<template>
	<div id="ui" class="ui-container">
		<div class="ui-parts ui-show-grid" >
			<button type="button" @click="toggleGrid" :class="{ isShow  : isShowGrid }">
				<i class="ui-icon ui-icon-grid"></i>
				{{gridText}}
			</button>
		</div>
		<div class="ui-parts ui-show-sample" >
			<button type="button" @click="toggleSample" :class="{ isShow  : isShowSample }">
				<i class="ui-icon ui-icon-sample"></i>
				{{sampleText}}
			</button>
		</div>
	</div>
</template>
<script>
import store from '../store';

export default {
	methods: {
		toggleGrid () {
			store.commit('toggleGrid');
		},
		toggleSample () {
			store.commit('toggleSample');
		}
	},
	computed: {
		isShowGrid () {
			return store.state.ui.isShowGrid
		},
		gridText () {
			return store.state.ui.isShowGrid ? "ガイド" : "ガイド"
		},
		isShowSample () {
			return store.state.ui.isShowSample
		},
		sampleText () {
			return store.state.ui.isShowSample ? "見本" : "見本"
		},
	}

}
</script>
<style scoped>
	.ui-container {
		position: fixed;
		right: 20px;
		top:20px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: end;
		align-items:stretch;
	}
	.ui-parts {
		margin: 0 0 0 10px;
	}
	.ui-parts button {
		display: block;
		font-size: 1.1em;
		padding: .3em .5em;
		color: rgba(255,255,255,0.7);
		border: 0px solid;
		transition: .6s all;
		text-align: center;
		color: #000;
		opacity: 0.5;
	}
	button.isShow {
		opacity: 1;
	}
	button.isShow .ui-icon {
		background-color: #000;
	}
	.ui-icon {
		display: block;
		width: 77px;
		height: 77px;
		border-radius: 100%;
		background-repeat: no-repeat;
		background-position: center;
		margin: 0 auto 10px;
		background-image: url("../assets/images/ui_grid.svg");
		background-color: rgba(0,0,0,0.3);
	}
	.ui-icon-sample {
		background-image: url("../assets/images/ui_sample.svg");
	}
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		outline: none;
		padding: 0;
		margin: 0;
		appearance: none;
		font-family: inherit;
		box-sizing: content-box;
		font-size: inherit;
		color :inherit;
	}
</style>
