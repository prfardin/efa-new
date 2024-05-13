<script setup lang="ts">

</script>

<template>
  <div class="flex-list">
    <div class="flex-list-header">
      <span class="flex-list-header-item is-grow">ss</span>
      <span class="flex-list-header-item">sss</span>
      <span class="flex-list-header-item">ss</span>
      <span class="flex-list-header-item">ss</span>
      <span class="flex-list-header-item cell-end">ss</span>
    </div>
    <div class="flex-list-inner">
      <div class="flex-list-inner-item">
        <div>s</div>
        <div>s</div>
        <div>s</div>
        <div>s</div>
        <div>s</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

.flex-list-header {
  display: flex;
  align-items: center;
}

.flex-list-header-item {
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

.flex-list-inner-item {
  flex: 1 1 0;
  display: flex;
  align-items: stretch;
  min-height: 40px;
  border: 1px solid black;
  width: 100%;
  padding: 9px;
}

</style>