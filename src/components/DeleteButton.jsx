import React from "react";
import PropTypes from "prop-types";

function DeleteButton ( {id, onDelete} ){
    return <button className="contact-item__delete" onClick={() => onDelete(id)}>x</button>
}

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default DeleteButton;