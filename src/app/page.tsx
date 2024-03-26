"use client";
import Navbar from "@/ui/navigation/navbar";
import Image from "next/image";
import RandomNotes from "./feature/randomNotes";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | string>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6">
      <Navbar setActiveSection={setActiveSection} />
      <div
        className=" w-full flex justify-center items-center mt-6"
        style={{ height: "80vh" }}
      >
        {activeSection === "randomNotes" && <RandomNotes />}
        {activeSection === "fretboard" && <RandomNotes />}
      </div>
    </main>
  );
}
