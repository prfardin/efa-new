<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import PrContainer from '@c/core/PrContainer.vue'
import PrSection from '@c/core/PrSection.vue'
import PrTable from '@c/core/tables/table/PrTable.vue'
import PrTableHeading from '@c/core/tables/table/PrTableHeading.vue'
import PrCheckBox from '@c/core/form/PrCheckBox.vue'
import PrFlexTableRow from '@c/core/tables/flex-table/PrFlexTableRow.vue'
import PrTableCell from '@c/core/tables/table/PrTableCell.vue'
import PrTableRow from '@c/core/tables/table/PrTableRow.vue'
import PrPagination from '@c/core/PrPagination.vue'
import { useRoute } from 'vue-router'
import { notify } from '@u/util'

const url = ref(`/`)

const data = ref<any>([
  {title: 'one', content: 'ttt'},
  {title: 'two', content: 'tttt'},
  {title: 'three', content: 'ttttt'},
  {title: 'four', content: 'tttttt'}
])


function test() {
  notify("<span uk-icon='icon: line-check'></span><span>salam</span>", 'success')
}


</script>

<template>
  <pr-section>
    <pr-container small>
      <div class="uk-flex uk-flex-column">
        <div class="pr-overflow-x-auto uk pr-border pr-border-rounded-lg">
          <div class="uk-width-1-1 uk-display-inline-block pr-align-middle">
            <div style="width: 50px; height: 50px; background-color: red; pointer-events: auto; cursor: pointer" @click="test">sss</div>
          </div>
          <div class="uk-notification-message uk-notification-message-success">ssss</div>
        </div>
      </div>
    </pr-container>
  </pr-section>
</template>

<style scoped>
.pr-overflow-x-auto {
  overflow-x: auto;
}

</style>