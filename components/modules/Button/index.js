import React from "react";

function Button({ title, style }) {
    return (
        <button
            className="rounded-md bg-backgroundButton text-buttonText font-fraunces w-[20rem] h-[5rem] flex justify-center items-center whitespace-pre-line p-[3rem]"
            style={style}
        >
            <p className="text-[1.3rem] font-bold"> {title} </p>
        </button>
    );
}

export default Button;
