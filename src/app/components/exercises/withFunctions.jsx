import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") || "");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        setIsAuth(localStorage.getItem("auth") || "");
    };
    const onLogout = () => {
        localStorage.removeItem("auth");
        setIsAuth(localStorage.getItem("auth") || "");
    };

    return (
        <>
            <CardWrapper>
                <Component {...{ isAuth, onLogin, onLogout }} />
            </CardWrapper>
        </>
    );
};

export default withFunctions;
