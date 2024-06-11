var express = require('express');
var router = express.Router();

//接続情報を設定
const { MongoClient } = require("mongodb");
const uri ="mongodb+srv:2201130011aw:Haru!230@cluster0.rh23sub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/',async(req,res) => {
	//データベース、コレクションを指定
	const detabese = client.db('notes');
	const notes = database.collection('notes');

	//id が１のドキュメントを取得
	const query = {id:2};
	const note = await notes.findOne(query);

	res.json(note.title);
})

module.exports = router;