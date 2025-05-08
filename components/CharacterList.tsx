"use client";

import { useState } from "react";

import { CharacterDrawer } from "./CharacterDrawer";

type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  episode: { id: string }[];
};

type Props = {
  characters: Character[];
};

export function CharacterList({ characters }: Props) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelectCharacter = (char: Character) => {
    setSelectedCharacter(char);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <>
      <ul className="w-full max-w-md space-y-2 mt-4">
        {characters.map((char) => (
          <li key={char.id}>
            <button
              onClick={() => handleSelectCharacter(char)}
              className="w-full text-left flex gap-4 items-center border p-2 rounded hover:bg-gray-100 focus:outline-none"
            >
              <img
                src={char.image}
                alt={char.name}
                className="w-16 h-16 rounded"
              />
              <div>
                <strong>{char.name}</strong>
                <p className="text-sm text-gray-600">
                  {char.status}, {char.species}, {char.gender}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <CharacterDrawer
        character={selectedCharacter}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
}
