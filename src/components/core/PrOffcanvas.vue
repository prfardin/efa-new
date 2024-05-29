<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import { OffcanvasPropsType } from '@u/props'
import { offcanvas, RefElement } from '@u/util'
import { onMounted, ref } from 'vue'
import PrToggle from '@c/core/PrToggle.vue'
import PrIcon from '@c/core/PrIcon.vue'


const props = withDefaults(defineProps<OffcanvasPropsType>(), {
  escClose: true,
  bgClose: true,
  closeButton: true,
})

const el = ref<RefElement>(null)

onMounted(() => {
  offcanvas(el.value, {
    mode: props.mode,
    flip: props.flip,
    overlay: props.overlay,
    // @ts-ignore
    escClose: props.escClose,
    bgClose: props.bgClose,
    container: props.container
  })
})

</script>

<template>
  <div :id="props.id" ref="el">
    <div class="uk-offcanvas-bar">
      <div class="uk-flex uk-flex-middle uk-flex-between">
        <slot name="title" />
        <pr-toggle v-if="closeButton" class="pr-offcanvas-close" tag="a" :target="`#${props.id}`">
          <pr-icon icon="line-angle-right-b" />
        </pr-toggle>
      </div>
      <slot name="content" />
    </div>
  </div>
</template>

<style>

.uk-offcanvas-bar {
  background-color: #fdfdfd;
  color: #464964;
}

.uk-offcanvas-bar {
  .pr-offcanvas-close {
    color: #464964;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    transition:background-color .2s ;
    border-radius: 999px;
  }
  .pr-offcanvas-close:hover {
    background-color: #f0f4f7;
  }
}

