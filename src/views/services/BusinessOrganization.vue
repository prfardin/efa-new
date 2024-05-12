<script setup lang="ts">
import { formData } from '@sc/fetch'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Components
import PrButton from '@c/core/button.vue'
import PrGrid from '@c/core/grid.vue'
import PrLink from '@c/core/link.vue'
import PrLabel from '@c/core/form/label.vue'
import PrInput from '@c/core/form/input.vue'



interface Form {
  data: {
    first_name: string
    last_name: string
  }
  busy: boolean
}

const test = ref([])

function insertInput() {
  test.value.push({})
}

function sliceInput(i: any) {
  test.value.splice(i, 1)
}

// data
const form = formData({}) as unknown as Form

const router = useRouter()
function submitForm(){
  router.push({ name: 'personalDetails' })
}
</script>

<template>
  <form class="uk-form-stacked uk-height-1-1">
    <div class="uk-flex uk-flex-between uk-flex-column">
      <pr-grid class="uk-child-width-1-1" medium>
        <div>
          <pr-grid class="uk-child-width-1-1 uk-child-width-1-2@s" medium>
            <div>
              <pr-label
                for="first_name"
              >first name</pr-label>
              <pr-input
                id="first_name"
                name="first_name"
                cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
                class="uk-width-1-1"
                autofocus
                v-model="form.data.first_name"
              />
            </div>
            <div>
              <pr-label
                for="last_name"
              >last name</pr-label>
              <pr-input
                id="last_name"
                name="last_name"
                cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
                class="uk-width-1-1"
                v-model="form.data.last_name"
              />
            </div>
          </pr-grid>
        </div>
        <div  v-for="(item, index) in test" :key="index">
          <pr-grid class="uk-child-width-1-1 uk-child-width-1-2@s" medium>
            <div>
              <pr-label
                for="first_name"
              >first name</pr-label>
              <pr-input
                id="first_name"
                name="first_name"
                cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
                class="uk-width-1-1"
                autofocus
                v-model="form.data.first_name"
              />
            </div>
            <div>
              <pr-label
                for="last_name"
              >last name</pr-label>
              <div class="uk-position-relative">
                <pr-input
                  id="last_name"
                  name="last_name"
                  cls="pr-auth-input pr-direction-ltr uk-input uk-form-small"
                  class="uk-width-1-1"
                  v-model="form.data.last_name"
                />
                <div style="position: absolute;left: 115%; top: 50%; transform: translate(-50%, -50%)" @click="sliceInput(test[0])">deledt</div>
              </div>
            </div>
          </pr-grid>
        </div>
      </pr-grid>
      <div class="uk-margin-top">
        <div type="button" class="uk-text-bold" icon="plus" ratio=".8" @click="insertInput" style="cursor: pointer">Add Director</div>
      </div>
      <div class="uk-margin-medium-top">
        <pr-grid class="uk-child-width-1-1 uk-child-width-auto@s uk-flex-middle uk-flex-between@s">
          <div>
            <pr-link class="pr-auth-button" muted square small :to="{name: 'businessDetails'}">previous</pr-link>
          </div>
          <div>
            <pr-button class="pr-auth-button-primary" primary small square icon="line-arrow-right" icon-class="uk-flex-last" tag="a" @click="submitForm">test</pr-button>
          </div>
        </pr-grid>
      </div>
    </div>
  </form>
</template>

<style scoped lang="less">

</style>