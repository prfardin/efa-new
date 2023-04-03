<script setup lang="ts">
import PrLink from '@bc/core/link.vue'
import PrIcon from '@bc/core/icon.vue'
import PrNav from '@bc/core/nav.vue'
import Avatar from '@bi/avatar.png'

</script>

<template>
    <div class="pr-sidebar-strip uk-position-z-index">
        <div class="pr-sidebar-strip-header uk-flex uk-flex-top uk-flex-center">
            <span style="padding: 6px; border: 1px solid #e5ebf3; border-radius: 20px; position: relative">
                <span style="position:absolute; top: 50%; left: -1px; transform: translate(0, -50%); width: 2px; height: 14px; background-color: #0e6dcd; border-radius: 10px"></span>
                <span style="overflow: hidden;position: relative; border-radius: 15px;background: #f9eee8; width: 40px;height: 40px;display: flex;align-items: center;justify-content: center;">
                    <img :src="Avatar" alt="avatar">
                    <span style="position: absolute;right: -23px;width: 50px;height: 40px;background-color: rgb(17, 17, 17);border-radius: 165%;bottom: -21px;transform: rotate(-127deg);"></span>
                    <span style="position: absolute; right: -26px; width: 40px; height: 40px; bottom: -20px; color: rgb(255, 255, 255); font-size: 12px; font-weight: 700;">F</span>
                </span>
                <span style="position: absolute; top: 2px; right: 2px; width: 6px; height: 6px; background-color: #6fcf96; border-radius: 100%"></span>
            </span>
        </div>
        <div class="pr-sidebar-strip-container">
            <nav>
                <pr-nav>
                    <li><pr-link to="/about" icon="line-search" :ratio="0.7" /></li>
                    <li><pr-link to="/about" icon="star" :ratio="0.7" class="pr-icon-favourite" /></li>
                    <li><pr-link to="/about" icon="create-dashboard" :ratio="0.8" /></li>
                    <li><pr-link to="/about" icon="folder-minus" class="uk-light" :ratio="0.8" /></li>
                    <li style="position: relative">
                        <pr-link to="/about" icon="compass" :ratio="0.8" />
                        <span style="position: absolute; top: 8px; left: 42px; box-sizing: border-box; width: 8px; height: 8px; background-color: #fe754b; border-radius: 100%; border: 2px solid #fff"></span>
                    </li>
                    <li style="position: relative">
                        <pr-link to="/about" icon="bell" :ratio="0.8" />
                        <span style="position: absolute; top: 3px; left: 38px; box-sizing: border-box; width: 16px; height: 16px; background-color: rgb(254, 117, 75); border-radius: 100%; border: 2px solid rgb(255, 255, 255); font-size: 7px; color: rgb(255, 255, 255); text-align: center; padding: 1px 4px;">2</span>
                    </li>
                    <li><pr-link to="/about" icon="notebooks" :ratio="0.8" /></li>
                    <li><pr-link to="/about" icon="bag" :ratio="0.8" uk-tooltip="title: داشبورد; pos: left; offset: 3;duration: 200" /></li>
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
                <div class="line" style="top: 0; transform: translate(-50%, 0px); left: 50%; width: 36px; height: 36px; z-index: -1; border-radius: 10px; background: #f0f4f7;"></div>
                <div class="line" style="top: 128px; transform: translate(-50%, 0px); left: 50%; width: 36px; height: 36px; z-index: -1; border-radius: 10px; background: #2785ff;"></div>
                <div class="line" style="top: 382px; transform: translate(-50%, 0px); left: 50%; width: 40px; height: 60px; z-index: -1; border-radius: 10px; background: rgb(255, 255, 255); box-shadow: 0 13px 20px rgba(0, 0, 0, 0.1);"></div>
                <div class="line" style="top: 462px; transform: translate(-50%, 0px); left: 50%; width: 36px; height: 36px; z-index: -1; border-radius: 100%; background: #2785ff;"></div>
            </nav>
        </div>
    </div>
</template>
