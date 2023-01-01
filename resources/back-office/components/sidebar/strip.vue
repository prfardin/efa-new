<script setup lang="ts">
import PrLink from '@bc/core/link.vue'
import PrNav from '@bc/core/nav.vue'

</script>

<template>
    <div class="pr-sidebar-strip uk-position-z-index">
        <div class="pr-logo-area uk-flex uk-flex-top uk-flex-center">
            <span uk-icon="user" style="color: white;border-radius: 100%;background: radial-gradient(#9adefe 0%, #03a9f4 50%);width: 44px;height: 44px;display: flex;align-items: center;justify-content: center;"></span>
        </div>
        <div class="pr-sidebar-strip-container">
            <nav>
                <pr-nav>
                    <li><pr-link to="/about" icon="create-dashboard" /></li>
                    <li><pr-link to="/about" icon="comments-alt" /></li>
                    <li><pr-link to="/about" icon="calendar-alt" /></li>
                    <li><pr-link to="/about" icon="desktop-cloud-alt" /></li>
                    <li><pr-link to="/about" icon="users-alt" /></li>
                    <li><pr-link to="/about" icon="chart-pie-alt" uk-tooltip="title: داشبورد; pos: left; offset: 3;duration: 200" /></li>
                </pr-nav>
                <div class="line" style="top: 5px; transform: translate(-50%, 0px); left: 50%; width: 42px; height: 42px; z-index: -1; border-radius: 8px; background: rgb(255, 255, 255);"></div>
            </nav>
        </div>
    </div>
</template>
