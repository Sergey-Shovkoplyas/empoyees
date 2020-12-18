import _ from "lodash";

class Employer {
	constructor(entity)  {
		this.entity = _.cloneDeep(entity || {});
		this.TargetConstructor = new.target;
	}

	/**
	 * @method getId
	 * @returns {string|number}
	 */
	getId() {
		return this.entity.id || "";
	}

	/**
	 * @method getFirstName
	 * @returns {string}
	 */
	getFirstName() {
		return this.entity.firstName || "";
	}

	/**
	 * @method getLastName
	 * @returns {string}
	 */
	getLastName() {
		return this.entity.lastName || "";
	}

	/**
	 * @method getBirthdayDate
	 * @returns {string}
	 */
	getBirthdayDate() {
		return this.entity.dob || "";
	}
}


export default Employer;
