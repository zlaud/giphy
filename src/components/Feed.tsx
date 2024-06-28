"use client";
import { useEffect } from "react";

interface FeedProps {
  id: string;
}

const Feed: React.FC<FeedProps> = ({ id }) => {
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
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);
  return <div>Feed</div>;
};

export default Feed;
