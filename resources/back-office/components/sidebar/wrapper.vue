<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrLink from '@bc/core/link.vue'
import PrIcon from '@bc/core/icon.vue'
import PrNav from '@bc/core/nav.vue'
import Avatar from '@bi/avatar.png'

</script>

<template>
    <div class="pr-sidebar-wrapper uk-light" style="z-index: 1;">
        <a style="display: flex; align-items: center; justify-content: center; position: absolute;top: 60px;right: 0;width: 18px;height: 36px;background-color: rgb(50, 51, 53);border-radius: 12px 0 0 12px;"><pr-icon class="test2" icon="angle-left" :ratio="0.8"></pr-icon></a>
        <div class="pr-sidebar-wrapper-header uk-flex uk-flex-middle">
            <span style="padding: 6px; border: 1px solid transparent; border-radius: 20px; position: relative;background-color: #242527">
                <span style="position:absolute; top: 50%; left: -1px; transform: translate(0, -50%); width: 2px; height: 14px; background-color: #ffde6c; border-radius: 10px"></span>
                <span style="overflow: hidden; border-radius: 15px;background: #f9eee8; width: 40px;height: 40px;display: flex;align-items: center;justify-content: center;">
                    <img :src="Avatar" alt="avatar">
                </span>
            </span>
            <span class="uk-margin-left" style="position: relative; color: #ffffff">Fardin <span style="position: absolute; top: -2px; right: -8px; width: 7px; height: 7px; background-color: #6fcf96; border-radius: 100%"></span></span>
        </div>
        <div class="pr-sidebar-container">
            <nav>
                <pr-nav>
                    <li>
                        <pr-link style="color: #92959d; font-size: 12px" to="/about">
                            <pr-icon icon="line-search" :ratio="0.7"></pr-icon>
                            <span class="uk-margin-small-left">Search...</span>
                            <pr-icon class="pr-icon-favourite" icon="star" :ratio="0.7" style="position: absolute; right: 10px;"></pr-icon>
                        </pr-link>
                    </li>
                    <li class="uk-nav-header" style="font-size: 10px; padding: 10px 10px; color: #858687; margin-top: 14px">Overview</li>
                    <li style="margin-bottom: 7px">
                        <pr-link style="color: #bfbfbf;" to="/about">
                            <pr-icon icon="create-dashboard" :ratio="0.8"></pr-icon>
                            <span class="uk-margin-small-left">Dashboard</span>
                            <pr-icon icon="angle-down" :ratio="0.7" style="position: absolute; right: 10px;"></pr-icon>
                        </pr-link>
                    </li>
                    <li style="margin-bottom: 7px">
                        <pr-link style="color: #ffffff;" to="/about">
                            <pr-icon icon="folder-minus" :ratio="0.8"></pr-icon>
                            <span class="uk-margin-small-left">Project Board</span>
                        </pr-link>
                    </li>
                    <li style="margin-bottom: 7px">
                        <pr-link style="position: relative; color: #bfbfbf" to="/about">
                            <pr-icon icon="compass" :ratio="0.8"></pr-icon>
                            <span class="uk-margin-small-left">Feed</span>
                            <span style="position: absolute; top: 8px; left: 22px; box-sizing: border-box; width: 8px; height: 8px; background-color: #fe754b; border-radius: 100%; border: 2px solid #151719"></span>
                        </pr-link>
                    </li>
                    <li style="margin-bottom: 7px">
                        <pr-link style="position: relative; color: #bfbfbf" to="/about">
                            <pr-icon icon="bell" :ratio="0.8"></pr-icon>
                            <span class="uk-margin-small-left">Inbox</span>
                            <span style="position: absolute; right: 10px; box-sizing: border-box; width: 24px; height: 24px; background-color: rgb(254, 117, 75); border-radius: 100%; font-size: 10px; color: rgb(255, 255, 255); text-align: center; padding: 5px 4px;">2</span>
                            <span class="uk-icon uk-icon-image" style="position: absolute; right: 50px; border-radius: 100%; background-color: #e6e1dd" :style="{backgroundImage: `url(${Avatar})`}"></span>
                            <pr-icon class="pr-icon-favourite" icon="pen" :ratio="0.5" style="position: absolute; right: 74px;"></pr-icon>
                        </pr-link>
                    </li>
                    <li style="margin-bottom: 7px">
                        <pr-link style="position: relative; color: #bfbfbf" to="/about">
                            <pr-icon icon="notebooks" :ratio="0.8"></pr-icon>
                            <span class="uk-margin-small-left">Savings</span>
                            <pr-icon icon="plus" :ratio="0.6" style="position: absolute; right: 10px; box-sizing: border-box; width: 24px; height: 24px; background-color: #252628; border-radius: 100%; font-size: 10px; color: rgb(255, 255, 255); text-align: center; padding: 5px 4px;"></pr-icon>
                        </pr-link>
                    </li>
                    <li style="margin-bottom: 7px">
                        <pr-link style="position: relative; color: #bfbfbf" to="/about">
                            <pr-icon icon="bag" :ratio="0.8"></pr-icon>
                            <span class="uk-margin-small-left">Sales</span>
                            <span style="position: absolute; right: 17px; box-sizing: border-box; width: 8px; height: 8px; background-color: rgb(254, 117, 75); border-radius: 100%; font-size: 10px; color: rgb(255, 255, 255); text-align: center;"></span>
                        </pr-link>
                    </li>
                    <li class="uk-nav-divider" style="border-color: #252726; margin: 16px 0 !important;"></li>
                    <li class="uk-nav-header" style="font-size: 10px; padding: 10px 10px; color: #858687; margin-top: 14px; margin-bottom: 2px">Onboarding <span style="color: #fff">12</span></li>
                    <li style="margin-bottom: 7px; display: flex">
                        <pr-link style="position: relative; color: #bfbfbf; padding-left: 8px; padding-right: 4px" to="/about">
                            <pr-icon style="background: #3c4041; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);width: 26px; height: 26px; border-radius: 8px; display: flex; align-items: center;justify-content: center" icon="file-alt" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="position: relative; color: #bfbfbf;  padding-left: 8px; padding-right: 8px" to="/about">
                            <pr-icon icon="arrows-merge" :ratio="0.9"></pr-icon>
                        </pr-link>
                        <pr-link style="position: relative; color: #bfbfbf;  padding-left: 8px; padding-right: 8px" to="/about">
                            <pr-icon icon="user" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="position: relative; color: #bfbfbf;  padding-left: 8px; padding-right: 8px" to="/about">
                            <pr-icon icon="chart-pie-alt" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="position: relative; color: #bfbfbf;  padding-left: 8px; padding-right: 8px" to="/about">
                            <span style="position: absolute; top: 3px; left: -48px; box-sizing: border-box; width: 16px; height: 16px; background-color: #2884ff; border-radius: 100%; border: 2px solid #252628; font-size: 7px; color: rgb(255, 255, 255); text-align: center; padding: 1px 4px;">5</span>
                            <pr-icon icon="setting" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="position: absolute; color: #bfbfbf;  right: 4PX" to="/about">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 23.88 23.88">
                                <g>
                                    <path d="M1.6,6a11.94,11.94,0,0,0,0,11.94C1,13,3.92,9.22,6.88,9c2.74-.21,4.87,2.67,5.06,2.94.13-.3,1.56-3.58,0-5.85C10.26,3.64,5.54,2.94,1.6,6Z" fill="#ffcd03"/>
                                    <path d="M22.28,6A11.93,11.93,0,0,0,11.94,0C16.55,1.92,18.31,6.38,17,9c-1.19,2.47-4.76,2.87-5.08,2.9.19.26,2.32,3.14,5.06,2.93C20,14.64,22.93,10.9,22.28,6Z" fill="#ff5144"/>
                                    <path d="M11.94,0A11.92,11.92,0,0,0,1.6,6c3.94-3,8.66-2.33,10.34.12,1.56,2.27.13,5.55,0,5.85.32,0,3.89-.43,5.08-2.9C18.31,6.38,16.55,1.92,11.94,0Z" fill="#ffa403"/>
                                    <path d="M22.28,6c.65,4.93-2.32,8.67-5.28,8.9-2.74.21-4.87-2.67-5.06-2.93-.14.3-1.53,3.56,0,5.82,1.68,2.44,6.38,3.15,10.33.15a11.92,11.92,0,0,0,1.6-6A11.94,11.94,0,0,0,22.28,6Z" fill="#bd61d4"/>
                                    <path d="M11.94,23.88a12,12,0,0,0,10.34-6c-4,3-8.65,2.29-10.33-.15-1.54-2.26-.15-5.52,0-5.82-.32,0-3.87.45-5.06,2.94C5.6,17.56,7.36,22,11.94,23.88Z" fill="#1ba6f7"/>
                                    <path d="M1.6,17.91a11.94,11.94,0,0,0,10.34,6c-4.58-1.89-6.34-6.32-5.06-9,1.19-2.49,4.74-2.91,5.06-2.94C11.75,11.67,9.62,8.79,6.88,9,3.92,9.22,1,13,1.6,17.91Z" fill="#52ca27"/>
                                </g>
                            </svg>
                        </pr-link>
                    </li>
                </pr-nav>
                <div class="line" style="position: absolute; top: 0; left: 0; right: 0; height: 36px; z-index: -1; border-radius: 10px; background: #252628;"></div>
                <div class="line" style="position: absolute; top: 128px; left: 0; right: 0; height: 36px; z-index: -1; border-radius: 10px; background: #2785ff;"></div>
                <div class="line" style="position: absolute; top: 406px; left: 0; right: 0; height: 36px; z-index: -1; border-radius: 12px; background: #252628;"></div>
                <div class="test line uk-flex uk-flex-center uk-flex-middle" style='position: absolute; top: 462px; left: 0; right: 0; height: 122px; z-index: -1; border-radius: 12px; background-color: #1c1d1f; '>
                    <div class="uk-text-center">
                        <pr-button style="background-color: rgb(39, 133, 255)" class="uk-button-rounded uk-button-primary test2" to="/about" icon="plus" icon-button default :ratio="0.7" />
                        <h6 class="uk-margin-small uk-margin-remove-bottom" style="color: #ffffff">Add nw project</h6>
                        <h6 class="uk-margin-remove uk-text-small" style="color: #ffffff; font-size: 9px">Or use <span class="uk-link" style="color: #fbda6a">invite link</span></h6>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style>
.test {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23807e81' stroke-width='1' stroke-dasharray='4' stroke-dashoffset='1' stroke-linecap='round'/%3e%3c/svg%3e")
}
.test2 .pr-icon-primary {
    color: #ffffff !important;
}
</style>
