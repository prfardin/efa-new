<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PrOffcanvas from '@c/core/PrOffcanvas.vue'
import PrNav from '@c/core/PrNav.vue'
import PrIcon from '@c/core/PrIcon.vue'
import { useToggle } from '@sc/Composable/useToggle'
import { ref } from 'vue'
import PrLink from '@c/core/PrLink.vue'

const { t } = useI18n()

const{ value, toggle } = useToggle()

const navItem  = ref<any>([
  { parentTitle: "Production management", subItems:[
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" }
    ]
  },
  { parentTitle: "Production management", subItems:[
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" }
    ]
  }
])

</script>

<template>
  <pr-offcanvas class="pr-sidebar-wrapper" :close-button="false" id="sidebar" :bg-close="false" :esc-close="false">
    <template #title>
      <div>

      </div>
    </template>
    <template #content>
      <pr-nav multiple>
        <li class="uk-parent" v-for="(item, index) in navItem" :key="index">
          <a href="#" @click="toggle">{{ item.parentTitle }}<pr-icon class="pr-nav-parent" :class="{ 'open' : value }" icon="line-angle-down" /></a>
          <ul class="uk-nav-sub">
            <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex"><pr-link :to="subItem.href">{{ subItem.title }}</pr-link></li>
          </ul>
        </li>
      </pr-nav>
    </template>
  </pr-offcanvas>
</template>

<style>

.pr-nav-parent {
  margin-left: auto;
  transition: all .3s ease-out;
  &.open {
    transform: rotate(180deg);
  }
}




</style>