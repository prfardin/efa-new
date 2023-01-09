<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";

const password = ref('')
const repeatPassword = ref('')
const repeatPasswordRef = ref('')
const passwordRef = ref<HTMLElement>(null)
const loader = ref(false)
const router = useRouter()

onMounted(() => {
    passwordRef.value.focus()
})

</script>

<template>
    <div class="uk-height-1-1 uk-tile uk-tile-default uk-flex uk-flex-left uk-flex-top" style="background-color: #f5f6f9; padding-bottom: 10px">
        <div>
            <div>
                <h3 class="uk-h5" style="font-weight: 700; color: #464964; font-size: 26px; margin-bottom: 0">Start your business now.</h3>
                <p style="font-size: 13px; color: #909096; margin-top: 10px">Creating your company in US is just few steps away,<br />Enter your email address to continue.</p>
            </div>
            <div style="margin-top: 44px">
                <label style="color: #6e6f75; font-size: 12px">
                    <span>Password</span>
                </label>
                <div class="uk-flex-middle uk-grid-collapse" uk-grid>
                    <div class="uk-width-expand">
                        <div uk-grid class="uk-grid-small uk-flex-bottom" style="margin-top: 4px; margin-bottom: 6px">
                            <div class="uk-width-expand">
                                <div style="position: relative">
                                    <input v-model="password" ref="passwordRef" name="password" autofocus class="uk-input input uk-form-small verify" type="password" style="height: 36px; width: 250px;">
                                </div>
                                <label style="color: #6e6f75; font-size: 12px">
                                    <span>Repeat Password</span>
                                </label>
                                <div style="position: relative;">
                                    <input ref="repeatPasswordRef" v-model="repeatPassword" name="repeat_password" class="uk-input input uk-form-small verify" type="password" style="height: 36px; width: 250px; margin-top: 4px">
                                </div>
                            </div>
                            <div class="uk-width-auto">
                                <pr-button :class="{'pr-disabled' : password !== repeatPassword}" to="?step=Type" primary small square style="line-height: 34px; color: #fefefe;background-color: #0260ff; display: flex; align-items: center;justify-content: center; min-width: 128px">
                                    <div v-if="loader" style="line-height: 34px" uk-spinner="ratio: 0.8"></div>
                                    <span v-if="!loader" style="margin-right: 4px">Dont Want Password</span>
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
