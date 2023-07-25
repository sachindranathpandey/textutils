import React from "react";

function Alert(props) {

    const firstUpper=(word)=>{

        word=word.charAt(0).toUpperCase() + word.slice(1);
        return word;

    }
  return (
   props.alert && <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
      <strong> {firstUpper(props.alert.type)} </strong>: {props.alert.message}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </div>
  );
}

export default Alert;
