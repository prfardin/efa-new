<script setup lang="ts">
import Sidebar from '@c/sidebar/sidebar.vue'
import Wrapper from '@c/sidebar/wrapper.vue'
import Strip from '@c/sidebar/strip.vue'
import { ref } from 'vue'


const wrapperPushed = ref<boolean>(true)

function test() {
  wrapperPushed.value = !wrapperPushed.value
}
</script>

<template>
  <strip @some-event="test" :test="wrapperPushed" />
  <wrapper @some-event="test" v-if="wrapperPushed" />
  <div class="view-wrapper" :class="{'is-pushed': wrapperPushed}">
    <div class="uk-section uk-section-default uk-height-1-1" style="height: 100vh">
      <div class="uk-container">
        <div>ssss</div>

      </div>
    </div>
  </div>
</template>

<style lang="less">

.view-wrapper {
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: calc(100% - 80px);
  margin-inline-start: 80px;
  background: var(--background-grey);
  transition: all .5s;
}

.is-pushed {
  margin-left: 368px;
  width: calc(100% - 368px);
}

.post {
  height: 80px;
}
.post .avatar {
  float: right;
  width: 52px;
  height: 52px;
  background-color: #ccc;
  border-radius: 25%;
  margin: 8px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-avatar 1.6s infinite linear;
}
.post .line {
  float: right;
  width: 140px;
  height: 16px;
  margin-top: 12px;
  border-radius: 7px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-lines 1.6s infinite linear;
}
.post .avatar + .line {
  margin-top: 11px;
  width: 100px;
}
.post .line ~ .line {
  background-color: #ddd;
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 140px;
  }
}
@keyframes shine-avatar {
  0% {
    background-position: -32px;
  }
  40%,
  100% {
    background-position: 208px;
  }
}
</style>
