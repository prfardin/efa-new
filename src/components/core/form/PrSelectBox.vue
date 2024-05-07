<script lang="ts" setup>
// import { SelectBoxClassObject, SelectBoxIconClassObject } from '@u/classes'
import { ref, onMounted, watch } from "vue";
import { drop, RefElement } from '@u/util'
import { SelectBoxPropsType } from '@u/props'

// need to edit the type because it doesn't work
const props = withDefaults(defineProps<SelectBoxPropsType>(), {
  mode: 'click',
  node: 'name',
  d: null,
  id: 'id'
})

const model = defineModel()

// const emit = defineEmits(['update:modelValue'])

const el = ref<RefElement>(null)


//need change
function clicked(list: any) {
  model.value = list[props.node as any]
  console.log(list[props.node as any])
  // emit('update:modelValue', list[props.id])
  // model
  drop(el.value).hide(false)
}

watch(
  () => props.d,
  newV => {
    const v = props.lists?.find((list: any) => list[props.id] === newV)
    props.d && (model.value = v ? v[props.node as any] : newV)
  },
  { immediate: true }
)

onMounted(() => {
  drop(el.value, {
    duration: 100,
    mode: props.mode,
    pos: 'bottom-center',
    offset: 5
  })
})

</script>

<template>
  <div>
    <div class="uk-form-controls miss-control-input" :class="{'miss-input-has-value': model }">
      <div>
        <input class="uk-select uk-width-1-1 uk-input"
         readonly
         type="text"
         :name="name"
         :id="name"
         v-model="model"
        />
      </div>
      <div class="miss-option-box" ref="el">
        <div class="scrollbar">
          <ul class="uk-nav uk-dropdown-nav">
            <li class="miss-option" v-for="(list, index) in lists" :key="index">
              <a class="uk-preserve-color" @mousedown="clicked(list)" :class="{'uk-active': list === model}">{{ list[node] }}</a>
            </li>
            <li class="uk-text-center" v-if="!lists?.length">هیچ داده ای پیدا نشد</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>


</style>