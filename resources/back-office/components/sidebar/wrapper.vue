<script setup lang="ts">
import PrButton from '@bc/core/button.vue'

</script>

<template>
    <div class="pr-sidebar-wrapper">
        <div class="pr-brand-area uk-flex uk-flex-middle uk-flex-between">
            <pr-button to="/about" icon="plus" :ratio="0.8" primary width="3-4">{{ $t('Create') }}</pr-button>
            <pr-button to="/about" icon="redo" :ratio="0.7" icon-button />
        </div>
        <div class="pr-sidebar-container">
            <nav>
                <ul class="uk-nav">
                    <li>
                        <a>
                            <span uk-icon="dashboard"></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
