const {MongoClient} =require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://2201130011aw:Haru!230@cluster0.rh23sub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
async function run(){
	const database = client.db('notes');
	const notes = database.collection('notes');
	// id が １のドキュメントを取得
	const query ={id: 1};
	const note = await notes.findOne(query);
	console.log(note);
	// 最後にクローズする
	await client.close();
}
run();