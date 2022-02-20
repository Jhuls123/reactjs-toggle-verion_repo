import React, { useContext } from "react";
import { SpreadState } from "../Helpers/UseContext";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";

function Toggle() {
	const { toggle, setToggle } = useContext(SpreadState);

	const toggleHandle = () => {
		setToggle(!toggle);
	};
	return (
		<div>
			<input
				type='checkbox'
				id='checkbox'
				className='checkbox'
				onClick={toggleHandle}
			/>
			<label htmlFor='checkbox' className='icon_box'>
                <FiSun />
                <BsMoonStarsFill />
			</label>
		</div>
	);
}

export default Toggle;
