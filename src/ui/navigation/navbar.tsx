import Link from "next/link";
import React from "react";

type Props = {
  setActiveSection: (section: string) => void;
};

const Navbar = ({ setActiveSection }: Props) => {
  return (
    <ul className="flex w-full justify-center">
      <li style={{ width: 150 }}>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setActiveSection("randomNotes")}
        >
          Random Note
        </p>
      </li>
      <li style={{ width: 150 }}>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setActiveSection("fretboard")}
        >
          Fretboard
        </p>
      </li>
    </ul>
  );
};

export default Navbar;
