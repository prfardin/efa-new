<script setup lang="ts">

// camelCase in JavaScript


import PrChip from '@c/core/PrChip.vue'
import PrFlexTable from '@c/core/tables/flex-table/PrFlexTable.vue'
import { ref } from 'vue'
import PrFlexTableRow from '@c/core/tables/flex-table/PrFlexTableRow.vue'
import PrFlexTableCell from '@c/core/tables/flex-table/PrFlexTableCell.vue'
import PrFlexTableHeading from '@c/core/tables/flex-table/PrFlexTableHeading.vue'
import PrCheckBox from '@c/core/form/PrCheckBox.vue'
import PrAvatar from '@c/core/PrAvatar.vue'
import Avatar from '@i/avatar.png'
import PrButton from '@c/core/PrButton.vue'
import PrAccordion from '@c/core/PrAccordion.vue'
import PrContainer from '@c/core/PrContainer.vue'
import PrSection from '@c/core/PrSection.vue'

const BlogPost = {
  props: ['postTitle'],
  emits: ['updatePost'],
  template: `
    <h3>{{ postTitle }}</h3>
  `
}

function onUpdatePost() {

}

const data = ref<any>([
  {title: 'one', content: 'ttt'},
  {title: 'two', content: 'tttt'},
  {title: 'three', content: 'ttttt'},
  {title: 'four', content: 'tttttt'}
])

</script>

<template>
  <pr-section>
    <pr-container >
      <pr-accordion :items="data" title-mode="plus"/>
    </pr-container>
  </pr-section>

<!--  <div class="uk-container">
    <pr-flex-table >
      <template #head>
        <pr-flex-table-heading>
          <div class="is-shrink">
            <div class="uk-flex uk-flex-middle">
              <pr-check-box name=""/>
            </div>
          </div>
          <div class="is-grow">ss</div>
          <div>sss</div>
          <div>ssss</div>
          <div>ssss</div>
          <div>ssss</div>
          <div>ssss</div>
        </pr-flex-table-heading>
      </template>
      <template #cell>
        <pr-flex-table-row>
          <pr-flex-table-cell>
            <div class="is-shrink">
              <div class="uk-flex uk-flex-middle">
                <pr-check-box name=""/>
              </div>
            </div>
            <div class="is-grow">
              <div class="uk-flex uk-flex-middle">
                <pr-avatar small circle class="pr-cream-b-c">
                  <img :src="Avatar" alt="" class="uk-object-cover">
                </pr-avatar>
                <div class="uk-margin-small-left">
                  <div>Anna Vrinkof</div>
                  <div class="uk-text-meta">UI/UX designer</div>
                </div>
              </div>
            </div>
            <div>
              UX Design
            </div>
            <div>
              $49/hour
            </div>
            <div>
              $49/hour
            </div>
            <div>
              <pr-chip mode="pastel" rounded="full" color="success">Available</pr-chip>
            </div>
            <div>
              <pr-button square default>click</pr-button>

            </div>
          </pr-flex-table-cell>
          <pr-flex-table-cell>ssss</pr-flex-table-cell>
          <pr-flex-table-cell>ssss</pr-flex-table-cell>
        </pr-flex-table-row>
      </template>
    </pr-flex-table>
  </div>-->
<!--  <pr-chip rounded="md" size="sm" />-->

  <!-- kebab-case in HTML -->
  <blog-post post-title="hello!" @update-post="onUpdatePost"></blog-post>

</template>

<style scoped>

</style>