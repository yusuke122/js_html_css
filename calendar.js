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
/*
とても良い視点です。実際、Vue の `<style scoped>` によってスコープされた CSS は**通常のセレクタでは子コンポーネント内の要素に影響を及ぼせない**ため、`v-calendar` のようなサードパーティコンポーネントに対してスタイルを上書きしたい場合は `::v-deep`（または `:deep()`）の使用が必要になることがよくあります。

---

### 🔍 今回の `.selected-outline .vc-day-content` はどうか？

このスタイルが **あなた自身の `contentClass` で付与したクラス（`.selected-outline`）の中で `.vc-day-content` に適用されるもの**であれば、scopedスタイルの中でも問題なく反映されるはずです。なぜなら：

- `.selected-outline` は自分で付与しているカスタムクラス ✅
- それに続く `.vc-day-content` はその**内部要素に対する指定**なので、スコープの範囲内で完結しています ✅

したがって、**このケースでは `:deep()` は不要**です。

---

### 🔧 逆に `:deep()` が必要なケース

たとえば `v-calendar` 内部の `.vc-pane-header` や `.vc-title` など、**あなたのコンポーネントからは直接アクセスできない内部の要素**をスタイリングしたい場合は：

```css
:deep(.vc-pane-header) {
  background-color: #f5f5f5;
}
```

のように `:deep()` を用いる必要があります。

---

### ✅ 結論

- `.selected-outline .vc-day-content` → 自分で定義した `contentClass` 内なら **OK（:deep 不要）**
- `.vc-title` や `.vc-weeks` → v-calendar 側がレンダリングしている領域なので **:deep が必要**

---

今の構成なら、意図した装飾はそのまま適用されるはずですが、もし「スタイルが効かないな？」と感じたときは `devtools` で適用状況や競合クラスを確認すると原因がつかみやすいですよ。気になるところがあればCSS一緒に見直しましょうか？
*/
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
