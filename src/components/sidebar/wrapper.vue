<script setup lang="ts">
import { computed, ref } from 'vue'
import PrOffcanvas from '@c/core/PrOffcanvas.vue'
import PrNav from '@c/core/PrNav.vue'
import PrIcon from '@c/core/PrIcon.vue'
import PrLink from '@c/core/PrLink.vue'

interface Props {
  divider: number
  id: string
  isActive: number00
}

const props = withDefaults(defineProps<Props>(), {

})

const navItem1 = ref<any>({
  title: 'index1',
  body: [
    {
      parentTitle: 'Dashboard2',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'Shop',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'Production',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test1',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test3',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
  ]
})

const navItem2 = ref<any>({
  title: 'index2',
  body: [
    {
      parentTitle: 'Dashboard2',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'Shop',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'Production',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test1',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test3',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
  ]
})

const navItem3 = ref<any>({
  title: 'index3',
  body: [
    {
      parentTitle: 'Dashboard2',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'Shop',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'Production',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test1',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test3',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
  ]
})

const navItem4 = ref<any>({
  title: 'index4',
  body: [
    {
      parentTitle: 'Dashboard2',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'Shop',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'Production',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test1',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
    {
      parentTitle: 'test3',
      subItems: [
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' },
        { title: 'products', href: '/wares' }
      ]
    },
  ]
})

const navItems = ref([navItem1, navItem2, navItem3, navItem4])

const data = computed<any>(() => {
  return navItems.value.find((data, index) => index === props.isActive)
})

</script>

<template>
  <pr-offcanvas class="pr-sidebar-wrapper" :close-button="false" :id="id" :bg-close="false" :esc-close="false">
    <template #title>
      <h3 class="uk-margin-small-bottom uk-h3">{{ data.title }}</h3>
    </template>
    <template #content>
      <pr-nav multiple>
        <template v-for="(item, index) in data.body" :key="index">
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