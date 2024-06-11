const{ MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://2201130011aw:Haru!230@cluster0.rh23sub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
async function run(){
	const database = client.db('notes');
	const movies = database.collection('notes');
	// id が１のデータを更新
	const movie =await movies.replaceOne({
		id: 1,
		title: 'ノート１のタイトルです',
		subTitle: 'ノート１のサブタイトルです',
		bodyText: 'ノート１の本文です'
	},
	{
		id: 2,
		title: 'ノート２のタイトルです',
		subTitle: 'ノート２のサブタイトルです',
		bodyText: 'ノート２の本文です'
	});
	console.log(movie);
	// 最後にクローズする
	await client.close();
}
run()