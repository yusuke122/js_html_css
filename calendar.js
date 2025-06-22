<template>
  <v-calendar
    v-model="selectedData"
    :attributes="calendarAttributes"
  />
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedData = ref(new Date())

// ✅ APIから受け取った日付とスコアの例（ISO形式で指定）
const scoreData = [
  { date: '2025-06-20', score: 90 },
  { date: '2025-06-21', score: 60 },
  { date: '2025-06-22', score: 30 },
]

// 🔁 色分類ロジック：スコアに応じて色を返す
function getColor(score) {
  if (score >= 80) return 'red'
  if (score >= 50) return 'blue'
  return 'gold'
}

// 📆 表示用の attributes を計算
const calendarAttributes = computed(() => {
  const colorDots = scoreData.map(item => ({
    key: `dot-${item.date}`,
    dates: new Date(item.date),
    dot: {
      color: getColor(item.score),
      backgroundColor: getColor(item.score),
    },
    order: 1,
  }))

  const selectedRing = {
    key: 'selected-ring',
    dates: selectedData.value,
    customData: { selected: true },
    contentClass: 'selected-outline',
    order: 0,
  }

  return [...colorDots, selectedRing]
})
</script>

<style scoped>
/* 🟠 色付き丸のスタイルはv-calendarが自動生成 */

/* 🔘 選択された日付の外枠 (グレーのリング) */
.selected-outline .vc-day-content {
  border: 4px solid #ccc;
  border-radius: 1rem;
  background-color: transparent !important;
  box-sizing: border-box;
  padding: 2px;
}
</style>
