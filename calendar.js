<template>
  <div>
    <VCalendar
      :attributes="calendarAttributes"
      @dayclick="onDaySelect"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import 'v-calendar/style.css'

const selectedDate = ref(null)

function onDaySelect(day) {
  selectedDate.value = day.date
}

// VCalendar の attributes 配列を動的に生成
const calendarAttributes = computed(() => {
  if (!selectedDate.value) return []
  return [
    {
      key: 'selected',
      dates: selectedDate.value,
      customData: { isSelected: true },
      popover: { label: '選択中' },
      contentClass: 'selected-day'  // ここで CSS クラスを指定
    }
  ]
})
</script>

<style scoped>
.selected-day {
  border: 2px solid gray;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
