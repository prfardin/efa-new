<script setup lang="ts">

import PrSearch from '@c/core/form/PrSearch.vue'
import PrModal from '@c/core/PrModal.vue'
import { ref } from 'vue'


interface SearchModalType {
  id: string
  autofocus: boolean
}

const props = withDefaults(defineProps<SearchModalType>(), {

})

</script>

<template>
  <pr-modal :id="id" class="uk-flex-top" cls="uk-width-large pr-border-rounded-xl">
    <pr-search id="search-modal" name="search-modal" label="Search" label-cls="uk-text-muted uk-text-bold" :autofocus="autofocus" />
  </pr-modal>
</template>

<style scoped>

</style>