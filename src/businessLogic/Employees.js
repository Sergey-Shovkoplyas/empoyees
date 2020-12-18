class Employees {
	constructor(props) {
		this.Repository = props.dependencies.Repository;
		this.EmployeesEntity = props.dependencies.EmployeesEntity;
	}

	/**
	 * @private
	 * @method _getEmployees
	 * @returns {Promise}
	 */
	_getEmployees(resultContainer) {
		return new Promise((resolve) => {
			this.Repository.getEmployees((employees) => {
				resultContainer.employees = employees;

				resolve();
			}, resolve);
		});
	}

	/**
	 * @public
	 * @method getInitialProps
	 * @return {Promise}
	 */
	getInitialProps() {
		let result = {
			employees: []
		};

		return Promise.all([
			this._getEmployees(result),
		])
			.then(() => result)
			.catch(() => result);
	}

	/**
	 * @public
	 * @method normalizeInitialProps
	 * @param initialData {Object}
	 * @returns {{
	 *   faq: Array
	 * }}
	 */
	normalizeInitialProps(initialData) {
		return {
			employees: initialData.employees.map((item) => new this.EmployeesEntity(item)),
		};
	}
}

export default Employees;
