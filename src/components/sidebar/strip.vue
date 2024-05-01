<script setup lang="ts">
import PrLink from '@c/core/link.vue'
import PrNav from '@c/core/nav.vue'
import Avatar from '@i/avatar.png'
</script>

<template>
  <div class="pr-sidebar-strip">
    <div class="pr-sidebar-strip-header">
      <div class="pr-sidebar-strip-header-wrapper">
        <span class="pr-sidebar-header-line"></span>
        <span class="pr-sidebar-header-container">
          <img :src="Avatar" alt="avatar" />
          <span class="pr-sidebar-header-placeholder"></span>
          <span class="pr-sidebar-header-letter">F</span>
        </span>
        <span class="pr-sidebar-header-status"></span>
      </div>
    </div>
    <div class="pr-sidebar-strip-container">
      <nav>
        <pr-nav>
          <li>
            <pr-link class="pr-strip-item-muted" to="/about" icon="line-search" :ratio="0.7" />
          </li>
          <li><pr-link class="pr-icon-favourite" to="/about" icon="star" :ratio="0.7" /></li>
          <li><pr-link to="/about" icon="create-dashboard" :ratio="0.8" /></li>
          <li><pr-link class="uk-active" to="/about" icon="folder-minus" :ratio="0.8" /></li>
          <li class="pr-item-has-notification">
            <pr-link to="/about" icon="compass" :ratio="0.8" />
          </li>
          <li class="pr-item-has-badge">
            <pr-link slot-class="pr-sidebar-strip-badge" to="/about" icon="bell" :ratio="0.8"
              >2</pr-link
            >
          </li>
          <li><pr-link to="/about" icon="notebooks" :ratio="0.8" /></li>
          <li><pr-link to="/about" icon="bag" :ratio="0.8" /></li>
          <li class="uk-nav-divider"></li>
          <li class="pr-sidebar-strip-accordion">
            <pr-link to="/about" icon="file-alt" :ratio="0.65"></pr-link>
            <pr-link class="pr-accordion-collapse" to="/about" icon="angle-down" :ratio="0.8" />
          </li>
          <li>
            <pr-link
              class="pr-strip-item-primary"
              icon-class="pr-border-circle"
              to="/about"
              icon="line-plus"
              :ratio="0.7"
            />
          </li>
        </pr-nav>
      </nav>
    </div>
  </div>
</template>
