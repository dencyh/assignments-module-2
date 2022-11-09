import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFact(n) {
    console.log("run fact");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const fact = useMemo(() => runFact(value), [value]);
    const buttonColor = otherState ? "primary" : "warning";
    useEffect(() => {
        console.log("rendered");
    });
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prev) => prev + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger ms-md-2"
                    onClick={() => setValue((prev) => prev - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn ms-md-2 btn-${buttonColor}`}
                    onClick={() => setOtherState(!otherState)}
                >
                    Change other state
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
