"use client";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";

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
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
};

export function CharacterDrawer({ character, isOpen, onClose }: Props) {
  if (!character) return null;

  return (
    <Drawer
      backdrop="opaque"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerContent className="w-80">
        <DrawerHeader>
          <h2 className="text-xl font-bold">{character.name}</h2>
        </DrawerHeader>
        <DrawerBody>
          <img
            alt={character.name}
            className="w-full rounded mb-4"
            height={50}
            src={character.image}
            width={50}
          />
          <p className="text-sm text-gray-600">
            {character.status}, {character.species}, {character.gender}
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Location:</strong> {character.location.name}
            </p>
            <p>
              <strong>Episodes:</strong> {character.episode.length}
            </p>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button onPress={onClose}>Close</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
