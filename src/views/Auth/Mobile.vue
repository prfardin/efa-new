<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"

import PrButton from '@c/core/button.vue'
import PrGrid from '@c/core/grid.vue'
import PrInput from '@c/core/form/input.vue'
import PrLabel from '@c/core/form/label.vue'

// define input models
const code = ref('+98')
const mobile = ref(null)

const { t } = useI18n()

const loader = ref(false)

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
                <pr-button
                    class="pr-auth-button-primary"
                    to="/register/verify"
                    primary
                    small
                    square
                    icon="arrow-right"
                    :ratio="0.8"
                    icon-flip
                    :spinner="loader"
                    @click="loader = true"
                    spinner-mod="circle"
                >{{ t('auth.register.submit') }}</pr-button>
            </div>
        </pr-grid>
        <div class="pr-margin-xsmall-top">
            <pr-label for="test" class="pr-auth-form-label">
                <input id="test" checked class="pr-auth-form-input uk-checkbox pr-margin-xsmall-right" type="checkbox" value=""> {{ t('auth.terms_and_privacy') }} <a href="#">{{ t('auth.terms') }}</a> and <a href="#">{{ t('auth.privacy') }}</a></pr-label>
        </div>
    </form>
</template>

<style lang="less">
.pr-disabled {
    pointer-events: none;
    opacity: 0.5;
}
</style>
