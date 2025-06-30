選択中（日付に “selected” 属性をつけたとき）のスタイルは、`.vc-attr` ブロック内で定義されている CSS 変数でコントロールされています。
特に「塗りつぶし（solid）ハイライト」を使う場合は以下の２つを上書きすれば OK です。

/* Light テーマで solid ハイライトを変えたい例 */
.vc-light.vc-attr {
  /* 選択中の日付の背景色 */
  --vc-highlight-solid-bg: #10b981;           /* 例: グリーン */
  /* 選択中の日付の文字色 */
  --vc-highlight-solid-content-color: #ffffff; /* 例: 白 */
}

もし「アウトライン（outline）ハイライト」を使っているなら、こちらの変数を上書きします。

.vc-light.vc-attr {
  /* アウトライン背景（塗りつぶさない場合に輪郭下地） */
  --vc-highlight-outline-bg: #ffffff;
  /* アウトラインの線色 */
  --vc-highlight-outline-border: #10b981;
  /* アウトライン内文字色 */
  --vc-highlight-outline-content-color: #10b981;
}

――――

◆ そのほかカスタマイズ可能な変数一覧

--vc-content-color                   // 日付セルの文字色（vc-attr 内で使われる場合あり）
--vc-highlight-light-bg             // “light” タイプのハイライト背景
--vc-highlight-light-content-color  // “light” タイプのハイライト文字色
--vc-dot-bg                         // ドットタイプのハイライト色
--vc-bar-bg                         // バータイプのハイライト色

――――

■ ダークテーマを使っている場合は `.vc-dark.vc-attr` 内の同名変数を上書きしてください。

以上をオーバーライドすることで、選択中の日付セルの背景色／文字色を自由にカスタマイズできます。