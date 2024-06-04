<script setup lang="ts">
import { AvatarPropsType } from '@u/props'
import { avatarClassObject } from '@u/classes'
import { computed } from 'vue'




const props = withDefaults(defineProps<AvatarPropsType>(), {
  tag: "span"
})

const avatarClass = computed(() => avatarClassObject(props))

</script>

<template>
  <component :is="tag" :class="[avatarClass, cls]">
    <slot />
  </component>
</template>

<style scoped>
.pr-avatar {
  --avatar-size: 40px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdfdfd;
  color: #464964;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;

  &.pr-avatar-xsmall {
    --avatar-size: 32px;
  }

  &.pr-avatar-small {
    --avatar-size: 36px;
  }

  &.pr-avatar-medium {
    --avatar-size: 48px;
  }

  &.pr-avatar-large {
    --avatar-size: 64px;
  }

  &.pr-avatar-xlarge {
    --avatar-size: 80px;
  }

  width: var(--avatar-size);
  height: var(--avatar-size);

  &.pr-avatar-border {
    border: 1px solid #e5e7eb;
  }

  &.pr-avatar-border-hover:hover {
    border-color: #006af3;
    color: #006af3;
  }

  &.pr-avatar-rounded {
    border-radius: 10px;
  }

  &.pr-avatar-circle {
    border-radius: 999px;
  }
}

.pr-cream-b-c {
  background-color: #f9eee8
}

.tm-muted-b-c {
  background-color: #f0f4f7;
}


</style>