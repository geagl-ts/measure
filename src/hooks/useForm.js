import { useState } from "react";

export default (initialState, onSubmit) => {
    const [inputs, setInputs] = useState(initialState);

    const subscribe = input => value => {
        setInputs({ ...inputs, [input]: value });
    };

    const handleSubmit = () => {
        onSubmit(inputs);
    };

    return {
        handleSubmit,
        subscribe,
        inputs
    };
};
