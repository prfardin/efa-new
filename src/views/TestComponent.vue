<script setup lang="ts">
import { ref } from 'vue'
import PrContainer from '@c/core/PrContainer.vue'
import PrSection from '@c/core/PrSection.vue'
import PrTable from '@c/core/tables/table/PrTable.vue'
import PrTableHeading from '@c/core/tables/table/PrTableHeading.vue'
import PrCheckBox from '@c/core/form/PrCheckBox.vue'
import PrFlexTableRow from '@c/core/tables/flex-table/PrFlexTableRow.vue'
import PrTableCell from '@c/core/tables/table/PrTableCell.vue'
import PrTableRow from '@c/core/tables/table/PrTableRow.vue'
import PrPagination from '@c/core/PrPagination.vue'

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

const test = ref({
  current: 1,
  total: 10,
  totalPages: 12,
  loader: false,
  perPage: 10,
  from: 1,
  to: 2
})





</script>

<template>
  <pr-section>
    <pr-container small>
      <div class="uk-flex uk-flex-column">
        <div class="pr-overflow-x-auto uk pr-border pr-border-rounded-lg">
          <div class="uk-width-1-1 uk-display-inline-block pr-align-middle">
            <div>
              <pr-table hover striped>
                <template #head >
                  <pr-table-heading style="width: 20px">
                    <div>
                      <pr-check-box mode="square" name="" />
                    </div>
                  </pr-table-heading>
                  <pr-table-heading>Collaborator</pr-table-heading>
                  <pr-table-heading>Expertise</pr-table-heading>
                  <pr-table-heading>Rate</pr-table-heading>
                  <pr-table-heading>Status</pr-table-heading>
                  <pr-table-heading>Status</pr-table-heading>
                  <pr-table-heading>Status</pr-table-heading>
                </template>
                <template #row >
                  <pr-table-row v-for="(d, index) in data" :key="index">
                    <pr-table-cell>
                        <pr-check-box name="" />
                    </pr-table-cell>
                    <pr-table-cell>{{ d.title }}</pr-table-cell>
                    <pr-table-cell>{{ d.content }}</pr-table-cell>
                    <pr-table-cell>sss</pr-table-cell>
                    <pr-table-cell>test</pr-table-cell>
                    <pr-table-cell>test</pr-table-cell>
                    <pr-table-cell>test</pr-table-cell>
                  </pr-table-row>
                </template>
              </pr-table>
            </div>
            <div class="uk-padding">
              <div class="uk-child-width-1-1" uk-grid>
                <div> <pr-pagination :paginate="test" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </pr-container>
  </pr-section>
  <blog-post post-title="hello!" @update-post="onUpdatePost"></blog-post>

</template>

<style scoped>
.pr-overflow-x-auto {
  overflow-x: auto;
}

</style>