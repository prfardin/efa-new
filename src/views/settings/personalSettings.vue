<script setup lang="ts">
import PrNavBar from '@c/core/PrNavBar.vue'
import Logo from '@i/logo-inverse.png'
import PrLink from '@c/core/PrLink.vue'
import { useRoute } from 'vue-router'
import PrIcon from '@c/core/PrIcon.vue'

const route = useRoute()
</script>

<template>
<div>
  <pr-nav-bar class="uk-navbar-transparent" style="padding: 20px 0; margin-bottom: 38px">
    <div class="uk-navbar-left">
      <pr-link to="/" class="uk-flex uk-flex-center uk-flex-middle">
        <img :src="Logo" alt="logo" width="35" height="30" />
      </pr-link>
    </div>
    <div class="uk-navbar-center">
      <div class="uk-text-bold">{{ route.name }}</div>
    </div>
    <div class="uk-navbar-right">
      <pr-link class="text-center" to="/" reset>
        <pr-icon icon="line-multiply" ratio="1.3" />
        <div class="uk-text-small">Back</div>
      </pr-link>
    </div>
  </pr-nav-bar>
</div>
</template>

<style scoped>

</style>