"use client";
import { useEffect, useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";

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
interface FeedProps {
  id: string;
}

const Feed: React.FC<FeedProps> = ({ id }) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [filtered, setFiltered] = useState<Gif[]>([]);
  const [filterInput, setFilterInput] = useState<string | null>();
  useEffect(() => {
    const giphyAPI = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI}&q=${id}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get access token");
        }
        return response.json();
      })
      .then((data) => {
        setGifs(data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  useEffect(() => {
    if (filterInput) {
      const filteredData = gifs.filter((gif) => gif.rating === filterInput);
      setFiltered(filteredData);
    } else {
      setFiltered(gifs);
    }
  }, [filterInput, gifs]);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterInput(event.target.value);
  };

  return (
    <div>
      <div className="container px-10 m-3">
        <label htmlFor="rating">
          Rating:
          <select
            id="rating"
            name="rating"
            onChange={handleFilter}
            className="bg-white rounded-md p-1 m-1"
          >
            <option value="">All</option>
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
          </select>
        </label>
      </div>
      <ImageList variant="masonry" cols={4} gap={8}>
        {filtered.map((gif) => (
          <ImageListItem key={gif.id}>
            <img src={gif.images.original.url} alt={gif.alt_text} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Feed;
