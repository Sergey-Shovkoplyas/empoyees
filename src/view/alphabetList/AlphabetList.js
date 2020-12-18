import React from 'react';

class AlphabetList extends React.Component {
	/**
	 * @private
	 * @method _renderListByAlphabet
	 * @return {React.Element}
	 */
	_renderListByAlphabet() {
		return (
			<>
				{this.props.alphabetEmployees.map((item, index) => (
					<div
						className="alphabet-list__letter-block"
						key={index}
					>
						<div className="letter-block__name">
							{item.letter}
						</div>

						<div className="letter-block__items">
							{this._renderListByLetter(item.items)}
						</div>
					</div>
				))}
			</>
		);
	}

	/**
	 * @private
	 * @method _renderLetterList
	 * @return {React.Element}
	 */
	_renderListByLetter(employees) {
		return (
			<>
				{employees.map((employer) => (
					<label key={employer.item.getId()}>
						<input
							data-id={employer.item.getId()}
							type="checkbox"
							checked={employer.isActive}
							onChange={(e) => {this.props.onToggleActiveEmployer(e.target.dataset.id)}}
						/>
						<span>{`${employer.item.getLastName()} ${employer.item.getFirstName()}`}</span>
					</label>
				))}
			</>
		)
	}

	render() {
		return (
			<div className="alphabet-list">
				<div className="alphabet-list__header">
					<h3 className="alphabet-list__title">Employees</h3>
				</div>

				<div className="alphabet-list__body">
					{this._renderListByAlphabet()}
				</div>
			</div>
		);
	}
}

export default AlphabetList;
