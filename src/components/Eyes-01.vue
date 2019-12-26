<template>
	<div class="eyes">
		<div id="left-eye" class="left-eye left-eye-01">
			<eye-01></eye-01>
		</div>
		<div id="right-eye" class="right-eye right-eye-01">
			<eye-01></eye-01>
		</div>
	</div>
</template>
<script>
import Eye01 from './Eye-01.vue'

export default {
  components: {
    Eye01
  }

}
</script>
<style scoped>
  .left-eye,.right-eye  {
    position: absolute;
  }

</style>
