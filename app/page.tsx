"use client";

import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { SearchIcon } from "@/components/icons";
import { Pagination } from "@/components/Pagination";
import { CharacterList } from "@/components/CharacterList";

const GET_CHARACTERS = gql`
  query ($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        image
        origin {
          name
        }
        location {
          name
        }
        episode {
          id
        }
      }
    }
  }
`;

export default function Home() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      name: debouncedSearch || undefined,
    },
  });

  const handlePrev = () => {
    if (data?.characters?.info?.prev) {
      setPage(data.characters.info.prev);
    }
  };

  const handleNext = () => {
    if (data?.characters?.info?.next) {
      setPage(data.characters.info.next);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Input
        aria-label="Search a character..."
        className="mt-6 p-2 rounded w-80 text-center"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        placeholder="Search a character..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error : {error.message}</p>}

      {data?.characters?.results?.length > 0 ? (
        <>
          <CharacterList characters={data.characters.results} />

          <div className="flex flex-col items-center gap-2 mt-6">
            <div className="flex gap-2">
              <Button
                className="px-3 py-1 rounded border bg-white text-gray-700 disabled:opacity-50"
                disabled={!data.characters.info.prev}
                onPress={handlePrev}
              >
                Previous
              </Button>
              <Button
                className="px-3 py-1 rounded border bg-white text-gray-700 disabled:opacity-50"
                disabled={!data.characters.info.next}
                onPress={handleNext}
              >
                Next
              </Button>
            </div>

            <Pagination
              currentPage={page}
              totalPages={data.characters.info.pages}
              onPageChange={setPage}
            />
          </div>
        </>
      ) : debouncedSearch ? (
        <p className="text-gray-500">No character found.</p>
      ) : null}
    </section>
  );
}
