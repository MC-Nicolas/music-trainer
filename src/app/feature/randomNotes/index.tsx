"use client";
import { notes } from "@/app/utils/data";
import { generateRandomNumber } from "@/app/utils/generators";
import React, { useEffect, useState } from "react";

const RandomNotes = () => {
  const [currentNote, setCurrentNote] = useState<null | string>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNote(notes[generateRandomNumber(notes.length - 1)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (currentNote) {
    return <p className="text-8xl">{currentNote}</p>;
  } else {
    return <p className="text-8xl">Get ready...</p>;
  }
};

export default RandomNotes;
