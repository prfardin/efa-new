<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'
import {onMounted, ref, watch} from "vue";
import {useRouter, useRoute} from "vue-router";
import axios from "axios";

const code = ref('')
const code2 = ref<HTMLElement>(null)
const error7 = ref(false)
const loader = ref(false)
const router = useRouter()
const route = useRoute()

watch(code, (newCode) => {
    if (newCode.length === 5) {
        loader.value = true;
        axios.post('api/verify-mobile', {
            mobile: `0${route.query.mobile}`,
            code: code.value,
        }, {
            responseType: 'json'
        }).then(response => {
            router.push({
                query: {
                    step: 'Password'
                },
            })
        }).catch(error => {
            if (error.response) {
                loader.value = false;
                error7.value = true
            }
        })
    }
})

onMounted(() => {
    code2.value.focus()
})

</script>

<template>
    <div class="uk-height-1-1 uk-tile uk-tile-default uk-flex uk-flex-left uk-flex-top" style="background-color: #f5f6f9">
        <div>
            <div>
                <h3 class="uk-h5" style="font-weight: 700; color: #464964; font-size: 26px; margin-bottom: 0">همین حالا شروع کن.</h3>
                <p style="font-size: 13px; color: #909096; margin-top: 10px">ثبت نام و شروع فعالیت در ایفا فقط در چند مرحله ساده,<br />برای شروع شماره تماس رو وارد کن.</p>
            </div>
            <div style="margin-top: 44px">
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
                                    <input ref="code2" v-model="code" name="code" autofocus class="uk-input input uk-form-small uk-text-center verify" type="text" style="height: 36px; width: 250px; letter-spacing: 10px; padding-left: 10px; padding-right: 10px">
                                    <p v-if="error7" style="font-size: 11px; margin-top: 8px; color: #e14040">کد نا معتبر است</p>
                                </div>
                            </div>
                            <div class="uk-width-auto">
                                <pr-button :class="{'pr-disabled' : code.length !== 5}" :to="`?step=Password`" primary small square style="line-height: 34px; color: #fefefe;background-color: #0260ff; display: flex; align-items: center;justify-content: center; min-width: 128px">
                                    <div v-if="loader" style="line-height: 34px" uk-spinner="ratio: 0.8"></div>
                                    <span v-if="!loader" style="margin-left: 4px">تایید</span>
                                    <pr-icon v-if="!loader" icon="arrow-right" :ratio="0.8" />
                                </pr-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">

</style>
