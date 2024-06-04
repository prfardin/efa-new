<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PrOffcanvas from '@c/core/PrOffcanvas.vue'
import PrNav from '@c/core/PrNav.vue'

const { t } = useI18n()

</script>

<template>
  <pr-offcanvas class="pr-sidebar-wrapper" :close-button="false" id="sidebar" :bg-close="false" :esc-close="false">
    <template #content>
      <ul class="uk-nav-default" uk-nav>
        <li class="uk-active"><a href="#">Active</a></li>
        <li class="uk-parent">
          <a href="#">Parent <span uk-nav-parent-icon></span></a>
          <ul class="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li>
              <a href="#">Sub item</a>
              <ul>
                <li><a href="#">Sub item</a></li>
                <li><a href="#">Sub item</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="uk-parent">
          <a href="#">Parent <span uk-nav-parent-icon></span></a>
          <ul class="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
      </ul>
    </template>
  </pr-offcanvas>
</template>

<style>


</style>