<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { heightViewport, RefElement } from '@u/util'


// components
import PrButton from '@c/core/button.vue'
import PrLink from '@c/core/link.vue'
import PrIcon from '@c/core/icon.vue'
import PrSection from '@c/core/section.vue'
import PrTile from '@c/core/tile.vue'
import PrGrid from '@c/core/grid.vue'
import PrList from '@c/core/list.vue'
import PrContainer from '@c/core/container.vue'

// images
import Map from '@i/auth/map.svg'

// i18n
const { t } = useI18n()

const el = ref<RefElement>(null)

onMounted(() => {
  heightViewport(el.value.$el, { 'offsetTop': true })
})

interface Routers {
  link: string
  previousLink?: string
  title: string
  cls?: string
}

const route = useRoute()

const routers = ref<Routers[]>([
  { link: "", title: "auth.step.one.title", cls: "pr-complete" },
  { link: "businessType", title: "auth.step.two.title" },
  { link: "businessDetails", title: "auth.step.three.title", previousLink: "businessType" },
  { link: "businessOrganization", title: "auth.step.four.title", previousLink: "businessDetails" },
  { link: "personalDetails", title: "auth.step.five.title", previousLink: "businessOrganization" },
])

// Different tips for each page
// We are using Route Meta, we don't know if this is a good way or not
// We need to review this and use a better way
function metaInfo(i: string) {
  return computed<any>(() => route.meta[i] )
}

const header = metaInfo('header');
const comment_1 = metaInfo('comment_1');
const comment_2 = metaInfo('comment_2');



const test =ref(176)
const testt =ref(40)
</script>

<template>
  <pr-section class="pr-auth-section pr-auth-section-muted uk-flex uk-flex-middle" ref="el">
    <div class="uk-width-1-1">
      <pr-container small>
        <pr-grid collapse match class="pr-auth-background-muted pr-auth-height" style="height: 700px">
          <div class="pr-auth-side uk-width-1-3@m">
            <div class="pr-auth-logo-container uk-width-auto">
              <span class="pr-auth-logo-icon">E</span>
              <span>EFA </span>
              <span class="uk-text-muted">SERVICE</span>
            </div>
            <pr-tile
              class="pr-auth-tile pr-auth-tile-default pr-auth-background-default uk-flex uk-flex-top pr-auth-tile-has-list"
            >
              <pr-list class="pr-auth-list uk-width-1-1 uk-margin-remove">
                <li v-for="(item, index) in routers" :key="index" :class="item.cls">
                  <pr-link :to="{ name: item.link }">
                    <pr-icon v-if="item.cls" icon="line-check" ratio="0.75"></pr-icon>
                    <pr-icon v-else-if="item.link === route.name" icon="line-arrow-right"></pr-icon>
                    <span v-else>{{ index + 1 }}</span>
                    <span>{{ t(item.title) }}</span>
                  </pr-link>
                </li>
              </pr-list>
              <picture>
                <source type="image/webp" :srcset="Map" />
                <img class="pr-auth-side-icon-map" :src="Map" alt="" loading="eager" />
              </picture>
            </pr-tile>
          </div>
          <div class="pr-auth-container uk-width-expand@m">
            <div class="pr-auth-helper-container uk-width-auto">
              <span>{{ t('auth.helper_text') }}</span>
              <pr-button to="/" text>{{ t('auth.get_help') }}</pr-button>
            </div>
            <div class="uk-tile pr-auth-tile-muted pr-auth-tile-xlarge uk-flex uk-flex-column uk-flex-between" :style="route.name === 'businessType' ? {paddingBottom: test + 'px'} : {paddingBottom: testt + 'px'}">
              <div>
                <h2 class="pr-auth-heading uk-margin-remove-bottom">
                  {{ $t(header) }}
                </h2>
                <p class="uk-margin-small-top">
                  {{ $t(comment_1) }}<br />{{ $t(comment_2) }}
                </p>
                <div class="uk-margin-medium-top">
                  <router-view></router-view>
                </div>
              </div>
              <div class="uk-margin-medium-top">
                <pr-grid v-if="route.name !== 'businessType'" class="uk-child-width-1-1 uk-child-width-auto@s uk-flex-middle uk-flex-between@s">
                  <div>
                    <template v-for="(i, index) in routers" :key="index">
                      <pr-button v-if="i.link === route.name && i.previousLink" :to="{ name: i.previousLink }" class="pr-auth-button" muted square small>previous</pr-button>
                    </template>
                  </div>
                  <div>
                    <pr-button class="pr-auth-button-primary" primary small square>test</pr-button>
                  </div>
                </pr-grid>
              </div>
            </div>
          </div>
        </pr-grid>
      </pr-container>
    </div>
  </pr-section>
</template>
