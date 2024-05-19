<script setup lang="ts">

interface Props {
  data: [{}]
}

const props = defineProps<Props>()

</script>

<template>
  <div class="flex-list">
    <div class="flex-list-header">
      <slot name="head"/>
    </div>
    <div class="flex-list-inner">
      <div class="flex-list-inner-item" v-for="(cell, index) in props.data" :key="index">
        <slot name="cell" v-bind="cell" />
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

.flex-list-header > * {
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

.flex-list-inner-item > * {
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