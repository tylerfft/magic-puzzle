import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]).reverse());

export default function DragBox(props, ref) {
  const [data, setData] = useState([...props.data]);

  useEffect(() => {
    var newdata = [...props.data];
    for (let c = 0; c < parseInt(props.rCnt); c++) {
      newdata = transpose(newdata);
    }
    for (let c = 0; c < parseInt(props.fCnt); c++) {
      newdata = newdata.map((row) => row.reverse());
    }
    setData(newdata);
  }, [props.data, props.fCnt, props.rCnt]); // 第二个参数是空数组，表示只在组件挂载和卸载时执行

  function rotate() {
    var newdata = transpose(data);
    setData([...newdata]);
  }

  function flip() {
    var newdata = data.map((row) => row.reverse());
    setData([...newdata]);
  }

  var btnFlip = null;
  var btnRotate = null;
  var dragbox = null;
  var left = 0;
  var top = 0;

  const { style } = props;

  const [, setIsMouseDown] = useState(false);

  function onMouseDown(e) {
    if (!dragbox) {
      return;
    }
    dragbox.style.zIndex = "1";
    left = e.clientX - dragbox.offsetLeft;
    top = e.clientY - dragbox.offsetTop;
    console.log(
      "onMouseDown",
      e,
      e.clientX,
      e.clientY,
      dragbox.offsetLeft,
      dragbox.offsetTop,
      left,
      top
    );
    setIsMouseDown(true);
    document.addEventListener("mousemove", handleMouseMove);
  }

  const handleMouseMove = (e) => {
    if (!dragbox) {
      return;
    }
    const x = e.clientX - left;
    const y = e.clientY - top;
    dragbox.style.left = `${x / 30}rem`;
    dragbox.style.top = `${y / 30}rem`;
  };

  function onMouseUp() {
    dragbox.style.zIndex = "0";
    document.removeEventListener("mousemove", handleMouseMove);
    showBtn();

    if (!dragbox) {
      return;
    }
    dragbox.style.left = `${Math.round(parseFloat(dragbox.style.left) * 1)}rem`;
    dragbox.style.top = `${Math.round(parseFloat(dragbox.style.top) * 1)}rem`;
  }

  function createDragBoxRow(row, index) {
    const cells = [];
    for (let col = 0; col < row.length; col++) {
      if (row[col] === 0) {
        cells.push(
          <div key={nanoid()} className={styles[`grid-item-empty`]}></div>
        );
      } else {
        cells.push(
          <div
            key={nanoid()}
            className={styles["grid-item-active"]}
            style={{ backgroundColor: style.backGroundColor }}
          ></div>
        );
      }
    }
    return (
      <div className={styles["drag-row"]} key={nanoid()}>
        {cells}
      </div>
    );
  }
  function onMouseEnter() {
    showBtn();
  }
  function onMouseLeave() {
    hiddenBtn();
  }

  function showBtn() {
    btnRotate.style.display = "block";
    btnFlip.style.display = "block";
  }
  function hiddenBtn() {
    btnRotate.style.display = "none";
    btnFlip.style.display = "none";
  }

  return (
    <div
      ref={(c) => (dragbox = c)}
      className={styles["drag-box"]}
      style={{
        ...props.style,
        height: data.length + "rem",
        width: data[0].length + "rem",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <button
        ref={(c) => (btnRotate = c)}
        className={styles.button_rotate}
        onClick={rotate}
      ></button>
      <button
        ref={(c) => (btnFlip = c)}
        className={styles.button_flip}
        onClick={flip}
      ></button>
      {[...data].map((row, index) => {
        return createDragBoxRow(row, index);
      })}
    </div>
  );
}
