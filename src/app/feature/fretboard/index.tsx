import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { fretboardNotes } from "@/app/utils/data";

type Props = {
  onNoteClick: (note: string) => any;
};

const strings = ["E", "A", "D", "G", "B", "E"];
const frets = Array.from({ length: 12 }, (_, i) => i + 1);
const fretsSpaces = [
  [511, 583],
  [590, 660],
  [670, 740],
  [750, 820],
  [825, 900],
  [905, 970],
  [980, 1050],
  [1060, 1130],
  [1140, 1205],
  [1210, 1285],
  [1210, 1360],
  [1370, 1470],
];

const Fretboard: React.FC<Props> = ({ onNoteClick }) => {
  const handleFretClick = (string: string, e: any) => {
    const clientX = e.clientX;
    const fretIndex = fretsSpaces.findIndex(
      ([start, end]) => clientX >= start && clientX <= end
    );
    const fretSlotPressed = fretIndex + 1;
    const notePressed = fretboardNotes[string][fretSlotPressed];
    onNoteClick(notePressed);
  };

  return (
    <div className={styles.guitarNeck}>
      {frets.map((fret, idx) => (
        <div
          key={fret}
          id={fret.toString()}
          className={`${styles.fret} ${idx === 0 ? styles.first : ""}`}
        ></div>
      ))}

      <ul className={styles.dots}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ul className={styles.doubleDots}>
        <li></li>
        <li></li>
      </ul>

      <ul className={styles.strings}>
        <li onClick={(e) => handleFretClick("e", e)}></li>
        <li onClick={(e) => handleFretClick("b", e)}></li>
        <li onClick={(e) => handleFretClick("g", e)}></li>
        <li onClick={(e) => handleFretClick("d", e)}></li>
        <li onClick={(e) => handleFretClick("a", e)}></li>
        <li onClick={(e) => handleFretClick("e", e)}></li>
      </ul>

      <ul className={styles.openNotes}>
        <li className={styles.lowE}>E</li>
        <li className={styles.b}>B</li>
        <li className={styles.g}>G</li>
        <li className={styles.d}>D</li>
        <li className={styles.a}>A</li>
        <li className={styles.highE}>E</li>
      </ul>
    </div>
  );
};

export default Fretboard;
