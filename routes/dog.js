var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      // ここを修正: title 変数を追加して渡す
      res.render('dog', { title: 'ランダムな犬の画像', dogImage: data.message });
    } else {
      console.error('犬の画像の取得に失敗しました:', error || `Status Code: ${response.statusCode}`);
      res.render('error', { title: 'エラー', message: '犬の画像が読み込めませんでした', error: error });
    }
  });
});

module.exports = router;