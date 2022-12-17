<script setup lang="ts">
import Strip from './strip.vue'
import Wrapper from './wrapper.vue'

import { ref } from 'vue'

/*defineProps<{ msg: string }>()

const count = ref(0)*/
</script>

<template>
    <div class="pr-sidebar uk-light">
        <strip />
        <wrapper />
    </div>
</template>
