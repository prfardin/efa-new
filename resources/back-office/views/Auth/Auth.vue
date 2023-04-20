<script setup lang="ts">
import Register from '@bv/Auth/Register.vue'
import Verify from '@bv/Auth/Verify.vue'
import Password from '@bv/Auth/Password.vue'
import Type from '@bv/Auth/Type.vue'
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import PrLink from '@bc/core/link.vue'
import PrIcon from '@bc/core/icon.vue'
import Board from '@bi/auth/board.svg'
import Map from '@bi/auth/map.svg'

const { t } = useI18n();

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
    <div class="uk-section pr-auth-section pr-auth-section-muted uk-flex uk-flex-middle" uk-height-viewport="offset-top: true">
        <div class="uk-width-1-1">
            <div class="uk-container uk-container-small">
                <div class="pr-auth-background-muted pr-auth-height uk-grid-collapse uk-grid-match" uk-grid>
                    <div class="pr-auth-side uk-width-1-3@m" :class="!rippleSet ? 'uk-light' : ''">
<!--                        <div ref="ripple" :class="[ setRipple ? 'ripple' : '']"></div>-->
                        <div v-if="!rippleSet" class="uk-tile pr-auth-tile pr-auth-tile-primary pr-auth-back-board uk-flex uk-flex-top" :data-src="Board" uk-img="loading: eager">
                            <div>
                                <h3 class="uk-text-bold">{{ t('auth.side.header') }}</h3>
                                <p class="pr-margin-medium-top uk-text-muted uk-text-small">{{ t('auth.side.comment_1') }}<br />{{ t('auth.side.comment_2') }}</p>
                            </div>
                        </div>
                        <div v-else class="uk-tile pr-auth-tile pr-auth-tile-default pr-auth-back-default uk-flex uk-flex-top pr-auth-tile-has-list">
                            <div class="pr-auth-back-icon" :data-src="Map" uk-img="loading: eager"></div>
                            <ul class="uk-list pr-auth-list uk-width-1-1 uk-margin-remove">
                                <li class="pr-complete">
                                    <pr-link to="#">
                                        <pr-icon icon="line-check" ratio="0.8"></pr-icon>
                                        <span>{{ t('auth.step.one') }}</span>
                                    </pr-link>
                                </li>
                                <li class="uk-active">
                                    <pr-link to="#">
                                        <span>2</span>
                                        <span>{{ t('auth.step.two') }}</span>
                                        <pr-icon icon="line-arrow-right"></pr-icon>
                                    </pr-link>
                                </li>
                                <li>
                                    <pr-link to="#">
                                        <span>3</span>
                                        <span>{{ t('auth.step.three') }}</span>
                                    </pr-link>
                                </li>
                                <li>
                                    <pr-link to="#">
                                        <span>4</span>
                                        <span>{{ t('auth.step.four') }}</span>
                                    </pr-link>
                                </li>
                                <li>
                                    <pr-link to="#">
                                        <span>5</span>
                                        <span>{{ t('auth.step.five') }}</span>
                                    </pr-link>
                                </li>
                            </ul>
                        </div>
                        <div v-if="!rippleSet" style="position: absolute; top: 32px; left: 35px; color: #fff">
                            <span style="background-color: #fff; width: 26px; height: 26px; border-radius: 100%; color: #015eff; display: inline-flex; align-items: center; justify-content: center; font-weight: bolder; font-size: 18px">E</span>
                            <span style="margin-left: 6px;font-size: 14px;font-weight: 900; ">EFA </span>
                            <span style="font-size: 14px; font-weight: 900; color: #87c0ff">SERVICE</span>
                        </div>
                        <div v-else style="position: absolute; top: 32px; left: 35px; color: #fff">
                            <span style="background-color: #005fff; width: 26px; height: 26px; border-radius: 100%; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-weight: bolder; font-size: 18px">E</span>
                            <span style="margin-left: 6px;color: #494c5e; font-size: 14px;font-weight: bolder; ">EFA </span>
                            <span style="font-size: 14px; font-weight: bolder; color: #c2c4c9">SERVICE</span>
                        </div>
                    </div>
                    <div class="uk-width-expand@m" style="position: relative">
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
