const social = {

	share(friendName) {
		console.log(friendName + ' shares ' + this.name);
	},
	like(friendName) {
		console.log(friendName + ' likes ' + this.name);
	}

}
export default social;