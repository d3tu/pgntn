module.exports = class Pagination extends Array {
	constructor(array, size) {
		super();
		this.page = 0;
		while (array.length) {
			this.push(array.splice(0, size));
		}
	}

	get next() {
		this.page++;
		if (this.page > this.length - 1) this.page = 0;
		return this[this.page];
	}

	get back() {
		this.page--;
		if (this.page < 0) this.page = this.length - 1;
		return this[this.page];
	}
};
