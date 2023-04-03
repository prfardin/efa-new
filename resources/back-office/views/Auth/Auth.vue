<script setup lang="ts">
import Register from '@bv/Auth/Register.vue'
import Verify from '@bv/Auth/Verify.vue'
import Password from '@bv/Auth/Password.vue'
import Type from '@bv/Auth/Type.vue'
import {onMounted, ref, watch} from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const currentTab = ref(route.query.step ?? 'Register')

const tabs = {
    Register,
    Verify,
    Password,
    Type,
}

const ripple = ref<HTMLElement>(null);
const setRipple = ref(false);
const rippleSet = ref(false);

onMounted(() => {
    rippleSet.value = currentTab.value === 'Type';
})

watch(
    () => route.query.step,
    async newStep => {
        if (newStep === 'Type') {
            setTimeout(() => {
                currentTab.value = newStep ?? 'Register'
            }, 1200)
        } else {
            currentTab.value = newStep ?? 'Register'
        }
        setRipple.value = route.query.step === 'Type';
    }
)

watch( setRipple, () => {
    setRipple.value ? setTimeout(() => {
        rippleSet.value = true;
        ripple.value.classList.remove('ripple')
    }, 1200) : ''
    if (!setRipple.value) {
        rippleSet.value = false;
    }
})

</script>

