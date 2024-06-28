"use client";
import { useState, FormEvent } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import SearchButton from "./SearchButton/SearchButton";

interface FeedProps {
  val: any;
}

const SearchBar: React.FC<FeedProps> = ({ val }) => {
  const [search, setSearch] = useState<string>(val);
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchBar;
