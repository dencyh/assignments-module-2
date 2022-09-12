import React, {useState} from "react";
import Counter from "./counter";

const CoutersList = () => {
  const initialState = [
    {id: 0, value: 0, name: "Ненужная вещь"},
    {id: 1, value: 0, name: "Ложка"},
    {id: 2, value: 0, name: "Вилка"},
    {id: 3, value: 0, name: "Тарелка"},
    {id: 4, value: 0, name: "Набор минималиста"},
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((item) => {
        if (item.id === id) {
          return {...item, value: item.value + 1};
        } else {
          return item;
        }
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((item) => {
        if (item.id === id) {
          return {...item, value: item.value - 1};
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div className='container'>
      <div className='col-12'>
        {counters.map((count) => (
          <Counter
            key={count.id}
            {...count}
            onDelete={handleDelete}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
        ))}
      </div>
      <button className='btn btn-primary btn-sm m-2' onClick={handleReset}>
        Сброс
      </button>
    </div>
  );
};

export default CoutersList;
