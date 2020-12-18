import React from 'react';

class ActiveList extends React.Component {
	/**
	 * @private
	 * @method _renderListByAlphabet
	 * @return {React.Element}
	 */
	_renderListByMonth() {
		return (
			<>
				{this.props.activeEmployees.map((item) => (
					<div key={item.getId()}>
						{`${item.getLastName()} ${item.getFirstName()}`}
					</div>
				))}
			</>
		);
	}

	render() {
		return (
			<div className="birthday-list">
				<div className="birthday-list__header">
					<h3 className="birthday-list__title">Employees birthdayList</h3>
				</div>

				<div className="birthday-list__body">
					{this._renderListByMonth()}
				</div>
			</div>
		);
	}
}

export default ActiveList;
