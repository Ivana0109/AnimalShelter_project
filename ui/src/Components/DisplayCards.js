import React from "react";
import Card from "./Card";

function DisplayCards({ data, refresh, setEditId }) {
  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <Card
              key={item.id}
              item={item}
              refresh={refresh}
              setEditId={setEditId}
            />
          );
        })}
    </>
  );
}

export default DisplayCards;
