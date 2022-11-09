import PropTypes from "prop-types";
import { useState } from "react";

function Input({ render }) {
	const [value, setValue] = useState("");
	const inputChangeHandler = (e) => {
		setValue(e.target.value);
	};
	return render({ value, inputChangeHandler });
}

Input.propTypes = {
	render: PropTypes.func.isRequired,
};

export default Input;
