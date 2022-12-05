<script setup lang="ts">
import prLink from '@bc/core/link.vue'

</script>

<template>
    <div class="pr-sidebar-wrapper uk-flex">
        <div class="pr-brand-area uk-flex uk-flex-middle uk-flex-between">
            <pr-link icon="angle-down" :ratio="0.8" muted x-small rounded>{{ $t('hello', { 'name': 'Fardin' }) }}</pr-link>
            <pr-link icon="angle-left" :ratio="0.8" muted x-small circle collapse />
        </div>
    </div>
</template>
