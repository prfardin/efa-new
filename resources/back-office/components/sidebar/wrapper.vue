<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrLink from '@bc/core/link.vue'
import PrNav from '@bc/core/nav.vue'

</script>

<template>
    <div class="pr-sidebar-wrapper">
        <div class="pr-sidebar-wrapper-header uk-flex uk-flex-middle uk-flex-between">
            <pr-button to="/about" icon="plus" :ratio="0.8" primary width="3-4">{{ $t('Create') }}</pr-button>
            <pr-button to="/about" icon="redo" :ratio="0.7" icon-button />
        </div>
        <div class="pr-sidebar-container">
            <nav>
                <pr-nav>
                    <li><pr-link to="/about" icon="line-dashboard">Dashboard</pr-link></li>
                </pr-nav>
            </nav>
        </div>
    </div>
</template>
