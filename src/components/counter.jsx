import React from "react";

const Counter = (props) => {
  const {value, id} = props;

  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div className='d-flex align-items-center'>
      <div className='col-2 m-2'>{props.name}</div>
      <div className=' col-1 d-flex justify-content-center'>
        <span className={getBageClasses()}>{formatCount()}</span>
      </div>
      <button className='btn btn-primary btn-sm m-2' onClick={() => props.onIncrement(id)}>
        +
      </button>
      <button className='btn btn-primary btn-sm m-2' onClick={() => props.onDecrement(id)}>
        -
      </button>
      <button className='btn btn-danger btn-sm m-2' onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
    </div>
  );
};

export default Counter;