<template>
    <div class="uk-section uk-section-default" style="padding-top: 57px; padding-bottom: 57px; background: linear-gradient(0deg, #d2dbe7, #dfe3ef)">
        <div class="uk-container" style="max-width: 896px">
            <div class="uk-width-1-1">
                <div uk-height-viewport="expand: true" class="uk-grid-collapse uk-grid-item-match" uk-grid>
                    <div class="uk-width-1-3" style="position: relative; width: 310px;overflow: hidden">
                        <div ref="ripple" :class="[ setRipple ? 'ripple' : '']"></div>
                        <div v-if="rippleSet" class="uk-height-1-1 uk-tile uk-tile-primary uk-tile-large uk-flex uk-flex-top" style="overflow: hidden; background-color: #fff; padding-top: 115px">
                            <div class="uk-width-1-1" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 75">
                                <div style="margin-bottom: 22px; display: flex; align-items: center;">
                                    <span style="box-sizing: border-box;background-color: #0fc96f; border: 1px solid #0fc96f; border-radius: 100%; margin-left: 14px; display: flex; width: 22px; height: 22px; font-size: 12px; font-weight: 900; align-items: center;justify-content: center" uk-icon="icon: check;ratio: 0.8"></span>
                                    <span style="font-size: 14px; color: #d6dcdf">ثبت نام</span>
                                </div>
                                <div style="margin-bottom: 22px; display: flex; align-items: center;">
                                    <span style="box-sizing: border-box;border-radius: 100%; margin-left: 14px; border: 1px solid #1c56ba; color:#1c56ba; width: 22px; height: 22px; font-size: 12px; font-weight: 900; display: flex; align-items: center;justify-content: center;">۲</span>
                                    <span style="font-size: 14px; color: #1c56ba; font-weight: 700">نوع کسب و کار</span>
                                    <span class="uk-width-expand uk-text-left" style="font-size: 14px; color: #d4d8e3; font-weight: 700" uk-icon="line-arrow-right"></span>
                                </div>
                                <div style="margin-bottom: 22px; display: flex; align-items: center;">
                                    <span style="box-sizing: border-box;border-radius: 100%; margin-left: 14px; border: 1px solid #e0e2e2; color:#85868f; width: 22px; height: 22px; font-size: 12px; display: flex; align-items: center;justify-content: center; font-weight: 700">۳</span>
                                    <span style="font-size: 14px; color: #85868f; font-weight: 700">جزئیات</span>
                                </div>
                                <div style="margin-bottom: 22px; display: flex; align-items: center;">
                                    <span style="box-sizing: border-box;border-radius: 100%; margin-left: 14px; border: 1px solid #e0e2e2; color:#85868f; width: 22px; height: 22px; font-size: 12px; display: flex; align-items: center;justify-content: center; font-weight: 700">۴</span>
                                    <span style="font-size: 14px; color: #85868f; font-weight: 700">تشکیلات</span>
                                </div>
                                <div style="margin-bottom: 22px; display: flex; align-items: center;">
                                    <span style="box-sizing: border-box;border-radius: 100%; margin-left: 14px; border: 1px solid #e0e2e2; color:#85868f; width: 22px; height: 22px; font-size: 12px; display: flex; align-items: center;justify-content: center; font-weight: 700">۵</span>
                                    <span style="font-size: 14px; color: #85868f; font-weight: 700">مشخصات</span>
                                </div>
                            </div>
                            <div  uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 50">
                                <div style="position: absolute; bottom: -110px; right: -80px; background-color: #f5f8ff; width: 440px; height: 170px; transform: rotate(-23deg);"></div>
                                <div style="position: absolute; bottom: -110px; right: -80px; background-color: #eaf0ff; width: 340px; height: 170px; transform: rotate(-30deg);"></div>
                                <div style="position: absolute; bottom: 65px; right: 55px">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64.06" height="63.93" viewBox="0 0 64.06 63.93">
                                        <path d="M6.36,27.64l5.48,5.49a2.22,2.22,0,0,0,3.3-.19l8.64-10.82a2.2,2.2,0,0,1,1.73-.83H48a2.21,2.21,0,0,1,1.27,4l-46,32.14A2.13,2.13,0,0,1,0,55.3L5.38,27.94A.59.59,0,0,1,6.36,27.64Z" fill="#c5ddff"/>
                                        <path d="M64,56.17,58.71,27.58a2,2,0,0,0-3.12-1.29L36.05,39.79a2,2,0,0,0,.1,3.37L61,58.26A2,2,0,0,0,64,56.17Z" fill="#6fa3ff"/>
                                        <path d="M27.66,45.67,7.72,60A2.15,2.15,0,0,0,9,63.93H54.75a2.16,2.16,0,0,0,1-4L30,45.54A2.17,2.17,0,0,0,27.66,45.67Z" fill="#71a4ff"/>
                                        <path d="M13.65,0C7.54,0,2.59,4.62,2.59,10.32A9.78,9.78,0,0,0,3.7,14.81a6.35,6.35,0,0,0,.41.77l7.5,12.14a2.43,2.43,0,0,0,4.14,0l7.5-12.14a5,5,0,0,0,.54-1.15,9.66,9.66,0,0,0,.92-4.11C24.71,4.62,19.76,0,13.65,0Zm0,16.3a5.24,5.24,0,1,1,5.24-5.24A5.23,5.23,0,0,1,13.65,16.3Z" fill="#0061ff"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div v-else class="uk-height-1-1 uk-tile uk-tile-primary uk-tile-large uk-flex uk-flex-top back" style="background-color: #015eff">
                            <div>
                                <h3 class="uk-h3" style="color: #fdfdff; font-weight: 700; font-size: 25px; line-height: 1.4">کسب و کارت رو با<br>ایفا تو چند مرحله ساده رونق بده.</h3>
                                <p style="color: #87c0ff; margin-top: 24px; font-size: 15px">تو هزینه و وقت هم صرفه جویی کن.<br />کمتر از یک دقیقه.</p>
                            </div>
                        </div>
                        <div v-if="!rippleSet" style="position: absolute; top: 32px; right: 38px; color: #fff">
                            <span style="background-color: #fff; width: 26px; height: 26px; border-radius: 100%; color: #015eff; display: inline-flex; align-items: center; justify-content: center; font-weight: bolder; font-size: 18px">E</span>
                            <span style="margin-right: 6px;font-size: 14px;font-weight: 900; ">خدمات </span>
                            <span style="font-size: 14px; font-weight: 900; color: #87c0ff">ایفا</span>
                        </div>
                        <div v-else style="position: absolute; top: 32px; right: 38px; color: #fff" uk-scrollspy="cls: uk-animation-fade">
                            <span style="background-color: #005fff; width: 26px; height: 26px; border-radius: 100%; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-weight: bolder; font-size: 18px">E</span>
                            <span style="margin-right: 6px;color: #494c5e; font-size: 14px;font-weight: bolder; ">خدمات </span>
                            <span style="font-size: 14px; font-weight: bolder; color: #c2c4c9">ایفا</span>
                        </div>
                    </div>
                    <div class="uk-width-expand" style="position: relative">
                        <component :class="{'opacity-anim': route.query.step === 'Type'}" :is="tabs[currentTab]"></component>
                        <div style="position: absolute; top: 29px; left: 38px; color: #fff">
                            <span class="uk-margin-small-right" style="font-size: 13px; font-weight: 500; color: #a1a1a9">نیاز به کمک داری؟ </span>
                            <router-link to="/" class="uk-button uk-button-text" style="font-size: 13px; font-weight: 800; color: #2366db">کمک بگیر</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.opacity-anim > .anim-out {
    animation: .5s ease-out both;
    animation-direction: reverse;
    animation-timing-function: cubic-bezier(0.64, 0, 0.78, 0);
    animation-name: uk-fade;
}
.opacity-anim > .anim-in {
    animation: .6s ease-out both;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-name: uk-fade, uk-slide-bottom-small ;
}
.uk-h3 {
    line-height: 1.3;
}
.uk-tile {
    padding-top: 190px;
    padding-bottom: 190px;
    padding-left: 70px;
    padding-right: 70px;
}
.uk-tile-large {
    padding-top: 162px;
    padding-bottom: 162px;
    padding-left: 38px;
    padding-right: 38px;
}
.back {
    background-image: url("./board.svg");
    background-repeat: no-repeat;
    background-position: 111% 92%;
    background-size: 96px;
}
.uk-card-default {
    background-color: #fff;
    margin-top: 44px;
    border-radius: 10px;
    width: 373px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.02);
}
.uk-card-body.uk-card-small {
    padding-left: 24px;
    padding-right: 24px;
}
.input {
    background-color: #ffffff;
    border: 1px solid #ededf2;
}
.input:focus {
    background-color: #ffffff;
    border: 1px solid #e5e8fc;
}
.uk-checkbox:checked {
    background-color: rgb(2, 96, 255);
}
.uk-checkbox:focus {
    background-color: #ffffff;
    border: 1px solid #ededf2;
}
.uk-checkbox:checked {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOS44Mzk4NCwxNy4wODAwOGEuOTk2NzYuOTk2NzYsMCwwLDEtLjcwNy0uMjkzTDUuMjkzLDEyLjk0NzI3QS45OTk4OS45OTk4OSwwLDEsMSw2LjcwNywxMS41MzMyTDkuODM5ODQsMTQuNjY2LDE3LjI5Myw3LjIxMjg5QS45OTk4OS45OTk4OSwwLDAsMSwxOC43MDcsOC42MjdsLTguMTYwMTUsOC4xNjAxNkEuOTk2OC45OTY4LDAsMCwxLDkuODM5ODQsMTcuMDgwMDhaIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+");
    color: #fff;
}
.ripple {
    position: absolute;
    background-color: #ffffff;
    animation: ripple 1.2s cubic-bezier(0.22, 1, 0.36, 1);
    animation-fill-mode: forwards;
    z-index: 1;
    width: 1px;
    height: 1px;
}
@keyframes ripple {
    0% {
        transform: scale(0);
        bottom: 90px;
        right: 90px;
        border-radius: 100%;
        opacity: 0.7;
    }
    100% {
        transform: scale(1330);
        bottom: 0;
        right: 0;
        border-radius: 40%;
        opacity: 1;
    }
}
</style>
