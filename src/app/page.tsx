"use client";
import Navbar from "@/ui/navigation/navbar";
import Image from "next/image";
import RandomNotes from "./feature/randomNotes";
import { useEffect, useState } from "react";
import Fretboard from "./feature/fretboard";
import { fretboardNotes, notes, strings } from "./utils/data";
import { generateRandomNumber } from "./utils/generators";

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | string>(null);
  const [noteFound, setNoteFound] = useState<null | string>(null);
  const [currentNote, setCurrentNote] = useState<null | string>(null);
  const [guessIsCorrect, setGuessIsCorrect] = useState(false);
  const [correctStrike, setCorrectStrike] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNote(notes[generateRandomNumber(notes.length - 1)]);
      setNoteFound(null);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentNote && noteFound === currentNote) {
      setGuessIsCorrect(true);
      setCorrectStrike(correctStrike + 1);
    } else {
      setGuessIsCorrect(false);
    }
  }, [noteFound, currentNote]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6">
      <Navbar setActiveSection={setActiveSection} />
      <div
        className="flex justify-center items-center mt-6"
        style={{ height: "80vh" }}
      >
        {activeSection === "randomNotes" && <RandomNotes />}
        {activeSection === "fretboard" && (
          <div
            style={{ width: 150 }}
            className="flex-row items-center justify-start"
          >
            <h2 style={{ fontSize: 50, minHeight: 50 }}>
              &nbsp;{correctStrike}
            </h2>
            <h2
              style={{
                fontSize: 50,
                minHeight: 50,
                color: guessIsCorrect ? "green" : "red",
              }}
            >
              {" "}
              {`(${currentNote})`}
            </h2>
            <h2 style={{ fontSize: 50, minHeight: 50 }}>&nbsp;{noteFound}</h2>
            <Fretboard onNoteClick={setNoteFound} />
          </div>
        )}
      </div>
    </main>
  );
}
