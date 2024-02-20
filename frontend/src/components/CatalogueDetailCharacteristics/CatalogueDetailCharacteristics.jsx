import React, { useState, useEffect, useRef } from "react";
import {
  IconPointFilled,
  IconCircleChevronUp,
  IconCircleChevronDown,
} from "@tabler/icons-react";
import "./CatalogueDetailCharacteristics.scss";

export default ({ characteristics }) => {
  const [compact, setCompact] = useState(true);
  const listRef = useRef(null);

  useEffect(() => {
    if (!compact) {
      const list = listRef.current;
      if (list) {
        list.style.setProperty("--max-height", `${list.scrollHeight}px`);
      }
    }
  }, [compact]);

  return (
    characteristics && (
      <div className="detail-characteristics">
        <h2 style={{ fontStyle: "italic", textAlign: "center" }}>
          Características
        </h2>
        <div
          ref={listRef}
          className={`detail-characteristics__list ${
            compact ? "compact" : "expanded"
          }`}
        >
          {characteristics.map((characteristic) => {
            return (
              <div
                key={`detail-characteristics__item-${characteristic.id}`}
                className="detail-characteristics__item"
              >
                <IconPointFilled />
                {characteristic.value}
              </div>
            );
          })}
        </div>
        <div
          className="detail-characteristics__action"
          onClick={() => setCompact(() => !compact)}
        >
          {compact ? (
            <IconCircleChevronDown size={50} stroke={1} />
          ) : (
            <IconCircleChevronUp size={50} stroke={1} />
          )}
        </div>
      </div>
    )
  );
};
