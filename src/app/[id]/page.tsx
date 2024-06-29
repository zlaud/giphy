"use client";
import SearchBar from "@/components/SearchBar";
import { useParams } from "next/navigation";
import Feed from "@/components/Feed";

interface Gif {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
  alt_text: string;
  rating: string;
}

const page = () => {
  let params = useParams() as { id: string };
  const urlQuery = params.id.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <SearchBar val={decodeURIComponent(params.id)} />
      <Feed id={urlQuery} />
    </div>
  );
};

export default page;
