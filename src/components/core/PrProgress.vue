<script setup lang="ts">
import { ProgressPropsType } from '@u/props'


const props = withDefaults(defineProps<ProgressPropsType>(), {
  max: 100
})

</script>

<template>
  <progress class="uk-progress" :value="value" :max="max" :id="id" />
</template>

<style scoped>

.uk-progress {
  height: 5px;
}

progress.uk-progress::-webkit-progress-bar {
  border-radius: 7px;
}
progress.uk-progress::-webkit-progress-value {
  border-radius: 7px;
  background-color: #006af3;
}


</style>