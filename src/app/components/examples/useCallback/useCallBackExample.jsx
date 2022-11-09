import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const validateWithCallback = (data) => {
    console.log(data);
};

const validateWithoutCallback = (data) => {
    console.log(data);
};

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ name, value }) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without callback: {withoutCallback.current}</p>
            <p>Render with callback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label mb-2">
                Email
            </label>
            <input
                type="text"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={(e) =>
                    handleChange({ name: e.target.name, value: e.target.value })
                }
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
