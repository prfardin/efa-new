<script setup lang="ts">

// Components
import PrGrid from '@c/core/grid.vue'
import PrInput from '@c/core/form/input.vue'
import PrLabel from '@c/core/form/label.vue'
import PrIcon from '@c/core/icon.vue'
import PrTextarea from '@c/core/form/PrTextarea.vue'
import PrSelect from '@c/core/form/PrSelect.vue'
import { formData } from '@sc/fetch'
import { ref } from 'vue'
import PrSelectBox from '@c/core/form/PrSelectBox.vue'


const id = ref(1)

interface Form {
  data: {
    company_name: string
    id: number
  }
  busy: boolean
}

const list = ref<any>([
  {name: "Inc.", id: 1},
  {name: "Ltd.", id: 2},
  {name: "LLC ", id: 3},
  {name: "PLC ", id: 4},
])

// data
const form = formData({}) as unknown as Form

const test = ref("ali")
</script>

<template>
  <form class="uk-form-stacked">
    <pr-grid class="uk-child-width-1-1">
      <div>
        <pr-label
          for="company_name"
          class="pr-auth-form-label"
          icon="question"
          :ratio="0.5"
          icon-class="pr-auth-form-helper"
        >Company name</pr-label>
        <pr-grid small>
          <div class="uk-width-expand@s">
            <pr-input
              id="company_name"
              name="company_name"
              cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
              class="uk-width-1-1"
              autofocus
              v-model="form.data.company_name"
            />
          </div>
          <div class="uk-width-small@s">
            <pr-select-box name="" v-model="form.data.id" :d="test"  divider :lists="list" />
          </div>
        </pr-grid>
        <div class="uk-margin-top uk-width-1-1">
          <div class="pr-auth-info">
            <pr-icon icon="file-info-alt"></pr-icon>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </div>
      <div>
        <pr-label for="">Business description</pr-label>
        <pr-textarea :rows="5"  name=""/>
      </div>
    </pr-grid>
  </form>
</template>

<style scoped lang="less">
.pr-auth-info {
  background-color: rgba(94, 107, 134, 0.2);
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #334e68;
  border-radius: 4px;
  gap: 8px;
  color: #0a0b0b;
}
</style>