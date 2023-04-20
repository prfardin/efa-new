<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'
import {ref, watch} from "vue";
import { useRouter } from 'vue-router'
import axios from "axios";
import {useI18n} from "vue-i18n";

const { t } = useI18n();

const mobile = ref('')
const loader = ref(false)
const router = useRouter()

watch(mobile, (newMobile) => {
    if (newMobile.length === 10 || newMobile.length === 11) {
        loader.value = true;
        /*axios.post('api/register', {
            mobile: `0${mobile.value}`
        }, {
            responseType: 'json'
        }).then(response => {*/
            router.push({
                query: {
                    step: 'Verify',
                    mobile: mobile.value,
                },
            })
        /*}).catch(error => {
            if (error.response) {
                console.log(error.response.data.message)
            }
        })*/
    }
})

</script>

<template>
    <div class="uk-height-1-1 uk-tile pr-tile-auth uk-flex uk-flex-top">
        <div>
            <div>
                <h3 class="uk-h5 uk-text-bold" style="color: #464964; font-size: 26px; margin-bottom: 0">{{ t('auth.register.header') }}</h3>
                <p style="font-size: 13px; color: #909096; margin-top: 10px">{{ t('auth.register.comment_1') }}<br />{{ t('auth.register.comment_2') }}</p>
            </div>
            <div style="margin-top: 44px">
                <label style="color: #6e6f75; font-size: 12px">شماه تماس <span style="margin-right: 3px; border: 1px solid #9fa0a3; border-radius: 100%; position: relative; top: -4px; background-color: #fff" uk-icon="icon: question; ratio: 0.5"></span></label>
                <div class="uk-flex-middle uk-grid-collapse" uk-grid>
                    <div class="uk-width-expand">
                        <div uk-grid class="uk-grid-small" style="margin-top: 4px; margin-bottom: 6px">
                            <div class="uk-width-expand" style="position: relative">
                                <input autofocus v-model="mobile" class="uk-input input uk-form-small uk-text-left" type="text" style="direction: ltr; border-left: none; height: 36px; width: 210px">
                                <span style="position: absolute; height: 20px; border-right: 1px solid #ededf2; transform: translate(0, -50%); top: 50%"></span>
                                <input class="uk-input input uk-form-small" type="text" style="direction: ltr; border-right: none; height: 36px; width: 40px;text-align: center" value="+98">
                            </div>
                            <div class="uk-width-auto">
                                <pr-button :class="{'pr-disabled' : mobile.length !== 11 && mobile.length !== 10}" :to="`?step=Verify&mobile=${mobile}`" primary small square style="line-height: 34px; color: #fefefe;background-color: #0260ff; display: flex; align-items: center;justify-content: center; min-width: 128px">
                                    <div v-if="loader" style="line-height: 34px" uk-spinner="ratio: 0.8"></div>
                                    <span v-if="!loader" style="margin-right: 4px">ارسال کد</span>
                                    <pr-icon v-if="!loader" icon="arrow-right" :ratio="0.8" />
                                </pr-button>
                            </div>
                        </div>
                        <label style="font-size: 12px"><input checked class="input uk-checkbox" type="checkbox" value=""><span style="margin-right: 5px; "> شرایط استفاده از <a href="#">خدمات و حریم خصوصی</a></span></label>
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
