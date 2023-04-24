<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'
import {onMounted, ref, watch} from "vue";
import {useRouter, useRoute} from "vue-router";
import axios from "axios";

interface Test {
    mobile?: string
}
const props = defineProps<Test>()

const router = useRouter()

onMounted(() => {
    // if (props.mobile === undefined)
    //     router.push({ name: 'register' })
})

</script>

<template>
    <div>
        <label style="color: #6e6f75; font-size: 12px">
            <span>کد پیامک شده </span>
        </label>
        <span style="font-size: 11px; margin-right: 80px; background-color: rgba(218,218,218,0.5); padding: 2px 5px">
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
        <div class="uk-flex-middle uk-grid-collapse" uk-grid>
            <div class="uk-width-expand">
                <div uk-grid class="uk-grid-small" style="margin-top: 4px; margin-bottom: 6px">
                    <div class="uk-width-expand">
                        <div style="position: relative">
                            <input name="code" autofocus class="uk-input input uk-form-small uk-text-center verify" type="text" style="height: 36px; width: 250px; letter-spacing: 10px; padding-left: 10px; padding-right: 10px">
                        </div>
                    </div>
                    <div class="uk-width-auto">
                        <pr-button :to="`?step=Password`" primary small square style="line-height: 34px; color: #fefefe;background-color: #0260ff; display: flex; align-items: center;justify-content: center; min-width: 128px">
                            <div v-if="true" style="line-height: 34px" uk-spinner="ratio: 0.8"></div>
                            <span v-if="false" style="margin-left: 4px">تایید</span>
                            <pr-icon v-if="false" icon="arrow-right" :ratio="0.8" />
                        </pr-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">

</style>
