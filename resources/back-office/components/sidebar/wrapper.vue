<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PrButton from '@bc/core/button.vue'
import PrLink from '@bc/core/link.vue'
import PrIcon from '@bc/core/icon.vue'
import PrNav from '@bc/core/nav.vue'
import Avatar from '@bi/avatar.png'

const { t } = useI18n();
</script>

<template>
    <div class="pr-sidebar-wrapper uk-light pr-light" style="z-index: 1;">
        <pr-link class="pr-sidebar-accordion" to="#" icon="angle-right" :ratio="0.8"></pr-link>
        <div class="pr-sidebar-header">
            <div class="pr-sidebar-header-wrapper">
                <span class="pr-sidebar-header-line"></span>
                <span class="pr-sidebar-header-container">
                    <img :src="Avatar" alt="avatar">
                </span>
            </div>
            <div class="pr-sidebar-header-placeholder">
                <span>Fardin</span>
                <span class="pr-sidebar-header-status"></span>
            </div>
        </div>
        <div class="pr-sidebar-container">
            <nav>
                <pr-nav>
                    <li>
                        <pr-link class="pr-sidebar-search pr-sidebar-item-muted" to="/about" icon="line-search" :ratio="0.7">
                            {{ t('sidebar.search') }}
                            <template #after><pr-icon class="pr-icon-favourite pr-sidebar-icon-flip" icon="star" :ratio="0.7"></pr-icon></template>
                        </pr-link>
                    </li>
                    <li class="uk-nav-header">{{ t('sidebar.market') }}</li>
                    <li>
                        <pr-link to="/about" icon="create-dashboard" :ratio="0.8">
                            {{ t('sidebar.dashboard') }}
                            <template #after><pr-icon class="pr-sidebar-icon-flip" icon="angle-down" :ratio="0.7"></pr-icon></template>
                        </pr-link>
                    </li>
                    <li>
                        <pr-link to="/about" icon="folder-minus" :ratio="0.8">{{ t('sidebar.manage_products') }}</pr-link>
                    </li>
                    <li>
                        <pr-link class="pr-item-has-notification" to="/about" icon="compass" :ratio="0.8">{{ t('sidebar.orders') }}</pr-link>
                    </li>
                    <li>
                        <pr-link to="/about" icon="bell" :ratio="0.8">
                            {{ t('sidebar.notifications') }}
                            <template #after>
                                <div class="pr-sidebar-icon-flip pr-sidebar-multiple-icon">
                                    <span class="pr-sidebar-user-notification">
                                        <pr-icon class="pr-icon-favourite" icon="pen" :ratio="0.5"></pr-icon>
                                        <span class="uk-icon uk-icon-image" :style="{backgroundImage: `url(${Avatar})`}"></span>
                                    </span>
                                    <span class="pr-sidebar-badge">2</span>
                                </div>
                            </template>
                        </pr-link>
                    </li>
                    <li>
                        <pr-link to="/about" icon="notebooks" :ratio="0.8">
                            {{ t('sidebar.reports') }}
                            <template #after>
                                <pr-icon class="pr-sidebar-icon-flip pr-sidebar-marker" icon="plus" :ratio="0.6"></pr-icon>
                            </template>
                        </pr-link>
                    </li>
                    <li>
                        <pr-link to="/about" icon="bag" :ratio="0.8">
                            {{ t('sidebar.manage_finance') }}
                            <template #after>
                                <span class="pr-sidebar-notification"></span>
                            </template>
                        </pr-link>
                    </li>

                    <li class="uk-nav-divider" style="border-color: #252726"></li>
                    <li class="uk-nav-header" style="font-size: 10px; padding: 10px 10px; color: #858687; margin-top: 14px; margin-bottom: 2px">در حال انجام <span style="color: #fff">12</span></li>
                    <li style="margin-bottom: 7px; display: flex">
                        <pr-link style="position: relative; color: #bfbfbf; padding-right: 8px; padding-left: 4px" to="/about">
                            <pr-icon style="background: #3c4041; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);width: 26px; height: 26px; border-radius: 8px; display: flex; align-items: center;justify-content: center" icon="file-alt" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="position: relative; color: #bfbfbf;  padding-right: 8px; padding-left: 8px" to="/about">
                            <pr-icon icon="arrows-merge" :ratio="0.9"></pr-icon>
                        </pr-link>
                        <pr-link style="position: relative; color: #bfbfbf;  padding-right: 8px; padding-left: 8px" to="/about">
                            <pr-icon icon="user" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="position: relative; color: #bfbfbf;  padding-right: 8px; padding-left: 8px" to="/about">
                            <pr-icon icon="chart-pie-alt" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="position: relative; color: #bfbfbf;  padding-right: 8px; padding-left: 8px" to="/about">
                            <span style="position: absolute; top: 3px; right: -48px; box-sizing: border-box; width: 16px; height: 16px; background-color: #2884ff; border-radius: 100%; border: 2px solid #252628; font-size: 7px; color: rgb(255, 255, 255); text-align: center; padding: 2px 4px;">5</span>
                            <pr-icon icon="setting" :ratio="0.65"></pr-icon>
                        </pr-link>
                        <pr-link style="position: absolute; color: #bfbfbf;  left: 4PX" to="/about">
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
                <div class="line" style="position: absolute; top: 128px; right: 0; left: 0; height: 36px; z-index: -1; border-radius: 10px; background: #2785ff;"></div>
                <div class="line" style="position: absolute; top: 406px; right: 0; left: 0; height: 36px; z-index: -1; border-radius: 12px; background: #252628;"></div>
                <div class="test line uk-flex uk-flex-center uk-flex-middle" style='position: absolute; top: 462px; right: 0; left: 0; height: 122px; z-index: -1; border-radius: 12px; background-color: #1c1d1f; '>
                    <div class="uk-text-center">
                        <pr-button style="background-color: rgb(39, 133, 255)" class="uk-button-rounded uk-button-primary test2" to="/about" icon="plus" icon-button default :ratio="0.7" />
                        <h6 class="uk-margin-small uk-margin-remove-bottom" style="color: #ffffff">اضافه کردن قابلیت جدید</h6>
                        <h6 class="uk-margin-remove uk-text-small" style="color: #ffffff; font-size: 9px; margin-top: 6px !important">مشاهده در <span class="uk-link" style="color: #fbda6a">بخش آموزش ها</span></h6>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
