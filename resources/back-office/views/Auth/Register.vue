<script setup lang="ts">
import PrIcon from '@bc/core/icon.vue'

</script>

<template>
    <div class="uk-section uk-section-default" style="padding-top: 57px; padding-bottom: 57px; background: linear-gradient(0deg, #d2dbe7, #dfe3ef)">
        <div class="uk-container" style="max-width: 896px">
            <div class="uk-width-1-1">
                <div uk-height-viewport="expand: true" class="uk-grid-collapse uk-grid-item-match" uk-grid>
                    <div class="uk-width-1-3" style="position: relative; width: 310px;">
                        <div class="uk-height-1-1 uk-tile uk-tile-primary uk-tile-large uk-flex uk-flex-top back" style="background-color: #015eff">
                            <div>
                                <h3 class="uk-h3" style="color: #fdfdff; font-weight: 700; font-size: 26px">A few clicks away from creating your company.</h3>
                                <p style="color: #87c0ff; margin-top: 24px; font-size: 15px">Start your company in minutes.<br />Save time and money.</p>
                            </div>
                        </div>
                        <div style="position: absolute; top: 32px; left: 38px; color: #fff">
                            <span style="background-color: #fff; width: 26px; height: 26px; border-radius: 100%; color: #015eff; display: inline-flex; align-items: center; justify-content: center; font-weight: bolder; font-size: 18px">E</span>
                            <span class="uk-margin-small-left" style="font-size: 14px;font-weight: bolder; ">EFA</span>
                            <span style="font-size: 14px; font-weight: bolder; color: #87c0ff">Fullfill</span>
                        </div>
                    </div>
                    <div class="uk-width-expand" style="position: relative">
                        <div class="uk-height-1-1 uk-tile uk-tile-default uk-flex uk-flex-left uk-flex-top" style="background-color: #f5f6f9">
                            <div>
                                <div>
                                    <h3 class="uk-h5" style="font-weight: 700; color: #464964; font-size: 26px; margin-bottom: 0">Start your business now.</h3>
                                    <p style="font-size: 13px; color: #909096; margin-top: 10px">Creating your company in US is just few steps away,<br />Enter your email address to continue.</p>
                                </div>
                                <div style="margin-top: 44px">
                                    <label style="color: #6e6f75; font-size: 12px">Phone Number</label>
                                    <div class="uk-flex-middle uk-grid-collapse" uk-grid>
                                        <div class="uk-width-expand">
                                            <form action="">
                                                <div uk-grid class="uk-grid-small" style="margin-top: 4px">
                                                    <div class="uk-width-expand">
                                                        <input class="uk-input input uk-form-small" type="text" style="height: 36px;width: 250px">
                                                    </div>
                                                    <div class="uk-width-auto">
                                                        <button class="uk-button uk-button-primary uk-button-small uk-button-square" style="min-height: 34px; color: #fefefe;background-color: #0260ff" type="submit">
                                                            <span style="margin-right: 4px">Get Started</span>
                                                            <pr-icon icon="arrow-right" ratio="0.8" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; top: 29px; right: 38px; color: #fff">
                            <span class="uk-margin-small-left" style="font-size: 13px; font-weight: 500; color: #a1a1a9">Having Troubles? </span>
                            <a href="/test" class="uk-button uk-button-text" style="font-size: 13px; font-weight: 800; color: #2366db">Get Help</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.uk-h3 {
    line-height: 1.3;
}
.uk-tile {
    padding-top: 190px;
    padding-bottom: 190px;
    padding-left: 70px;
    padding-right: 70px;
}
.uk-tile-large {
    padding-top: 162px;
    padding-bottom: 162px;
    padding-left: 38px;
    padding-right: 38px;
}
.back {
    background-image: url("./board.svg");
    background-repeat: no-repeat;
    background-position: 111% 92%;
    background-size: 96px;
}
.uk-card-default {
    background-color: #fff;
    margin-top: 44px;
    border-radius: 10px;
    width: 373px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.02);
}
.uk-card-body.uk-card-small {
    padding-left: 24px;
    padding-right: 24px;
}
.pr-icon-primary {
    color: #075cf0;
}
.pr-icon-tertiary {
    color: #9fbdf9;
}
.input {
    background-color: #ffffff;
    border: 1px solid #ededf2;
}
</style>
