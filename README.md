# AIT-Forum

### JSON の形式に関して

---

#### main.json -> すべての教科を表示するデータが入ります。

##### 教科 1 個分

1. "id": "数字が入ります",
2. "lesson_name": 授業の名前が入ります,
3. "teacher_name": 先生の名前が入ります,
4. "level": 教科の難易度の平均が入ります。計算して入れてください,
5. "day_of_week": 授業の曜日が入ります。,
6. "time": 授業の時間が入ります,
7. "total": 授業の評価の平均が入ります。計算して入れてください。

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
    3. api.py で REST API 形式で作成できるように BluePrint を登録してください。
       BluePrint を設定すると api.py で作成する api が api/<授業名など>と api/のあとに続く REST API を作成することができるようになります。
       参考に使ってください（https://snowsystem.net/python/flask/rest-api-blueprint/)
    4. static フォルダと template フォルダの場所が frontend にあるので読み込めるように設定してください (https://lightgauge.net/language/python/flask-default-path-change)

       <br/>

  - api.py
    <br/>
    1. api/<授業名> method=GET で授業名に応じた output/json を渡してください。
    2. api/ method=GET で main.json を渡してください。
    3. api/<授業名> method=POST で 授業名に応じた入力が**JSON 形式**で渡ってくるので input/json に登録していってください。(以前入ってきた値は消さない)
    4. 3 の続きで登録したら input/json 内のすべての値の平均値など計算して output/json に書き込んで返却してください
       参考にどうぞ (https://amateur-engineer-blog.com/flask-api/)
       <br/>

- **frontend**

  1. CSS と HTML の作成をお願いします。作成するときに JavaScript 側で template タグを用いて描画をするので構造が変わるかもしれないです。**セレクターには要素セレクターと ID セレクターは使わないでいただけると助かります。クラスセレクターのみで願いします。**
     template タグ (https://qiita.com/saka212/items/ac77e778b7e323749e61)
     CSS セレクター (https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Selectors)
  2. HTML はメイン画面用に index.html、授業個別ページ用にもう１つ HTML の計２個の HTML をお願いします。
  3. 描画や JSON ファイルのやり取りのために JavaScript を使います。
