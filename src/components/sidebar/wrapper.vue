<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PrOffcanvas from '@c/core/PrOffcanvas.vue'

const { t } = useI18n()

</script>

<template>
  <pr-offcanvas class="pr-sidebar-wrapper" :close-button="false" id="sidebar" mode="push" :bg-close="false" :esc-close="false">
    <template #content>
      <ul class="uk-nav uk-nav-default">
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-header">Header</li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">Item</a></li>
      </ul>
    </template>
  </pr-offcanvas>
</template>

<style>
.pr-sidebar-wrapper {
  margin-left: 80px;
  z-index: 3;
  width: 220px;
  .uk-offcanvas-bar{
    width: 220px;
  }
}




</style>