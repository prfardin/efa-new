<script setup lang="ts">
import PrButton from '@c/core/button.vue'
import PrIcon from '@c/core/icon.vue'
import {computed, onMounted, ref, watch} from "vue";
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

// a computed ref
function publishedPasswordMessage() {
    return password.value ? 'ذخیره رمز عبور' : 'نیاز به رمز عبور ندارم'
}

</script>

<template>
    <div class="uk-height-1-1 uk-tile uk-tile-default uk-flex uk-flex-left uk-flex-top" style="background-color: #f5f6f9; padding-bottom: 10px">
        <div class="anim-out">
            <div>
                <h3 class="uk-h5" style="font-weight: 700; color: #464964; font-size: 26px; margin-bottom: 0">همین حالا شروع کن.</h3>
                <p style="font-size: 13px; color: #909096; margin-top: 10px">ثبت نام و شروع فعالیت در ایفا فقط در چند مرحله ساده,<br />برای شروع شماره تماس رو وارد کن.</p>
            </div>
            <div style="margin-top: 44px">
                <label style="color: #6e6f75; font-size: 12px">
                    <span>رمز عبور</span>
                </label>
                <div class="uk-flex-middle uk-grid-collapse" uk-grid>
                    <div class="uk-width-expand">
                        <div uk-grid class="uk-grid-small uk-flex-bottom" style="margin-top: 4px; margin-bottom: 6px">
                            <div class="uk-width-expand">
                                <div style="position: relative">
                                    <input v-model="password" ref="passwordRef" name="password" autofocus class="uk-input input uk-form-small verify" type="password" style="height: 36px; width: 250px;">
                                </div>
                                <label style="color: #6e6f75; font-size: 12px">
                                    <span>تکرار رمز عبور</span>
                                </label>
                                <div style="position: relative;">
                                    <input ref="repeatPasswordRef" @keyup.enter="router.push({query: { step: 'Type'}})" v-model="repeatPassword" name="repeat_password" class="uk-input input uk-form-small verify" type="password" style="height: 36px; width: 250px; margin-top: 4px">
                                </div>
                            </div>
                            <div class="uk-width-auto">
                                <pr-button :class="{'pr-disabled' : password !== repeatPassword}" to="?step=Type" primary small square style="line-height: 34px; color: #fefefe;background-color: #0260ff; display: flex; align-items: center;justify-content: center; min-width: 128px">
                                    <div v-if="loader" style="line-height: 34px" uk-spinner="ratio: 0.8"></div>
                                    <span v-if="!loader" style="margin-left: 4px">{{ publishedPasswordMessage() }}</span>
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
