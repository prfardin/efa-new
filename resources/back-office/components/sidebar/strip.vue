<script setup lang="ts">
import PrButton from '@bc/core/button.vue'

</script>

<template>
    <div class="pr-sidebar-strip" style="z-index: 1">
        <div class="pr-logo-area uk-flex uk-flex-top uk-flex-center">
            <span uk-icon="user" style="color: white;border-radius: 100%;background-color: #03a9f4;width: 44px;height: 44px;display: flex;align-items: center;justify-content: center;"></span>
        </div>
        <div class="pr-sidebar-strip-container">
            <nav>
                <ul uk-nav>
                    <li>
                        <pr-button icon="dashboard" to="/about" />
<!--                        <a href="#" uk-icon="dashboard"></a>-->
                    </li>
                    <li>
                        <a href="#" uk-icon="comments-alt"></a>
                    </li>
                    <li>
                        <a href="#" uk-icon="calendar-alt"></a>
                    </li>
                    <li>
                        <a href="#" uk-icon="desktop-cloud-alt"></a>
                    </li>
                    <li>
                        <a href="#" uk-icon="users-alt"></a>
                    </li>
                    <li>
                        <a href="#" uk-tooltip="title: داشبورد; pos: left; offset: 3;duration: 200" uk-icon="chart-pie-alt"></a>
                    </li>
                </ul>
                <div class="line" style="top: 5px; transform: translate(-50%, 0px); left: 50%; width: 42px; height: 42px; z-index: -1; border-radius: 8px; background: rgb(255, 255, 255);"></div></nav>
        </div>
    </div>
</template>
