<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PrOffcanvas from '@c/core/PrOffcanvas.vue'
import PrNav from '@c/core/PrNav.vue'
import PrIcon from '@c/core/PrIcon.vue'
import { ref } from 'vue'
import PrLink from '@c/core/PrLink.vue'
import { useRoute } from 'vue-router'

interface Props {
  divider: number
}

const props = withDefaults(defineProps<Props>(), {

})

const navItem  = ref<any>([
  { parentTitle: "Dashboard", subItems:[
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" }
    ]
  },
  { parentTitle: "Shop", subItems:[
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" }
    ]
  },
  { parentTitle: "Production", subItems:[
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" }
    ]
  },
  { parentTitle: "test", subItems:[
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" }
    ]
  },
  { parentTitle: "test1", subItems:[
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" }
    ]
  },
  { parentTitle: "test3", subItems:[
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" },
      { title: "products", href: "/wares" }
    ]
  },
])


</script>

<template>
  <pr-offcanvas class="pr-sidebar-wrapper" :close-button="false" id="sidebar" :bg-close="false" :esc-close="false">
    <template #title>
      <h3 class="uk-margin-small-bottom uk-h3">test</h3>
    </template>
    <template #content>
      <pr-nav multiple>
        <template v-for="(item, index) in navItem" :key="index">
          <li class="uk-parent">
            <a href="#">{{ item.parentTitle }}<pr-icon class="pr-nav-parent" icon="line-angle-down" /></a>
            <ul class="uk-nav-sub">
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex"><pr-link :to="subItem.href">{{ subItem.title }}</pr-link></li>
            </ul>
          </li>
          <li v-if="(index + 1) % divider === 0" class="uk-nav-divider" role="presentation"></li>
        </template>
      </pr-nav>
    </template>
  </pr-offcanvas>
</template>

<style>

.uk-parent {
  .pr-nav-parent {
    margin-left: auto;
    transition: all .2s ease-out;
  }
  &.uk-open a .pr-nav-parent {
    transform: rotate(180deg);
  }
}







</style>