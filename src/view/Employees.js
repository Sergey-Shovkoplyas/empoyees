import React from 'react';

import alphabet from '../businessLogic/fixture/alphabet.json';
import month from '../businessLogic/fixture/months.json';

import AlphabetList from "./alphabetList/AlphabetList";
import ActiveList from "./activeList/ActiveList";

class Employees extends React.Component {
    constructor(props) {
        super(props);

        this.employees = this.props.initialData.employees;
        this.employeesIdActive = this.props.initialData.employeesIdActive;

        this.alphabet = alphabet;
        this.month = month;

        this.state = {
            employees: this._getAlphabetEmployers(),
            employeesIdActive: this.employeesIdActive
        }

        this._onToggleActiveEmployer = this._onToggleActiveEmployer.bind(this);
        this._isActiveEmployer = this._isActiveEmployer.bind(this);
        this._resetActive = this._resetActive.bind(this);
    }

    /**
     * @private
     * @method _getAlphabetEmployers
     * @returns {Array}
     */
    _getAlphabetEmployers() {
        let alphabetEmployers = this.employees.sort((a, b) => {
            if (a.getLastName().charAt(0) < b.getLastName().charAt(0)) return -1
            if (a.getLastName().charAt(0) > b.getLastName().charAt(0)) return 1
            return 0
        });

        return alphabetEmployers
    }

    /**
     * @private
     * @method _getActiveEmployers
     * @returns {Array}
     */
    _getActiveEmployers() {
        let activeEmployers = this.state.employees.filter((employer) => {
            let isActive = this.state.employeesIdActive.find((activeId) => {
                return activeId === employer.getId();
            })
            return isActive
        })

        return activeEmployers
    }

    /**
     * @private
     * @method _getSortedByLetter
     * @returns {{
     *              attribute: {string}
     *              items: [
     *                  {
     *                      item: {Object},
     *                      isActive: {Boolean}
     *                   }
     *              ]
     * }}
     */
    _getSortedByLetter() {
        let sortedByLetter = this.alphabet.map((letter, ind, arr) => {
            let itemsList = this._filterByLetter(letter),
                itemsWithStatus = itemsList.map((item) => {
                let isActive = this._isActiveEmployer(item);

                return {item, isActive}
            })

            return {
                letter: letter,
                items: itemsWithStatus
            }
        });

        return sortedByLetter;
    }

    /**
     * @private
     * @method _filterByLetter
     * @returns {Array}
     */
    _filterByLetter(letter) {
        return this.state.employees.filter((employer) => {
            return employer.getLastName().charAt(0).toLocaleLowerCase() === letter
        })
    }

    /**
     * @private
     * @method _filterByLetter
     * @returns {Boolean}
     */
    _isActiveEmployer(employer) {
        // console.log("run _isActiveEmployer", this.state.employeesIdActive)
        return !!this.state.employeesIdActive.find((id) => id === employer.getId())
    }

    _onToggleActiveEmployer(id) {
        this.setState((prevState) => {
            console.log("run set state", prevState.employeesIdActive);
            prevState.employeesIdActive.push(id);
            return {
                employeesIdActive: prevState.employeesIdActive,
            }
        });
        console.log(id)
    }

    // _getSortedByMonth() {}

    _resetActive() {
        this.setState({employeesIdActive: []})
    }

    render() {
        // console.log(this._getSortedByLetter());
        // console.log(this._getActiveEmployers());
        return (
            <div className="employees">
                <div className="employees__body">
                    <div className="employees__alphabet">
                        <button
                            type={"button"}
                            onClick={this._resetActive}
                        >
                            Reset Active
                        </button>
                        <AlphabetList
                            alphabetEmployees={this._getSortedByLetter()}
                            activeEmployees={this._getActiveEmployers()}
                            onToggleActiveEmployer={this._onToggleActiveEmployer}
                        />
                    </div>

                    <div className="employees__active">
                        <ActiveList activeEmployees={this._getActiveEmployers()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Employees;
