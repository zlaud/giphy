import Feed from "@/components/Feed";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar val="" />
      <Feed id={"random"} />
    </div>
  );
};

export default Home;
