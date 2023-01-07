<script setup lang="ts">
import PrButton from '@bc/core/button.vue'
import PrLink from '@bc/core/link.vue'
import PrNav from '@bc/core/nav.vue'
import Avatar from '@bi/avatar.png'

</script>

<template>
    <div class="pr-sidebar-wrapper uk-light">
        <div class="pr-sidebar-wrapper-header uk-flex uk-flex-middle uk-flex-between">
            <span style="padding: 6px; border: 1px solid transparent; border-radius: 20px; position: relative;background-color: #242527">
                <span style="position:absolute; top: 50%; left: -1px; transform: translate(0, -50%); width: 2px; height: 14px; background-color: #ffde6c; border-radius: 10px"></span>
                <span style="overflow: hidden; border-radius: 15px;background: #f9eee8; width: 40px;height: 40px;display: flex;align-items: center;justify-content: center;">
                    <img :src="Avatar" alt="avatar">
                </span>
            </span>
<!--            <pr-button to="/about" icon="plus" :ratio="0.8" primary width="3-4">{{ $t('Create') }}</pr-button>-->
<!--            <pr-button to="/about" icon="redo" :ratio="0.7" icon-button />-->
        </div>
        <div class="pr-sidebar-container">
            <nav>
                <pr-nav>
                    
                </pr-nav>
            </nav>
        </div>
    </div>
</template>
