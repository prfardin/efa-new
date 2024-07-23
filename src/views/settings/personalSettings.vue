<script setup lang="ts">

import PrGrid from '@c/core/PrGrid.vue'
import SettingForm from '@c/theme/settingForm.vue'
import PrIcon from '@c/core/PrIcon.vue'
import { ref } from 'vue'

const data = ref<any>([
  { label: "Email address", input: "mayar@gmail.com", icon: "line-edit-alt" },
  { label: "Preferred name", input: "Maya Rosselini", icon: "line-edit-alt" },
  { label: "Legal name", input: "Maya Rosselini", icon: "line-edit-alt" },
])
</script>

<template>
  <div style="padding: 24px 0">
    <pr-grid medium>
      <div class="uk-width-medium">
        <h3 class="uk-h5 pr-margin-xsmall-bottom">About you</h3>
        <p class="uk-margin-remove uk uk-text-small">Some basic information that we need to know about you, and to process legal matters.</p>
      </div>
      <div class="uk-width-expand">
        <div class="uk-child-width-1-1">
          <setting-form title="Your info" :forms="data" />
        </div>
      </div>
    </pr-grid>
  </div>
</template>

<style scoped>


</style>