import { useState } from "react";
import Card from "./Card";
import CardModel from "../models/Card";

interface Props {
  items: CardModel[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function CardListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.heading}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item.heading);
            }}
          >
            <Card heading={item.heading} image={item.image}></Card>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardListGroup;
