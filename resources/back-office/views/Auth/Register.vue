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

const focused = ref(false);

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
    <div class="uk-tile pr-auth-tile-muted pr-auth-tile-xlarge uk-flex uk-flex-top">
        <div class="uk-width-1-1">
            <h2 class="pr-auth-heading uk-margin-remove-bottom">{{ t('auth.register.header') }}</h2>
            <p class="uk-margin-small-top">{{ t('auth.register.comment_1') }}<br />{{ t('auth.register.comment_2') }}</p>
            <div class="uk-margin-medium-top">
                <form class="uk-form-stacked pr-auth-width-large">
                    <div class="uk-grid-small uk-flex-bottom" uk-grid>
                        <div class="uk-width-expand">
                            <label class="uk-form-label pr-auth-form-label" for="mobile">{{ t('auth.register.mobile') }} <pr-icon class="pr-auth-form-helper" icon="question" ratio="0.5"></pr-icon></label>
                            <div class="pr-auth-form-group pr-auth-form-group-small uk-text-left" :class="{'pr-focused': focused}">
                                <div>
                                    <input class="pr-auth-input pr-auth-input-phone-code pr-direction-ltr uk-input uk-form-small uk-text-center" type="text" value="+98">
                                </div>
                                <div class="uk-width-1-1">
                                    <input class="pr-auth-input pr-direction-ltr uk-input uk-form-small" autofocus v-model="mobile" id="mobile" name="mobile" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-auto">
                            <pr-button :class="{'pr-disabled' : mobile.length !== 11 && mobile.length !== 10}" :to="`?step=Verify&mobile=${mobile}`" primary small square style="line-height: 34px; color: #fefefe; background-color: #0260ff; display: flex; align-items: center; justify-content: center; min-width: 128px">
                                <div v-if="loader" style="line-height: 34px" uk-spinner="ratio: 0.8"></div>
                                <span v-if="!loader" style="margin-right: 4px">{{ t('auth.register.submit') }}</span>
                                <pr-icon v-if="!loader" icon="arrow-right" :ratio="0.8" />
                            </pr-button>
                        </div>
                    </div>
                </form>
                <label style="font-size: 12px; margin-top: 6px; display: inline-block">
                    <input checked class="pr-auth-form-input uk-checkbox" type="checkbox" value="">
                    <span class="pr-margin-xsmall-left"> {{ t('auth.terms_and_privacy') }} <a href="#">{{ t('auth.terms') }}</a> and <a href="#">{{ t('auth.privacy') }}</a></span>
                </label>
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
