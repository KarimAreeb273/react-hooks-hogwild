import React from 'react';

function HogFilter({ showGreased, onShowGreased, sortBy, setSortBy }) {
    function handleGreased(event) {
        onShowGreased(event.target.checked)
      }

     function handleSort (event) {
        setSortBy(event.target.value)
     }

    return (
        <div>
            <div className="ui item">
					<label>Sorting By: </label>
				</div>
				<div className="ui item">
					<select
						className="ui selection dropdown"
                        name = "sort"
						value={sortBy}
						onChange={handleSort}
						type="button"
                        >
                        <option value="name">Name</option>
						<option value="weight">Weight</option>
                        </select>
			</div>
            <div className="ui item">
					<label>Greasy Pigs: </label>
				</div>
				<div className="ui item">
					<input
						className="ui toggle checkbox"
						checked={showGreased}
						onChange={handleGreased}
						type="checkbox"
					/>
			</div>
        </div>
    )
}

export default HogFilter;