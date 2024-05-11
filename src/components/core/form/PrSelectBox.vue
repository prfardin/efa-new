<script lang="ts" setup>
// import { SelectBoxClassObject, SelectBoxIconClassObject } from '@u/classes'
import { ref, onMounted, watch } from "vue";
import { drop, RefElement } from '@u/util'
import { SelectBoxPropsType } from '@u/props'
import UIkit from 'uikit'

// need to edit the type because it doesn't work
const props = withDefaults(defineProps<SelectBoxPropsType>(), {
  mode: 'click',
  node: 'name',
  d: null,
  id: 'id'
})

const model = defineModel()


const el = ref<RefElement>(null)
const isOpen = ref<boolean>(false)


onMounted(() => {
  drop(el.value, {
    duration: 100,
    // @ts-ignore
    mode: props.mode,
    pos: 'bottom-center',
    offset: 5,
    boundary: '.pr-select',
    stretch: 'x',
    flip: false
  })
  // @ts-ignore
  UIkit.util.on(el.value, 'beforeshow', (e) =>  {
    isOpen.value = true
  })
  // @ts-ignore
  UIkit.util.on(el.value, 'beforehide', (e) =>  {
    isOpen.value = false
  })
})


watch(
  () => props.d,
  newV => {
    const v = props.lists?.find((list: any) => list[props.id] === newV)
    if (props.searchable) {
      model.value = v ? v[props.node as any] : newV
    } else {
      props.d && (model.value = v ? v[props.node as any] : newV)
      console.log(newV)
    }
  },
  { immediate: true }
)

//need change
function clicked(list: any) {
  model.value = list[props.node as any]
  drop(el.value).hide(false)
}

</script>

<template>
  <div>
    <div class="pr-select">
      <div class="uk-position-relative" :class="{ 'open': isOpen }">
        <input class="uk-select"
         readonly
         type="text"
         :name="name"
         :id="name"
         v-model="model"
        />
        <div>{{ model }}</div>
        <span class="pr-select-angle" :class="{divider: props.divider}"></span>
      </div>
      <div class="pr-option-box" ref="el">
        <div class="scrollbar">
          <ul class="uk-nav uk-dropdown-nav">
            <li v-for="(list, index) in lists" :key="index">
              <a class="pr-option" @click="clicked(list)" :class="{'uk-active': list === model}">{{ list[node] }}</a>
            </li>
            <li class="uk-text-center" v-if="!lists?.length">هیچ داده ای پیدا نشد</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.uk-select {
  background: #fdfdfd;
  padding-left: 8px;
  display: block;
}

.uk-select:focus {
  background: #fdfdfd;
  border-color: #ededf2;
}

.pr-select-angle {
  width: 40px;
  height: 36px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.pr-select-angle::after {
  content: '';
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #d3d3df;
  -webkit-mask-image: url(@i/core/unicons/line/icons/angle-down.svg);
  mask-image: url(@i/core/unicons/line/icons/angle-down.svg);
  transition:transform .2s ease-in-out;
}



.open .pr-select-angle::after {
  transform: rotate(0.5turn);
}

.divider::before {
  content: '';
  position: absolute;
  display: inline-block;
  border-left: 1px solid #ededf2;
  height: 18px;
  left: 0;
}

.uk-select:not([multiple]):not([size]) {
  height: 36px;
  padding-right: 40px;

}

.pr-option-box {
  border: 1px solid #ededf2;
  padding: 8px;
  background-color: #fdfdfd;
  overflow: auto;
  max-height: 240px;
}

.pr-option-box.uk-open {
  border-color: #015eff;
}

.pr-option {
  color: #464964;
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: .5rem;
  padding: .5rem .75rem;
  position: relative;
  transition: color, background-color, border-color, text-decoration-color, fill, stroke .2s ease-in-out;
  -webkit-user-select: none;
  user-select: none;
}

.pr-option:hover {
  background: rgba(1, 94, 255, 0.2)
}

</style>