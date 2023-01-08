<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'

</script>

<template>
    <form action="">
        <div uk-grid class="uk-grid-small" style="margin-top: 4px; margin-bottom: 6px">
            <div class="uk-width-expand" style="position: relative">
                <input class="uk-input input uk-form-small" type="text" style="border-right: none; height: 36px; width: 40px;text-align: center" value="+98">
                <span style="position: absolute; height: 20px; border-right: 1px solid #ededf2; transform: translate(0, -50%); top: 50%"></span>
                <input class="uk-input input uk-form-small" type="text" style="border-left: none; height: 36px; width: 210px">
            </div>
            <div class="uk-width-auto">
                <pr-button to="step=3" primary small square style="line-height: 34px; color: #fefefe;background-color: #0260ff">
                    <span style="margin-right: 4px">Get Started</span>
                    <pr-icon icon="arrow-right" :ratio="0.8" />
                </pr-button>
            </div>
        </div>
    </form>
</template>

<style lang="less">

</style>
