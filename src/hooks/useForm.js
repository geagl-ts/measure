import { useState } from "react";

export default (initialState, onSubmit) => {
    const [inputs, setInputs] = useState(initialState);

    const subscribe = (input) => (value) => {
        setInputs({ ...inputs, [input]: value });
    };

    const unsubscribe = () => {
        setInputs(initialState);
    };

    const handleSubmit = () => {
        onSubmit;
    };

    return {
        handleSubmit,
        subscribe,
        inputs,
        unsubscribe,
    };
};
