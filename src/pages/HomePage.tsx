import React, { useState, useEffect } from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const { isError, isLoading, data } = useSearchUsersQuery("tsimafei");

  useEffect(() => {
    console.log(search)
  }, [search]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
          enim?
        </div>
      </div>
    </div>
  );
}
