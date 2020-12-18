import employees from "./fixture/employees.json";

class Repository {
	constructor() {
		this.employees = employees;
	}

	/**
	 * @public
	 * @method getEmployees
	 * @param success
	 * @returns {Promise}
	 */
	getEmployees(success) {
		success(this.employees)

		return Promise.resolve(this.employees);
	}
}

export default Repository;
