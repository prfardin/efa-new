<script setup lang="ts">
import Register from '@bv/Auth/Register.vue'
import Verify from '@bv/Auth/Verify.vue'
import Password from '@bv/Auth/Password.vue'
import Type from '@bv/Auth/Type.vue'
import {ref, watch} from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const currentTab = ref(route.query.step ?? 'Register')

const tabs = {
    Register,
    Verify,
    Password,
    Type,
}

const setRipple = ref(false);
const test = ref<HTMLElement>(null);

watch(
    () => route.query.step,
    async newStep => {
        currentTab.value = newStep ?? 'Register'
        if (currentTab.value === 'Type') {
            setRipple.value = true
        }
    }
)

const ripple = ref<HTMLElement>(null)

watch(setRipple, () => {
    if (setRipple) {
        ripple.value.classList.add('checked');
    }
})

</script>

<template>
    <div class="uk-section uk-section-default" style="padding-top: 57px; padding-bottom: 57px; background: linear-gradient(0deg, #d2dbe7, #dfe3ef)">
        <div class="uk-container" style="max-width: 896px">
            <div class="uk-width-1-1">
                <div uk-height-viewport="expand: true" class="uk-grid-collapse uk-grid-item-match" uk-grid>
                    <div ref="test" class="uk-width-1-3" style="position: relative; width: 310px;overflow: hidden">
                        <div ref="ripple"></div>
                        <div class="uk-height-1-1 uk-tile uk-tile-primary uk-tile-large uk-flex uk-flex-top back" style="background-color: #015eff">
                            <div>
                                <h3 class="uk-h3" style="color: #fdfdff; font-weight: 700; font-size: 26px">A few clicks away from creating your company.</h3>
                                <p style="color: #87c0ff; margin-top: 24px; font-size: 15px">Start your company in minutes.<br />Save time and money.</p>
                            </div>
                        </div>
                        <div style="position: absolute; top: 32px; left: 38px; color: #fff">
                            <span style="background-color: #fff; width: 26px; height: 26px; border-radius: 100%; color: #015eff; display: inline-flex; align-items: center; justify-content: center; font-weight: bolder; font-size: 18px">E</span>
                            <span class="uk-margin-small-left" style="font-size: 14px;font-weight: bolder; ">EFA</span>
                            <span style="font-size: 14px; font-weight: bolder; color: #87c0ff">Fullfill</span>
                        </div>
                    </div>
                    <div class="uk-width-expand" style="position: relative">
                        <component :is="tabs[currentTab]"></component>
                        <div style="position: absolute; top: 29px; right: 38px; color: #fff">
                            <span class="uk-margin-small-left" style="font-size: 13px; font-weight: 500; color: #a1a1a9">Having Troubles? </span>
                            <a href="/test" class="uk-button uk-button-text" style="font-size: 13px; font-weight: 800; color: #2366db">Get Help</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
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
.checked {
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
        left: 90px;
        border-radius: 100%;
        opacity: 0.7;
    }
    100% {
        transform: scale(1330);
        bottom: 0;
        left: 0;
        border-radius: 40%;
        opacity: 1;
    }
}
</style>
