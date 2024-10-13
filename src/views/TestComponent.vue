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
import PrButton from '@c/core/PrButton.vue'
import PrGrid from '@c/core/PrGrid.vue'
import PrButtonGroup from '@c/core/PrButtonGroup.vue'

const url = ref(`/`)

const data = ref<any>([
  {title: 'one', content: 'ttt'},
  {title: 'two', content: 'tttt'},
  {title: 'three', content: 'ttttt'},
  {title: 'four', content: 'tttttt'}
])


function test() {
  notify("<span uk-icon='icon: line-check'></span><span>salam</span>")
}


</script>

<template>
  <pr-section>
    <pr-container small>
      <div class="uk-margin-bottom">
        <pr-button mode="pastel" tag="button" color="secondary" rounded="md">test</pr-button>

      </div>
      <pr-button-group>
          <pr-button mode="pastel" tag="button" color="secondary" rounded="md">test</pr-button>
          <pr-button mode="pastel" tag="button" color="secondary" icon="line-user" rounded="md">test</pr-button>
          <pr-button mode="pastel" tag="button" color="success" rounded="md">test</pr-button>
          <pr-button mode="pastel" tag="button" color="warning" icon="line-user" ratio=".7" rounded="md">test</pr-button>
          <pr-button mode="pastel" tag="button" color="danger" rounded="md">test</pr-button>
      </pr-button-group>
    </pr-container>
  </pr-section>
</template>

<style scoped>
.pr-overflow-x-auto {
  overflow-x: auto;
}

</style>