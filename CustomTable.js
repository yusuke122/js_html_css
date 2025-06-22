<template>
  <table ref="sortTable">
    <thead>
      <tr>
        <th data-sort-method="custom-int">順位</th>
        <th data-sort-method="custom-float">スコア</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.rank">
        <td>{{ row.rank }}</td>
        <td>{{ row.score ?? '---' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Tablesort from 'tablesort';

export default {
  data() {
    return {
      rows: [
        { rank: '1', score: '125.5000' },
        { rank: '10', score: '250.0500' },
        { rank: '2', score: null },
        { rank: '3', score: '120.0000' },
      ]
    }
  },
  mounted() {
    // カスタム整数ソート
    Tablesort.extend('custom-int', function(item) {
      return /^\d+$/.test(item.trim());
    }, function(a, b) {
      return parseInt(a, 10) - parseInt(b, 10);
    });

    // カスタム小数ソート（--- 対応）
    Tablesort.extend('custom-float', function(item) {
      return /^-?\d+\.\d{4}$/.test(item.trim()) || item.trim() === '---';
    }, function(a, b) {
      const parseValue = val => val.trim() === '---' ? Infinity : parseFloat(val);
      return parseValue(a) - parseValue(b);
    });
    // Tablesort.extend('custom-float', function(item) {
    //   return /^-?\d+\.\d{4}$/.test(item.trim()) || item.trim() === '---';
    // }, function(a, b) {
    //   const isMissing = val => val.trim() === '---';
    
    //   if (isMissing(a) && isMissing(b)) return 0;
    //   if (isMissing(a)) return 1; // 'a' は欠損 → 'b' より下に
    //   if (isMissing(b)) return -1; // 'b' は欠損 → 'a' より上に
    
    //   return parseFloat(a) - parseFloat(b);
    // });


    // 初期化
    this.$nextTick(() => {
      new Tablesort(this.$refs.sortTable);
    });
  }
}
</script>
