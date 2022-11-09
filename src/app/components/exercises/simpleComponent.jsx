import React from "react";

import PropTypes from "prop-types";
import SmallTitle from "../common/typografy/smallTitle";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <div>
                    <SmallTitle>Пользователь онлайн</SmallTitle>
                    <button className="btn btn-primary" onClick={onLogout}>
                        Выйти из системы
                    </button>
                </div>
            ) : (
                <div>
                    <SmallTitle>Пользователь не в сети</SmallTitle>
                    <button className="btn btn-primary" onClick={onLogin}>
                        Войти
                    </button>
                </div>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    isAuth: PropTypes.string.isRequired
};
export default SimpleComponent;
