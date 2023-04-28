<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"

import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'
import PrGrid from '@bc/core/grid.vue'
import PrInput from '@bc/core/form/input.vue'
import PrLabel from '@bc/core/form/label.vue'

// define input models
const code = ref('+98')
const mobile = ref(null)

const { t } = useI18n()

</script>

<template>
    <form class="uk-form-stacked pr-auth-width-large">
        <pr-grid small class="uk-flex-bottom">
            <div class="uk-width-expand">
                <pr-label for="mobile" class="pr-auth-form-label" icon="question" :ratio="0.5" icon-class="pr-auth-form-helper">{{ t('auth.register.mobile') }}</pr-label>
                <div class="pr-auth-form-group pr-auth-form-group-small uk-text-left">
                    <pr-input v-model="code" name="code" small cls="pr-auth-input pr-auth-input-phone-code pr-direction-ltr uk-text-center" />
                    <pr-input v-model="mobile" id="mobile" name="mobile" small cls="pr-auth-input pr-direction-ltr uk-input uk-form-small" class="uk-width-1-1" />
                </div>
            </div>
            <div class="uk-width-auto">
                <pr-button to="/" primary small square style="line-height: 34px; color: #fefefe; background-color: #0260ff; display: flex; align-items: center; justify-content: center; min-width: 128px">
                    <div v-if="false" style="line-height: 34px" uk-spinner="ratio: 0.8"></div>
                    <span style="margin-right: 4px">{{ t('auth.register.submit') }}</span>
                    <pr-icon icon="arrow-right" :ratio="0.8" />
                </pr-button>
            </div>
        </pr-grid>
        <input id="test" checked class="pr-auth-form-input uk-checkbox" type="checkbox" value="">
        <label for="test" style="font-size: 12px; margin-top: 6px; display: inline-block">
            <span class="pr-margin-xsmall-left"> {{ t('auth.terms_and_privacy') }} <a href="#">{{ t('auth.terms') }}</a> and <a href="#">{{ t('auth.privacy') }}</a></span>
        </label>
    </form>
</template>

<style lang="less">
.pr-disabled {
    pointer-events: none;
    opacity: 0.5;
}
</style>
