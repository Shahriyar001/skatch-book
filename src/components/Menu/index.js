import {
  faFileArrowDown,
  faPencil,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Menu = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faPencil} />
      </div>
      <div>
        <FontAwesomeIcon icon={faPencil} />
      </div>
      <div>
        <FontAwesomeIcon icon={faRotateLeft} />
      </div>
      <div>
        <FontAwesomeIcon icon={faRotateRight} />
      </div>
      <div>
        <FontAwesomeIcon icon={faFileArrowDown} />
      </div>
    </div>
  );
};

export default Menu;
