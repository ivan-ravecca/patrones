class DBConnection {
	constructor(conString) {
		this.conString = conString
		this.id = Math.round(Math.random() * 2000);
	}

	static getInstance(conString) {
		if (!this.instance) {
			this.instance = new DBConnection(conString);
		}

		return this.instance;
	}
}
export default DBConnection;
