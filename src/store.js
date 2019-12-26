import Vue from "vue";
import Vuex from "vuex";
import { defFacePartsList,defFaceLayout } from "./default";

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		ui: {
			isShowGrid: false,
			isShowSample: false
		},
		design: {
			background: "default"
		},
		facePartsList: defFacePartsList,
    	faceLayout : defFaceLayout,
	},
	mutations: {
		toggleGrid(state) {
			state.ui.isShowGrid = !state.ui.isShowGrid;
		},
		toggleSample(state) {
			state.ui.isShowSample = !state.ui.isShowSample;
		},
		changeBg(state, bgSlug) {
			state.design.background = bgSlug;
		},
		fetchFaceList(state, listObject) {
			state.facePartsList = listObject;
    },
    fetchfaceLayout(state, faceLayout) {
			state.faceLayout = faceLayout;
		}
	}
});
