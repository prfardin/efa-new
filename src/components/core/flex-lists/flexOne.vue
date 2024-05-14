<script setup lang="ts">

import { ref } from 'vue'


interface Props {
  data: [{
    cell: [{
      cls: any
      t: any
      tag: any
    }]
  }]

}

// const props = defineProps<Props>()
//
//
const head = ref<any>([
  { cls: 'is-grow', title: 's' },
  { cls: '', title: 'ss' },
  { cls: '', title: 'ss' },
  { cls: '', title: 'ss' },
  { cls: 'cell-end', title: 'sssss' }
])

</script>

<template>
  <div class="flex-list">
    <div class="flex-list-header">
      <span class="flex-list-header-item" v-for="(item, index) in head" :key="index" :class="item.cls">{{ item.title }}</span>
    </div>
    <div class="flex-list-inner">
      <div class="flex-list-inner-item">
        <div class="flex-list-inner-item-cell is-grow">test</div>
        <div class="flex-list-inner-item-cell">test</div>
        <div class="flex-list-inner-item-cell">test</div>
        <div class="flex-list-inner-item-cell">test</div>
        <div class="flex-list-inner-item-cell cell-end">test</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

.flex-list-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}

.flex-list-header-item {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}

.flex-list-inner-item {
  display: flex;
  align-items: stretch;
  min-height: 40px;
  border: 1px solid black;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.flex-list-inner-item-cell {
  flex: 1 1 0;
  display: flex;
  align-items: center;
}


.is-grow {
  flex-grow: 2;
}

.cell-end {
  justify-content: flex-end;
}

</style>