<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'
import {ref, watch} from "vue";
import { useRouter } from 'vue-router'

const mobile = ref('')
const loader = ref(false)
const router = useRouter()

watch(mobile, (newMobile) => {
    if (newMobile.length === 10 || newMobile.length === 11) {
        loader.value = true;
        setTimeout(() => {
            router.push({
                query: {
                    step: 'Verify',
                    mobile: mobile.value,
                },
            })
        }, 700)
    }
})

</script>

<template>
    <div class="uk-height-1-1 uk-tile uk-tile-default uk-flex uk-flex-left uk-flex-top" style="background-color: #f5f6f9">
        <div>
            <div>
                <h3 class="uk-h5" style="font-weight: 700; color: #464964; font-size: 26px; margin-bottom: 0">Start your business now.</h3>
                <p style="font-size: 13px; color: #909096; margin-top: 10px">Creating your company in US is just few steps away,<br />Enter your email address to continue.</p>
            </div>
            <div style="margin-top: 44px">
                <label style="color: #6e6f75; font-size: 12px">Phone Number <span style="margin-left: 3px; border: 1px solid #9fa0a3; border-radius: 100%; position: relative; top: -4px; background-color: #fff" uk-icon="icon: question; ratio: 0.5"></span></label>
                <div class="uk-flex-middle uk-grid-collapse" uk-grid>
                    <div class="uk-width-expand">
                        <div uk-grid class="uk-grid-small" style="margin-top: 4px; margin-bottom: 6px">
                            <div class="uk-width-expand" style="position: relative">
                                <input class="uk-input input uk-form-small" type="text" style="border-right: none; height: 36px; width: 40px;text-align: center" value="+98">
                                <span style="position: absolute; height: 20px; border-right: 1px solid #ededf2; transform: translate(0, -50%); top: 50%"></span>
                                <input autofocus v-model="mobile" class="uk-input input uk-form-small" type="text" style="border-left: none; height: 36px; width: 210px">
                            </div>
                            <div class="uk-width-auto">
                                <pr-button :class="{'pr-disabled' : mobile.length !== 11 && mobile.length !== 10}" :to="`?step=Verify&mobile=${mobile}`" primary small square style="line-height: 34px; color: #fefefe;background-color: #0260ff; display: flex; align-items: center;justify-content: center; min-width: 128px">
                                    <div v-if="loader" style="line-height: 34px" uk-spinner="ratio: 0.8"></div>
                                    <span v-if="!loader" style="margin-right: 4px">Send Code</span>
                                    <pr-icon v-if="!loader" icon="arrow-right" :ratio="0.8" />
                                </pr-button>
                            </div>
                        </div>
                        <label style="font-size: 12px"><input checked class="input uk-checkbox" type="checkbox" value=""><span style="margin-left: 5px; ">Privacy and <a href="#">Policy</a></span></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.pr-disabled {
    pointer-events: none;
    opacity: 0.5;
}
</style>
