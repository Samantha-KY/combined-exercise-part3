import React from "react";

function Button({ title, className = "rounded-md bg-backgroundButton text-buttonText font-fraunces w-[20rem] h-[5rem] flex justify-center items-center whitespace-pre-line p-[3rem]" }) {
    return (
        <button
            className={className}
        >
            <p className="text-[1.3rem] font-bold"> {title} </p>
        </button>
    );
}

export default Button;
