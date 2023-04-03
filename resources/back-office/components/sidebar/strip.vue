<script setup lang="ts">
import PrLink from '@bc/core/link.vue'
import PrIcon from '@bc/core/icon.vue'
import PrNav from '@bc/core/nav.vue'
import Avatar from '@bi/avatar.png'

</script>

<template>
    <div class="pr-sidebar-strip uk-position-z-index">
        <div class="pr-sidebar-strip-header uk-flex uk-flex-top uk-flex-center">
            <span class="pr-sidebar-strip-header-wrapper">
                <span class="pr-sidebar-header-line"></span>
                <span class="pr-sidebar-header-container">
                    <img :src="Avatar" alt="avatar">
                    <span class="pr-sidebar-header-placeholder"></span>
                    <span class="pr-sidebar-header-letter">F</span>
                </span>
                <span class="pr-sidebar-header-status"></span>
            </span>
        </div>
        <div class="pr-sidebar-strip-container">
            <nav>
                <pr-nav>
                    <li><pr-link to="/about" icon="line-search" :ratio="0.7" /></li>
                    <li><pr-link to="/about" icon="star" :ratio="0.7" class="pr-icon-favourite" /></li>
                    <li><pr-link to="/about" icon="create-dashboard" :ratio="0.8" /></li>
                    <li><pr-link to="/about" icon="folder-minus" class="uk-light" :ratio="0.8" /></li>
                    <li>
                        <pr-link to="/about" icon="compass" :ratio="0.8" class="pr-item-has-notification" />
                    </li>
                    <li style="position: relative">
                        <pr-link to="/about" icon="bell" :ratio="0.8" />
                        <span style="position: absolute; top: 3px; right: 38px; box-sizing: border-box; width: 16px; height: 16px; background-color: rgb(254, 117, 75); border-radius: 100%; border: 2px solid rgb(255, 255, 255); font-size: 7px; color: rgb(255, 255, 255); text-align: center; padding: 2px 4px;">2</span>
                    </li>
                    <li><pr-link to="/about" icon="notebooks" :ratio="0.8" /></li>
                    <li><pr-link to="/about" icon="bag" :ratio="0.8" uk-tooltip="title: داشبورد; pos: right; offset: 3;duration: 200" /></li>
                    <li class="uk-nav-divider" style="margin: 16px 12px !important;"></li>
                    <li style="margin-top: 28px;">
                        <pr-link to="/about">
                            <pr-icon style="background: rgb(255, 255, 255); box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);width: 28px; height: 28px; border-radius: 8px" icon="file-alt" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="margin-top: -10px" to="/about" icon="angle-down" :ratio="0.8" />
                    </li>
                    <li style="margin-top: 18px;">
                        <pr-link to="/about" icon="plus" :ratio="0.7" class="uk-light" />
                    </li>
                </pr-nav>
                <div class="line" style="top: 0; transform: translate(50%, 0px); right: 50%; width: 36px; height: 36px; z-index: -1; border-radius: 10px; background: #f0f4f7;"></div>
                <div class="line" style="top: 128px; transform: translate(50%, 0px); right: 50%; width: 36px; height: 36px; z-index: -1; border-radius: 10px; background: #2785ff;"></div>
                <div class="line" style="top: 382px; transform: translate(50%, 0px); right: 50%; width: 40px; height: 60px; z-index: -1; border-radius: 10px; background: rgb(255, 255, 255); box-shadow: 0 13px 20px rgba(0, 0, 0, 0.1);"></div>
                <div class="line" style="top: 462px; transform: translate(50%, 0px); right: 50%; width: 36px; height: 36px; z-index: -1; border-radius: 100%; background: #2785ff;"></div>
            </nav>
        </div>
    </div>
</template>
