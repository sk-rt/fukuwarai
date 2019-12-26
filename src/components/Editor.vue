<template>
	<div class="editor-inner">
		<div class="editor-item">
			<h2>1. 顔のパーツを選ぶ</h2>
			<div id="editorFaceList" class="editor-editor editor-face-list"></div>
		</div>
		<div class="editor-item">
			<h2>2. 顔をレイアウト</h2>
			<div id="editorLayout" class="editor-editor editor-layout"></div>
		</div>
		<!-- <div class="editor-item editor-actions">
			<button @click="submit()" class="editor-actions-submit"><span>反映させる</span></button>
		</div> -->

	</div>

</template>
<style scoped>
</style>
<script>
import store from "../store";
export default {
	data: function() {
		return {
			facePartsListText: "",
			faceLayoutText: "",
			editorFaceList: {},
			editorLayout: {}
		};
	},
	mounted() {
		const editorSetting = {
			autoScrollEditorIntoView: true,
			tabSize: 2,
			fotnSise: 14
		};
		// this.facePartsListText = JSON.stringify(store.state.facePartsList,null,4);
		this.facePartsListText = store.state.facePartsList;

		this.editorFaceList = ace.edit("editorFaceList", editorSetting);
		this.editorFaceList.setTheme("ace/theme/monokai");
		this.editorFaceList.setFontSize(14);
		this.editorFaceList.getSession().setMode("ace/mode/javascript");
		this.editorFaceList.getSession().setUseWrapMode(false);
		this.editorFaceList.setValue(this.facePartsListText, -1);
		this.editorFaceList.session.on('change', (delta)=> {
			this.submit();
			// delta.start, delta.end, delta.lines, delta.action
		});

		this.faceLayoutText = store.state.faceLayout;
		this.editorLayout = ace.edit("editorLayout", editorSetting);
		this.editorLayout.setTheme("ace/theme/monokai");
		this.editorLayout.setFontSize(14);
		this.editorLayout.getSession().setMode("ace/mode/css");
		this.editorLayout.setValue(this.faceLayoutText, -1);
		this.editorLayout.session.on('change', (delta)=> {
			this.submit();
		});
	},

	methods: {
		submit() {
			// const json = JSON.parse(this.editorFaceList.getValue());
			const json = this.editorFaceList.getValue();
			const css = this.editorLayout.getValue();
			this.$store.commit("fetchFaceList", json);
			this.$store.commit("fetchfaceLayout", css);
		}
	}
};
</script>
