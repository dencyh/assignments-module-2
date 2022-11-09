import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ListWrapper>
                <Component />
                <Component />
                <Component />
            </ListWrapper>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

const ListWrapper = ({ children }) => {
    return (
        <ul>
            {React.Children.map(children, (child, index) => (
                <li className="d-flex">
                    {child} <span className="ms-1"> #{index + 1}</span>
                </li>
            ))}
        </ul>
    );
};

ListWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default ChildrenExercise;
