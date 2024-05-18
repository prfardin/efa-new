<script setup lang="ts">


import { AvatarPropsType } from '@u/props'
import { computed } from 'vue'
import { avatarClassObject } from '@u/classes'




const props = withDefaults(defineProps<AvatarPropsType>(), {
  tag: "span"
})

const avatarClass = computed(() => avatarClassObject(props))

</script>

<template>
  <component :is="tag" :class="avatarClass">
    <img :src="img" alt="avatar" class="uk-object-cover">
  </component>
</template>

<style scoped>
.pr-avatar {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9eee8;
  transition: 0.3s ease-in-out;
  width: 40px;
  height: 40px;
}

.pr-avatar-xsmall {

}

.pr-avatar-small {
  width: 36px;
  height: 36px;
}

.pr-avatar-large {
  width: 64px;
  height: 64px;
}

.pr-avatar-rounded {
  border-radius: 15px;
}

.pr-avatar-circle {
  border-radius: 999px;
}

</style>