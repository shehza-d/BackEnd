console.log(process.platform)
console.log(process.env.USER)

// const {readFile} = require('fs').promises;
// const file = await =()=>{
// 	console.log('shehzad');
// }


//.get is not to modify data reather just to get data
// .gets 1st argument is the path user will navigate to
app.get('/', (request, response) => {

	// if(err) response.status(500).send("sorry, out of Order!");


	console.log(`Shehzad`)

})




app.listen(process.env.PORT || 3000, () => console.log(`Shehzad app is avaliable on local host 3000`))



// use promises instead of callbacks to avoid callbacks hell