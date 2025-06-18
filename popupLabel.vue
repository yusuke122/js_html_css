
<template>
  <div class="popup-tabs">
    <div class="tab-controls">
      <button @click="prevPage" :disabled="currentPage === 0">←</button>

      <div class="tabs">
        <button
          v-for="(label, i) in currentTabs"
          :key="i"
          :disabled="label === 'dummy'"
        >
          {{ label }}
        </button>
      </div>

      <button @click="nextPage" :disabled="!canGoNext">→</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// ✅ 親からの props（ID 配列）を受け取る
const props = defineProps({
  idsFromParent: {
    type: Array,
    required: true
  }
})

// ✅ 100個（5x20）の初期ラベル配列（すべて dummy）
const groupLabelList = ref(Array.from({ length: 100 }, () => 'dummy'))

// ✅ 現在表示中のページ（0ページ目 = インデックス0〜4）
const currentPage = ref(0)

// ✅ ラベル更新（親から受け取った ID で上書き）
watch(
  () => props.idsFromParent,
  (newIds) => {
    newIds.forEach((id, index) => {
      if (index < 100) {
        groupLabelList.value[index] = id
      }
    })
  },
  { immediate: true }
)

// ✅ 現在の5件を取得（ページに応じて切り出し）
const currentTabs = computed(() => {
  const start = currentPage.value * 5
  return groupLabelList.value.slice(start, start + 5)
})

// ✅ 「→」ボタンで次に進めるか（5件のうち少なくとも1つが dummy でなければ可）
const canGoNext = computed(() => {
  const nextStart = (currentPage.value + 1) * 5
  const nextSlice = groupLabelList.value.slice(nextStart, nextStart + 5)
  return nextSlice.some(label => label !== 'dummy')
})

// ✅ ページ切り替え
const nextPage = () => {
  if (canGoNext.value) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 0) currentPage.value--
}
</script>

<style scoped>
.popup-tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tab-controls {
  display: flex;
  align-items: center;
}
.tabs {
  display: flex;
}
.tabs button {
  margin: 0 4px;
}
</style>


