import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Navigation = ({ data }) => {
  const [locations, setLocations] = useState(data);

  const moveUpward = (index) => {
    if (index === 0) return;
    const newItems = [...locations];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;
    setLocations(newItems);
  };

  const moveDownward = (index) => {
    if (index === data.length - 1) return;
    const newItems = [...locations];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;
    setLocations(newItems);
  };

  return (
    <div
      style={{
        width: "20%",
      }}
    >
      {locations.map((location, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>{location}</p>
          <div>
            {index !== data.length - 1 && (
              <FaAngleDoubleDown onClick={() => moveDownward(index)} />
            )}
            {index !== 0 && (
              <FaAngleDoubleUp onClick={() => moveUpward(index)} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
