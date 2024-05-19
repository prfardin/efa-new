<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PrButton from '@c/core/PrButton.vue'
import PrLink from '@c/core/PrLink.vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrNav from '@c/core/PrNav.vue'
import Avatar from '@i/avatar.png'
import ColorCircle from '@i/color_circle.svg'

const { t } = useI18n()

</script>

<template>
  <div class="pr-sidebar-wrapper uk-light pr-light">
    <pr-link tag="a" class="pr-sidebar-accordion" icon="angle-left" :ratio="0.8" @click="$emit('closeWrapper')"></pr-link>
    <div class="pr-sidebar-header">
      <div class="pr-sidebar-header-wrapper">
        <span class="pr-sidebar-header-line"></span>
        <span class="pr-sidebar-header-container">
        <img :src="Avatar" alt="avatar" />
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
            <pr-link
              class="pr-sidebar-search pr-sidebar-item-muted"
              to="/1"
              icon="line-search"
              :ratio="0.7"
            >
              {{ t('sidebar.search') }}
              <template #after
              ><pr-icon
                class="pr-icon-favourite pr-sidebar-icon-flip"
                icon="star"
                :ratio="0.7"
              ></pr-icon
              ></template>
            </pr-link>
          </li>
          <li class="uk-nav-header">{{ t('sidebar.market') }}</li>
          <li>
            <pr-link to="/" icon="create-dashboard" :ratio="0.8">
              {{ t('sidebar.dashboard') }}
              <template #after
              ><pr-icon class="pr-sidebar-icon-flip" icon="line-angle-down" :ratio="0.7"></pr-icon
              ></template>
            </pr-link>
          </li>
          <li>
            <pr-link to="/3" icon="folder-minus" :ratio="0.8">{{
                t('sidebar.manage_products')
              }}</pr-link>
          </li>
          <li>
            <pr-link class="pr-item-has-notification" to="/4" icon="compass" :ratio="0.8">{{
                t('sidebar.orders')
              }}</pr-link>
          </li>
          <li>
            <pr-link to="/5" icon="bell" :ratio="0.8">
              {{ t('sidebar.notifications') }}
              <template #after>
                <div class="pr-sidebar-icon-flip pr-sidebar-multiple-icon">
                <span class="pr-sidebar-user-notification">
                  <pr-icon class="pr-icon-favourite" icon="pen" :ratio="0.5"></pr-icon>
                  <span
                    class="uk-icon uk-icon-image"
                    :style="{ backgroundImage: `url(${Avatar})` }"
                  ></span>
                </span>
                  <span class="pr-sidebar-badge">2</span>
                </div>
              </template>
            </pr-link>
          </li>
          <li>
            <pr-link to="/6" icon="notebooks" :ratio="0.8">
              {{ t('sidebar.reports') }}
              <template #after>
                <pr-icon
                  class="pr-sidebar-icon-flip pr-sidebar-marker"
                  icon="line-plus"
                  :ratio="0.6"
                ></pr-icon>
              </template>
            </pr-link>
          </li>
          <li>
            <pr-link to="/7" icon="bag" :ratio="0.8">
              {{ t('sidebar.manage_finance') }}
              <template #after>
                <span class="pr-sidebar-notification"></span>
              </template>
            </pr-link>
          </li>
          <li class="uk-nav-divider"></li>
          <li class="uk-nav-header">
            {{ t('sidebar.in_progress') }} <span class="uk-text-primary">12</span>
          </li>
          <li class="pr-sidebar-icon-group pr-sidebar-item-muted">
            <pr-link class="uk-active" to="/8" icon="file-alt" :ratio="0.65"></pr-link>
            <pr-link to="/9" icon="download-alt" :ratio="0.65"></pr-link>
            <pr-link to="/10" icon="user" :ratio="0.65">
              <template #after>
                <span class="pr-sidebar-item-badge pr-sidebar-badge-primary">5</span>
              </template>
            </pr-link>
            <pr-link to="/11" icon="chart-pie-alt" :ratio="0.65"></pr-link>
            <pr-link to="/12" icon="setting" :ratio="0.65"></pr-link>
            <pr-link class="pr-sidebar-icon-flip" to="/13">
            <span class="uk-icon uk-preserve">
              <img :src="ColorCircle" alt="color" />
            </span>
            </pr-link>
          </li>
        </pr-nav>
        <div class="pr-sidebar-advertising">
          <div class="uk-margin-remove-last-child">
            <pr-button to="/14" icon="line-plus" icon-button rounded primary :ratio="0.7" />
            <h6 class="uk-margin-small uk-margin-remove-bottom">
              {{ t('sidebar.new_capability') }}
            </h6>
            <h6 class="pr-margin-xsmall pr-text-xxsmall">
              {{ t('sidebar.see_in') }}
              <pr-link to="#" class="pr-link-golden">{{ t('sidebar.learning_school') }}</pr-link>
            </h6>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.pr-sidebar-wrapper {
  width: 262px;
  position: fixed;
  height: 100%;
}

</style>