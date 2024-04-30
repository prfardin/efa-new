<script setup lang="ts">
import PrButton from '@c/core/button.vue'
import PrIcon from '@c/core/icon.vue'
import { onBeforeUnmount, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'
import {useRouter, useRoute} from "vue-router";
import axios from "axios";
import {useI18n} from "vue-i18n";
import PrInput from "../../components/core/form/input.vue";
import PrGrid from "../../components/core/grid.vue";

interface Test {
    mobile?: string
}
const props = defineProps<Test>()

const router = useRouter()

const myWidth = ref<number | undefined>(0)

const ttt = ref<any>(null)

onMounted(() => {
  myWidth.value = ttt.value.$el.offsetWidth
  window.addEventListener('resize', resize)

  // if (props.mobile === undefined)
    //     router.push({ name: 'register' })\
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
})

function resize() {
  myWidth.value = ttt.value.$el.offsetWidth
}

const { t } = useI18n()

</script>

<template>
    <form class="uk-form-stacked pr-auth-width-large">
        <div class="uk-flex uk-flex-middle uk-flex-between" :style="{ width: myWidth + 'px' }">
          <span style="font-size: 11px; background-color: rgba(218,218,218,0.5); padding: 2px 5px">
              <span> ارسال مجدد: </span>
              <span :uk-countdown="`date: ${new Date(new Date().setMinutes(new Date().getMinutes() + 2))}`">
                  <span>
                      <span class="uk-countdown-minutes"></span>
                  </span>
                  <span>:</span>
                  <span>
                      <span class="uk-countdown-seconds"></span>
                  </span>
              </span>
          </span>
          <label style="color: #6e6f75; font-size: 12px">
            <span>کد پیامک شده </span>
          </label>
        </div>
        <pr-grid small collapse class="uk-flex-bottom">
            <div class="uk-width-expand">
                <div uk-grid class="uk-grid-small" style="margin-top: 4px; margin-bottom: 6px">
                    <div class="uk-width-large@s uk-width-expand@m">
                        <pr-input ref="ttt" id="mobile" name="mobile" small cls="pr-auth-input pr-direction-ltr uk-input uk-form-small uk-text-center" class="uk-width-1-1" />
                    </div>
                    <div class="uk-width-auto@s">
                        <pr-button
                            class="pr-auth-button-primary"
                            to="/register/password"
                            primary
                            small
                            square
                            icon="arrow-right"
                            ratio="0.8"
                            icon-flip
                            spinner-mod="circle"
                        >{{ t('auth.register.submit') }}</pr-button>
                    </div>
                </div>
            </div>
        </pr-grid>
    </form>
</template>
