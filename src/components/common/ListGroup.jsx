import React from "react";

const ListGroup = props => {
  const { items, currentFilter, onFilterChange } = props;

  return (
    <ul className="list-group">
      {items.map(f => (
        <li
          key={f._id}
          onClick={() => onFilterChange(f.name)}
          style={{ cursor: "pointer" }}
          className={
            currentFilter === f.name
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {f.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
