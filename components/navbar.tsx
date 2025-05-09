"use client";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className=" p-10 flex justify-center bg-purple-900">
      <Image
        alt="logo rick and morty"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
        height={400}
        width={400}
      />
    </div>
  );
};
