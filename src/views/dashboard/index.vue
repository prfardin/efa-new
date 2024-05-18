<script setup lang="ts">
import Avatar from '@i/avatar.png'

import PrAvatar from '@c/core/PrAvatar.vue'
import PrGrid from '@c/core/PrGrid.vue'
import PrButton from '@c/core/PrButton.vue'
import PrCard from '@c/core/form/PrCard.vue'
</script>

<template>
  <div>
    <div class="uk-margin-medium-bottom">
      <pr-grid class="uk-flex-between uk-flex-middle uk-child-width-auto@m">
        <div>
          <div class="uk-flex uk-flex-middle">
            <pr-avatar :img="Avatar" large circle/>
            <div class="uk-margin-left">
              <h2 class="uk-h4 uk-margin-remove">Welcome back, Fardin</h2>
              <span>Happy to see you again on your dashboard.</span>
            </div>
          </div>
        </div>
        <div>
          <pr-grid small>
            <div>
              <pr-button to="/" default>lorem lorem</pr-button>
            </div>
            <div>
              <pr-button to="/" primary>lorem lorem</pr-button>
            </div>
          </pr-grid>
        </div>
      </pr-grid>
    </div>
    <div>
      <pr-grid small>
        <div class="uk-width-1-2">
          <pr-card body>
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </pr-card>
        </div>
        <div class="uk-width-1-2">
          <pr-card default body>
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </pr-card>
        </div>
        <div class="uk-width-1-3">
          <pr-card default body>
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </pr-card>
        </div>
        <div class="uk-width-1-3">
          <pr-card default body>
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </pr-card>
        </div>
        <div class="uk-width-1-3">
          <pr-card default body>
            <h3 class="uk-card-title">Default</h3>
            <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </pr-card>
        </div>
      </pr-grid>
    </div>
  </div>

</template>

<style scoped>

</style>