.uk-light h1, .uk-light .uk-h1, .uk-light h2, .uk-light .uk-h2, .uk-light h3, .uk-light .uk-h3, .uk-light h4, .uk-light .uk-h4, .uk-light h5, .uk-light .uk-h5, .uk-light h6, .uk-light .uk-h6, .uk-light .uk-heading-small, .uk-light .uk-heading-medium, .uk-light .uk-heading-large, .uk-light .uk-heading-xlarge, .uk-light .uk-heading-2xlarge, .uk-light .uk-heading-3xlarge, .uk-section-primary:not(.uk-preserve-color) h1, .uk-section-primary:not(.uk-preserve-color) .uk-h1, .uk-section-primary:not(.uk-preserve-color) h2, .uk-section-primary:not(.uk-preserve-color) .uk-h2, .uk-section-primary:not(.uk-preserve-color) h3, .uk-section-primary:not(.uk-preserve-color) .uk-h3, .uk-section-primary:not(.uk-preserve-color) h4, .uk-section-primary:not(.uk-preserve-color) .uk-h4, .uk-section-primary:not(.uk-preserve-color) h5, .uk-section-primary:not(.uk-preserve-color) .uk-h5, .uk-section-primary:not(.uk-preserve-color) h6, .uk-section-primary:not(.uk-preserve-color) .uk-h6, .uk-section-primary:not(.uk-preserve-color) .uk-heading-small, .uk-section-primary:not(.uk-preserve-color) .uk-heading-medium, .uk-section-primary:not(.uk-preserve-color) .uk-heading-large, .uk-section-primary:not(.uk-preserve-color) .uk-heading-xlarge, .uk-section-primary:not(.uk-preserve-color) .uk-heading-2xlarge, .uk-section-primary:not(.uk-preserve-color) .uk-heading-3xlarge, .uk-section-secondary:not(.uk-preserve-color) h1, .uk-section-secondary:not(.uk-preserve-color) .uk-h1, .uk-section-secondary:not(.uk-preserve-color) h2, .uk-section-secondary:not(.uk-preserve-color) .uk-h2, .uk-section-secondary:not(.uk-preserve-color) h3, .uk-section-secondary:not(.uk-preserve-color) .uk-h3, .uk-section-secondary:not(.uk-preserve-color) h4, .uk-section-secondary:not(.uk-preserve-color) .uk-h4, .uk-section-secondary:not(.uk-preserve-color) h5, .uk-section-secondary:not(.uk-preserve-color) .uk-h5, .uk-section-secondary:not(.uk-preserve-color) h6, .uk-section-secondary:not(.uk-preserve-color) .uk-h6, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-small, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-medium, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-large, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-xlarge, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-2xlarge, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-3xlarge, .uk-tile-primary:not(.uk-preserve-color) h1, .uk-tile-primary:not(.uk-preserve-color) .uk-h1, .uk-tile-primary:not(.uk-preserve-color) h2, .uk-tile-primary:not(.uk-preserve-color) .uk-h2, .uk-tile-primary:not(.uk-preserve-color) h3, .uk-tile-primary:not(.uk-preserve-color) .uk-h3, .uk-tile-primary:not(.uk-preserve-color) h4, .uk-tile-primary:not(.uk-preserve-color) .uk-h4, .uk-tile-primary:not(.uk-preserve-color) h5, .uk-tile-primary:not(.uk-preserve-color) .uk-h5, .uk-tile-primary:not(.uk-preserve-color) h6, .uk-tile-primary:not(.uk-preserve-color) .uk-h6, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-small, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-medium, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-large, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-xlarge, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-2xlarge, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-3xlarge, .uk-tile-secondary:not(.uk-preserve-color) h1, .uk-tile-secondary:not(.uk-preserve-color) .uk-h1, .uk-tile-secondary:not(.uk-preserve-color) h2, .uk-tile-secondary:not(.uk-preserve-color) .uk-h2, .uk-tile-secondary:not(.uk-preserve-color) h3, .uk-tile-secondary:not(.uk-preserve-color) .uk-h3, .uk-tile-secondary:not(.uk-preserve-color) h4, .uk-tile-secondary:not(.uk-preserve-color) .uk-h4, .uk-tile-secondary:not(.uk-preserve-color) h5, .uk-tile-secondary:not(.uk-preserve-color) .uk-h5, .uk-tile-secondary:not(.uk-preserve-color) h6, .uk-tile-secondary:not(.uk-preserve-color) .uk-h6, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-small, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-medium, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-large, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-xlarge, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-2xlarge, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-3xlarge, .uk-card-primary.uk-card-body h1, .uk-card-primary.uk-card-body .uk-h1, .uk-card-primary.uk-card-body h2, .uk-card-primary.uk-card-body .uk-h2, .uk-card-primary.uk-card-body h3, .uk-card-primary.uk-card-body .uk-h3, .uk-card-primary.uk-card-body h4, .uk-card-primary.uk-card-body .uk-h4, .uk-card-primary.uk-card-body h5, .uk-card-primary.uk-card-body .uk-h5, .uk-card-primary.uk-card-body h6, .uk-card-primary.uk-card-body .uk-h6, .uk-card-primary.uk-card-body .uk-heading-small, .uk-card-primary.uk-card-body .uk-heading-medium, .uk-card-primary.uk-card-body .uk-heading-large, .uk-card-primary.uk-card-body .uk-heading-xlarge, .uk-card-primary.uk-card-body .uk-heading-2xlarge, .uk-card-primary.uk-card-body .uk-heading-3xlarge, .uk-card-primary > :not([class*="uk-card-media"]) h1, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h1, .uk-card-primary > :not([class*="uk-card-media"]) h2, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h2, .uk-card-primary > :not([class*="uk-card-media"]) h3, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h3, .uk-card-primary > :not([class*="uk-card-media"]) h4, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h4, .uk-card-primary > :not([class*="uk-card-media"]) h5, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h5, .uk-card-primary > :not([class*="uk-card-media"]) h6, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h6, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-small, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-medium, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-large, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-xlarge, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-2xlarge, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-3xlarge, .uk-card-secondary.uk-card-body h1, .uk-card-secondary.uk-card-body .uk-h1, .uk-card-secondary.uk-card-body h2, .uk-card-secondary.uk-card-body .uk-h2, .uk-card-secondary.uk-card-body h3, .uk-card-secondary.uk-card-body .uk-h3, .uk-card-secondary.uk-card-body h4, .uk-card-secondary.uk-card-body .uk-h4, .uk-card-secondary.uk-card-body h5, .uk-card-secondary.uk-card-body .uk-h5, .uk-card-secondary.uk-card-body h6, .uk-card-secondary.uk-card-body .uk-h6, .uk-card-secondary.uk-card-body .uk-heading-small, .uk-card-secondary.uk-card-body .uk-heading-medium, .uk-card-secondary.uk-card-body .uk-heading-large, .uk-card-secondary.uk-card-body .uk-heading-xlarge, .uk-card-secondary.uk-card-body .uk-heading-2xlarge, .uk-card-secondary.uk-card-body .uk-heading-3xlarge, .uk-card-secondary > :not([class*="uk-card-media"]) h1, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h1, .uk-card-secondary > :not([class*="uk-card-media"]) h2, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h2, .uk-card-secondary > :not([class*="uk-card-media"]) h3, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h3, .uk-card-secondary > :not([class*="uk-card-media"]) h4, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h4, .uk-card-secondary > :not([class*="uk-card-media"]) h5, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h5, .uk-card-secondary > :not([class*="uk-card-media"]) h6, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h6, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-small, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-medium, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-large, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-xlarge, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-2xlarge, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-3xlarge, .uk-overlay-primary h1, .uk-overlay-primary .uk-h1, .uk-overlay-primary h2, .uk-overlay-primary .uk-h2, .uk-overlay-primary h3, .uk-overlay-primary .uk-h3, .uk-overlay-primary h4, .uk-overlay-primary .uk-h4, .uk-overlay-primary h5, .uk-overlay-primary .uk-h5, .uk-overlay-primary h6, .uk-overlay-primary .uk-h6, .uk-overlay-primary .uk-heading-small, .uk-overlay-primary .uk-heading-medium, .uk-overlay-primary .uk-heading-large, .uk-overlay-primary .uk-heading-xlarge, .uk-overlay-primary .uk-heading-2xlarge, .uk-overlay-primary .uk-heading-3xlarge, .uk-offcanvas-bar h1, .uk-offcanvas-bar .uk-h1, .uk-offcanvas-bar h2, .uk-offcanvas-bar .uk-h2, .uk-offcanvas-bar h3, .uk-offcanvas-bar .uk-h3, .uk-offcanvas-bar h4, .uk-offcanvas-bar .uk-h4, .uk-offcanvas-bar h5, .uk-offcanvas-bar .uk-h5, .uk-offcanvas-bar h6, .uk-offcanvas-bar .uk-h6, .uk-offcanvas-bar .uk-heading-small, .uk-offcanvas-bar .uk-heading-medium, .uk-offcanvas-bar .uk-heading-large, .uk-offcanvas-bar .uk-heading-xlarge, .uk-offcanvas-bar .uk-heading-2xlarge, .uk-offcanvas-bar .uk-heading-3xlarge {
  color: #464964;
}

