"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import SearchButton from "./SearchButton/SearchButton";

interface SearchProps {
  val: any;
}

const SearchBar: React.FC<SearchProps> = ({ val }) => {
  const [search, setSearch] = useState<string>(val);
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${search}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full px-5 py-2 m-5 bg-transparent border-2 w-[32rem]"
        />
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchBar;
