<script setup lang="ts">
import { navbar } from '@u/util'
import { onMounted, ref } from 'vue'
import Avatar from '@i/avatar.png'

// component
import PrAvatar from '@c/core/PrAvatar.vue'
import PrSection from '@c/core/PrSection.vue'
import PrContainer from '@c/core/PrContainer.vue'
import Wrapper from '@c/sidebar/wrapper.vue'
import Strip from '@c/sidebar/strip.vue'

// composable
import { useToggle } from '@sc/Composable/Toggle'
import PrIcon from '@c/core/PrIcon.vue'
import PrOffCanvas from '@c/core/PrOffcanvas.vue'
import PrToggle from '@c/core/PrToggle.vue'

const { value, toggle } = useToggle();

const elNavbar = ref<any>(null)

onMounted( () => {
  navbar(elNavbar.value)
})


</script>

<template>
  <strip @open-wrapper="toggle()" :check-wrapper="!value" />
  <transition name="slide">
    <wrapper @close-wrapper="toggle()" v-if="!value" />
  </transition>
  <div class="view-wrapper" :class="{'is-pushed': !value}">
    <pr-section class="uk-padding-remove-top uk-height-1-1" style="height: 100vh" default>
      <div class="uk-margin-bottom">
        <nav class="uk-navbar-container uk-navbar-transparent">
          <pr-container class="uk-container">
            <div ref="elNavbar">
              <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                  <li>
                    <h1 class="uk-margin-remove uk-h2">shop name</h1>
                  </li>
                </ul>
              </div>
              <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                  <li>
                    <a href="#">
                      <pr-avatar small circle border>
                        <pr-icon icon="sun" ratio="1.1" />
                      </pr-avatar>
                    </a>
                  </li>
                  <li>
                    <pr-toggle href="#test">
                      <pr-avatar small circle border>
                        <pr-icon icon="bell" />
                      </pr-avatar>
                    </pr-toggle>
                    <pr-off-canvas id="test" />
                  </li>
                  <li>
                    <pr-toggle href="#my-id">
                      <pr-avatar small circle border>
                        <pr-icon icon="create-dashboard" ratio=".8" />
                      </pr-avatar>
                    </pr-toggle>
                    <pr-off-canvas flip id="my-id" />
                  </li>
                  <li>
                    <a href="#">
                      <pr-avatar small circle cls="pr-cream-b-c">
                        <img :src="Avatar" alt="" class="uk-object-cover">
                      </pr-avatar>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </pr-container>
        </nav>
      </div>
      <pr-container class="uk-container">
        <router-view></router-view>
      </pr-container>
    </pr-section>
  </div>
</template>

<style lang="less">

.pr-navbar-item {
  border-radius: 999px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  transition: 0.3s ease-in-out;
  overflow: hidden;
}

.uk-navbar-nav > li > a {
  padding: 0;
}

.uk-navbar-nav {
  gap: .5rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity .3s ease-in-out;
}

.view-wrapper {
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: calc(100% - 78px);
  margin-inline-start: 78px;
  background: var(--background-grey);
  transition: all .3s ease-in-out;
}

.is-pushed {
  margin-left: 340px;
  width: calc(100% - 340px);
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