.uk-light a:hover, .uk-light .uk-link:hover, .uk-light .uk-link-toggle:hover .uk-link, .uk-section-primary:not(.uk-preserve-color) a:hover, .uk-section-primary:not(.uk-preserve-color) .uk-link:hover, .uk-section-primary:not(.uk-preserve-color) .uk-link-toggle:hover .uk-link, .uk-section-secondary:not(.uk-preserve-color) a:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-link:hover, .uk-section-secondary:not(.uk-preserve-color) .uk-link-toggle:hover .uk-link, .uk-tile-primary:not(.uk-preserve-color) a:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-link:hover, .uk-tile-primary:not(.uk-preserve-color) .uk-link-toggle:hover .uk-link, .uk-tile-secondary:not(.uk-preserve-color) a:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-link:hover, .uk-tile-secondary:not(.uk-preserve-color) .uk-link-toggle:hover .uk-link, .uk-card-primary.uk-card-body a:hover, .uk-card-primary.uk-card-body .uk-link:hover, .uk-card-primary.uk-card-body .uk-link-toggle:hover .uk-link, .uk-card-primary > :not([class*="uk-card-media"]) a:hover, .uk-card-primary > :not([class*="uk-card-media"]) .uk-link:hover, .uk-card-primary > :not([class*="uk-card-media"]) .uk-link-toggle:hover .uk-link, .uk-card-secondary.uk-card-body a:hover, .uk-card-secondary.uk-card-body .uk-link:hover, .uk-card-secondary.uk-card-body .uk-link-toggle:hover .uk-link, .uk-card-secondary > :not([class*="uk-card-media"]) a:hover, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-link:hover, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-link-toggle:hover .uk-link, .uk-overlay-primary a:hover, .uk-overlay-primary .uk-link:hover, .uk-overlay-primary .uk-link-toggle:hover .uk-link, .uk-offcanvas-bar a:hover, .uk-offcanvas-bar .uk-link:hover, .uk-offcanvas-bar .uk-link-toggle:hover .uk-link {
  color: #464964;
}

.uk-light .uk-text-meta, .uk-section-primary:not(.uk-preserve-color) .uk-text-meta, .uk-section-secondary:not(.uk-preserve-color) .uk-text-meta, .uk-tile-primary:not(.uk-preserve-color) .uk-text-meta, .uk-tile-secondary:not(.uk-preserve-color) .uk-text-meta, .uk-card-primary.uk-card-body .uk-text-meta, .uk-card-primary > :not([class*="uk-card-media"]) .uk-text-meta, .uk-card-secondary.uk-card-body .uk-text-meta, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-text-meta, .uk-overlay-primary .uk-text-meta, .uk-offcanvas-bar .uk-text-meta {
  color: #c2c4c9;
}

.uk-light .uk-text-muted, .uk-section-primary:not(.uk-preserve-color) .uk-text-muted, .uk-section-secondary:not(.uk-preserve-color) .uk-text-muted, .uk-tile-primary:not(.uk-preserve-color) .uk-text-muted, .uk-tile-secondary:not(.uk-preserve-color) .uk-text-muted, .uk-card-primary.uk-card-body .uk-text-muted, .uk-card-primary > :not([class*="uk-card-media"]) .uk-text-muted, .uk-card-secondary.uk-card-body .uk-text-muted, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-text-muted, .uk-overlay-primary .uk-text-muted, .uk-offcanvas-bar .uk-text-muted {
  color: #c2c4c9 !important;
}



</style>