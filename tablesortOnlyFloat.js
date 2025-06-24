Tablesort.extend('number-with-placeholder', function(item) {
  // この関数でその列のデータ形式を検出
  return /^-?\d+(?:\.\d+)?$/.test(item) || item.trim() === '---';
}, function(a, b) {
  const parse = val => val.trim() === '---' ? NaN : parseFloat(val);

  const aVal = parse(a);
  const bVal = parse(b);

  // NaN 同士の比較なら同順位
  if (isNaN(aVal) && isNaN(bVal)) return 0;
  // NaN は常に末尾に
  if (isNaN(aVal)) return 1;
  if (isNaN(bVal)) return -1;

  return aVal - bVal;
});