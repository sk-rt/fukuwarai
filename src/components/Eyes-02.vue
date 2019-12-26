<template>
	<div class="eyes">
		<div id="left-eye" class="left-eye left-eye-02">
			<eye-02></eye-02>
		</div>
		<div id="right-eye" class="right-eye right-eye-02">
			<eye-02></eye-02>
		</div>
	</div>
</template>
<script>
import Eye02 from './Eye-02.vue'

export default {
  components: {
    Eye02
  }

}
</script>
<style scoped>
  .left-eye,.right-eye  {
    position: absolute;
  }

</style>
