<script setup lang="ts">
import PrLink from '@bc/core/link.vue'

</script>

<template>
    <div class="pr-sidebar-wrapper uk-flex">
        <div class="pr-brand-area uk-flex uk-flex-middle uk-flex-between">
            <pr-link to="/about" icon="angle-down" :ratio="0.8" muted x-small rounded>{{ $t('hello', { 'name': 'Fardin' }) }}</pr-link>
            <pr-link to="/about" icon="angle-left" :ratio="0.8" muted x-small circle collapse />
        </div>
    </div>
</template>
