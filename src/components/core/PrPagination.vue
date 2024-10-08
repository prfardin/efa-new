<script setup lang="ts">
import { PaginationClassObject } from '@u/classes'

import PrIcon from '@c/core/PrIcon.vue'
import { computed, ref } from 'vue'
import { PaginationPropsType } from '@u/props'

const emit = defineEmits(["update:modelValue"])

const PaginationClass = computed(() => PaginationClassObject(props))



const props = withDefaults(defineProps<PaginationPropsType>(), {
  rounded: 'none',
  baseUrl: '/'
})

function setRoute(page: number) {
  const url = '/api/'+ props.baseUrl + props.table + '?page=' + page + '&per_page=9'
  emit('update:modelValue', url)
}


</script>

<template>
  <div :class="PaginationClass">
    <ul class="pr-pagination-list">
      <li v-for="(page, index) in paginate.totalPages" :key="index">
        <router-link :to="{query: { page }}">{{ page }}</router-link>
      </li>
    </ul>
    <div class="pr-pagination-buttons">
      <router-link class="pr-pagination-button" aria-current="page" tabindex="0" :to="{query: { page: props.paginate.current - 1 }}">
        <pr-icon icon="line-angle-left" />
      </router-link>
      <router-link class="pr-pagination-button" aria-current="page" tabindex="0" :to="{query: { page: props.paginate.current + 1 }}">
        <pr-icon icon="line-angle-right" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>