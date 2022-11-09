import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>Prev State: {prevState.current.toString()}</p>
            <p>Current State: {otherState.toString()}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Click
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
