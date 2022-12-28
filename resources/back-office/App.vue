<script setup lang="ts">
import Sidebar from './components/sidebar/sidebar.vue'
import PrButton from '@bc/core/button.vue'
import PrIcon from '@bc/core/icon.vue'
</script>

<template>
    <sidebar />
    <div class="uk-section uk-height-1-1">
        <div class="uk-container uk-flex uk-flex-center">
            <div>
                <div class="uk-text-center">
                    <img class="uk-margin-auto" alt="Vue logo" src="@b/src/images/logo.png" />
                </div>
                <div>
                    <pr-button to="/" icon="dashboard" default active-class="uk-button-primary">{{ $t('Dashboard') }}</pr-button> |
                    <pr-button to="/about" icon="user" default active-class="uk-button-primary">Go to About</pr-button>
                    <pr-icon icon="dashboard" />
                </div>
            </div>
        </div>
    </div>
    <div class="uk-section uk-section-primary">
        <div class="uk-container">
            <div class="uk-text-center">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="less">

</style>
