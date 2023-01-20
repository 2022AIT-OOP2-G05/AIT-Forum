# AIT-Forum

### JSON の形式に関して

---

#### main.json -> すべての教科を表示するデータが入ります。

##### 教科 1 個分

  "lesson_name": "キャリア意識形成",
  "teacher_name": "水野　勝教",
  "day_of_week": "月",
  "time": 3,
  "number_of_credits": 2,
  "level": 2,
  "hit_level": 60
  "teacher_review": 3
  "adequacy": 3,
  "test_level": 3,
  "task_level": 4,
  "middle_test_level": 5
  "carry": 90,
  "total": 2
  
  数字のところは入力で入って来る。　lesson_name teacher_name　　day_of_week time number_of_credits 手動で入れる。


#### items フォルダにはそれぞれの教科のフォルダが入ります。

- items 下の input/json -> それぞれの教科に対して User が入力したデータが入る

- items 下の output/json -> input/ json のデータを計算して平均値などを入力する

### フォルダ構成に関して

---

- **backend**

  - main.py
    <br/>

    1. index.html を渡す
    2. /<授業名>で 詳細画面を渡す。 HTML の中身は JavaScript で描画するのでどの授業名でも同じ HTML を渡してくれれば大丈夫です。
    3. static フォルダと template フォルダの場所が frontend にあるので読み込めるように設定してください (https://lightgauge.net/language/python/flask-default-path-change)
    4. api/<授業名> method=GET で授業名に応じた output/json を渡してください。
    5. api/ method=GET で main.json を渡してください。
    6. api/<授業名> method=POST で 授業名に応じた入力が**JSON 形式**で渡ってくるので input/json に登録していってください。(以前入ってきた値は消さない)
    7. 3 の続きで登録したら input/json 内のすべての値の平均値など計算して output/json に書き込んで返却してください
       参考にどうぞ (https://amateur-engineer-blog.com/flask-api/)
       <br/>

- **frontend**

  1. CSS と HTML の作成をお願いします。作成するときに JavaScript 側で template タグを用いて描画をするので構造が変わるかもしれないです。**セレクターには要素セレクターと ID セレクターは使わないでいただけると助かります。クラスセレクターのみで願いします。**
     template タグ (https://qiita.com/saka212/items/ac77e778b7e323749e61)
     CSS セレクター (https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Selectors)
  2. HTML はメイン画面用に index.html、授業個別ページ用にもう１つ HTML の計２個の HTML をお願いします。
  3. 描画や JSON ファイルのやり取りのために JavaScript を使います。
