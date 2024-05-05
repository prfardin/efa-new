<script setup lang="ts">
import { ref } from 'vue'




// components
import PrIcon from '@c/core/icon.vue'
import PrGrid from '@c/core/grid.vue'
import { useI18n } from 'vue-i18n'

// i18n
const { t } = useI18n()


interface Options {
  icon: string
  title: string
  description: string
  arrow?: string
}

const options = ref<Options[]>([
  {icon: "home-alt", title: "انبار داری", description: "متعلق به E-Commerce", arrow: "line-arrow-right" },
  {icon: "string", title: "", description: "", arrow: "" }

])

const isSelected = ref<boolean>(true)


</script>

<template>
  <div
    class="uk-height-1-1 uk-tile uk-tile-default uk-flex uk-flex-left uk-flex-top"
    style="background-color: #f5f6f9; padding: 0"
  >
    <div>
      <pr-grid small class="uk-child-width-1-1">
        <div v-for="(item, index) in options" :key="index">
          <div
            class="pr-select-card"
            :class="{ selected: isSelected }"
          >
            <pr-grid small class="uk-flex-middle">
              <div>
                <div
                  class="type pr-select-card-icon"
                >
                  <pr-icon :icon="item.icon" ratio="1.3"></pr-icon>
                </div>
              </div>
              <div>
                <h6
                  class="uk-margin-remove-bottom uk-text-bold pr-margin-xsmall-left"
                >
                  {{ t(item.title) }}
                </h6>
                <p
                  class="uk-margin-remove-top pr-select-card-description"
                >
                  {{ item.description }}
                </p>
              </div>
              <div class="uk-width-expand uk-text-left">
                <pr-icon v-if="item.arrow" :icon="item.arrow" style="color: #045cfa"></pr-icon>
              </div>
            </pr-grid>
          </div>
        </div>
        <div>
          <div
            class="pr-select-card"
          >
            <pr-grid small class="uk-flex-middle">
              <div>
                <div
                  class="type pr-select-card-icon"
                >
                  <pr-icon icon="box" ratio="1.3"></pr-icon>
                </div>
              </div>
              <div>
                <h6
                  class="uk-margin-remove-bottom"
                  style="margin-left: 5px; font-weight: 700"
                >
                  بسته بندی
                </h6>
                <p
                  class="uk-margin-remove-top"
                  style="
              margin-left: 5px;
              font-size: 13px;
              color: #868d9a;
              font-weight: 600;
              margin-top: 3px !important;
            "
                >
                  برای کسب و کار های کوچک
                </p>
              </div>
            </pr-grid>
          </div>
        </div>
      </pr-grid>
    </div>
  </div>
</template>

<style lang="less">
.type.pr-select-card-icon .uk-icon {
  .pr-icon-primary {
    color: rgba(4, 93, 255, 0.13);
    transition: color .2s;
  }

  .pr-icon-secondary {
    color: rgba(4, 93, 255, 0.19);
    transition: color .2s;
  }

  .pr-icon-tertiary {
    color: rgba(4, 93, 255, 0.24);
    transition: color .2s;
  }

  .pr-icon-quaternary {
    color: rgba(4, 93, 255, 0.15);
    transition: color .2s;
  }
}

.pr-select-card.selected .type.pr-select-card-icon .uk-icon,
.pr-select-card:hover .type.pr-select-card-icon {
  .pr-icon-primary {
    color: #4d8bff;
  }

  .pr-icon-secondary {
    color: #ccdeff;
  }

  .pr-icon-tertiary {
    color: #ffffff;
  }

  .pr-icon-quaternary {
    color: #b3cdff;
  }
}

.pr-select-card {
  padding: 20px 25px;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all .2s;
}

.pr-select-card:hover {
  background-color: #edf4ff;
  border: 2px solid #576cb5;
  cursor: pointer;
}

.pr-select-card.selected {
  background-color: #edf4ff;
  border: 2px solid #576cb5;
}

.pr-select-card-icon {
  border-radius: 8px;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border: 2px solid #bbc7dd;
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: background-color, border;
  transition-duration: .2s;
}

.pr-select-card:hover .pr-select-card-icon {
  border: 2px solid #045dff;
  background-color: #045dff;
}

.pr-select-card.selected .pr-select-card-icon {
  background-color: #045dff;
  border: 2px solid #045dff;
}

.pr-select-card-description{
  margin-left: 5px;
  font-size: 13px;
  color: #868d9a;
  font-weight: 600;
  margin-top: 3px !important;
}


</style>
