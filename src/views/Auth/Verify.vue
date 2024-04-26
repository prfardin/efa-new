<script setup lang="ts">
import PrButton from '@c/core/button.vue'
import PrIcon from '@c/core/icon.vue'
import {onMounted, ref, watch} from "vue";
import {useRouter, useRoute} from "vue-router";
import axios from "axios";
import {useI18n} from "vue-i18n";
import PrInput from "../../components/core/form/input.vue";
import PrGrid from "../../components/core/grid.vue";

interface Test {
    mobile?: string
}
const props = defineProps<Test>()

const router = useRouter()

onMounted(() => {
    // if (props.mobile === undefined)
    //     router.push({ name: 'register' })
})

const { t } = useI18n()

</script>

<template>
    <form class="uk-form-stacked pr-auth-width-large">
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
        <pr-grid small collapse class="uk-flex-bottom">
            <div class="uk-width-expand">
                <div uk-grid class="uk-grid-small" style="margin-top: 4px; margin-bottom: 6px">
                    <div class="uk-width-expand">
                        <pr-input id="mobile" name="mobile" small cls="pr-auth-input pr-direction-ltr uk-input uk-form-small uk-text-center" class="uk-width-1-1" />
                    </div>
                    <div class="uk-width-auto">
                        <pr-button
                            class="pr-auth-button-primary"
                            to="/register/password"
                            primary
                            small
                            square
                            icon="arrow-right"
                            ratio="0.8"
                            icon-flip
                            spinner-mod="circle"
                        >{{ t('auth.register.submit') }}</pr-button>
                    </div>
                </div>
            </div>
        </pr-grid>
    </form>
</template>
