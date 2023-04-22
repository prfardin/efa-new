<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { Element, heightViewport } from "@bs/scripts/util/util";

import Register from '@bv/Auth/Register.vue'
import Verify from '@bv/Auth/Verify.vue'
import Password from '@bv/Auth/Password.vue'
import Type from '@bv/Auth/Type.vue'
import PrButton from '@bc/core/button.vue'
import PrLink from '@bc/core/link.vue'
import PrIcon from '@bc/core/icon.vue'
import PrGrid from '@bc/core/grid.vue'
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

const el = ref<Element>(null);
onMounted(()=> {
    heightViewport(el.value, { "offset-top": true });
})
</script>

<template>
    <div class="uk-section pr-auth-section pr-auth-section-muted uk-flex uk-flex-middle" ref="el">
        <div class="uk-width-1-1">
            <div class="uk-container uk-container-small">
                <pr-grid class="pr-auth-background-muted pr-auth-height" collapse match>
                    <div class="pr-auth-side uk-width-1-3@m" :class="!rippleSet ? 'uk-light pr-light' : ''">
                        <div class="pr-auth-logo-container uk-width-auto">
                            <span class="pr-auth-logo-icon">E</span>
                            <span>EFA </span>
                            <span class="uk-text-muted">SERVICE</span>
                        </div>
                        <div v-if="!rippleSet" class="uk-tile pr-auth-tile pr-auth-tile-primary uk-flex uk-flex-top">
                            <div>
                                <h3 class="uk-text-bold">{{ t('auth.side.header') }}</h3>
                                <p class="pr-margin-medium-top uk-text-muted uk-text-small">{{ t('auth.side.comment_1') }}<br />{{ t('auth.side.comment_2') }}</p>
                            </div>
                            <picture>
                                <source type="image/webp" :srcset="Board">
                                <img class="pr-auth-side-icon-board" :src="Board" alt="" loading="eager">
                            </picture>
                        </div>
                        <div v-else class="uk-tile pr-auth-tile pr-auth-tile-default pr-auth-background-default uk-flex uk-flex-top pr-auth-tile-has-list">
                            <ul class="uk-list pr-auth-list uk-width-1-1 uk-margin-remove">
                                <li class="pr-complete">
                                    <pr-link to="#">
                                        <pr-icon icon="line-check" ratio="0.75"></pr-icon>
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
                            <picture>
                                <source type="image/webp" :srcset="Map">
                                <img class="pr-auth-side-icon-map" :src="Map" alt="" loading="eager">
                            </picture>
                        </div>
                    </div>
                    <div class="pr-auth-container uk-width-expand@m">
                        <div class="pr-auth-helper-container uk-width-auto">
                            <span>{{ t('auth.helper_text') }}</span>
                            <pr-button to="/" text>{{ t('auth.get_help') }}</pr-button>
                        </div>
                        <component :is="tabs[currentTab]"></component>
                    </div>
                </pr-grid>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.uk-checkbox {
    border: 1px solid #ededf2;
}
.uk-checkbox:checked {
    background-color: rgb(2, 96, 255);
    border: 1px solid #ededf2;
}
.uk-checkbox:focus {
    background-color: #ffffff;
    border: 1px solid #ededf2;
}
.uk-checkbox:checked {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOS44Mzk4NCwxNy4wODAwOGEuOTk2NzYuOTk2NzYsMCwwLDEtLjcwNy0uMjkzTDUuMjkzLDEyLjk0NzI3QS45OTk4OS45OTk4OSwwLDEsMSw2LjcwNywxMS41MzMyTDkuODM5ODQsMTQuNjY2LDE3LjI5Myw3LjIxMjg5QS45OTk4OS45OTk4OSwwLDAsMSwxOC43MDcsOC42MjdsLTguMTYwMTUsOC4xNjAxNkEuOTk2OC45OTY4LDAsMCwxLDkuODM5ODQsMTcuMDgwMDhaIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+");
    color: #fff;
}
</style>
