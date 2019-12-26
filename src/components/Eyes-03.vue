<template>
	<div class="eyes">
		<div id="left-eye" class="left-eye left-eye-03">
			<eye-03></eye-03>
		</div>
		<div id="right-eye" class="right-eye right-eye-03">
			<eye-03></eye-03>
		</div>
	</div>
</template>
<script>
import Eye03 from './Eye-03.vue'

export default {
  components: {
    Eye03
  }

}
</script>
<style scoped>
  .left-eye,.right-eye  {
    position: absolute;
  }

</style>
