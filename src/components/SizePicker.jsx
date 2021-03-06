import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styles from "./SizePicker.module.css";

// const options = ["Small", "Medium", "Large"];

export default function SizePicker(props) {
  function handleSize(value) {
    props.handleSize(value);
  }

  return (
    <Dropdown
      options={props.sizes}
      onChange={(size) => {
        handleSize(size.value);
      }}
      className={styles.dropdown}
      controlClassName={styles.dropdown}
      arrowClassName={styles.arrow}
      placeholder="Size"
    />
  );
}
