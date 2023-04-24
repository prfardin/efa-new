<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'
import PrGrid from '@bc/core/grid.vue'

const { t } = useI18n();

</script>

<template>
    <form class="uk-form-stacked pr-auth-width-large">
        <pr-grid small class="uk-flex-bottom">
            <div class="uk-width-expand">
                <label class="uk-form-label pr-auth-form-label" for="mobile">{{ t('auth.register.mobile') }} <pr-icon class="pr-auth-form-helper" icon="question" :ratio="0.5"></pr-icon></label>
                <div class="pr-auth-form-group pr-auth-form-group-small uk-text-left">
                    <div>
                        <input class="pr-auth-input pr-auth-input-phone-code pr-direction-ltr uk-input uk-form-small uk-text-center" type="text" value="+98">
                    </div>
                    <div class="uk-width-1-1">
                        <input class="pr-auth-input pr-direction-ltr uk-input uk-form-small" autofocus id="mobile" name="mobile" type="text">
                    </div>
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
