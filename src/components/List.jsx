import { useState, useEffect } from "react";
import { Fecthdata } from "../api/api.js";
import { Loader } from "./Loader";
import { Button } from "./Button.jsx";
import { Error } from "./Error.jsx";

export const List = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentpage, setCurrentpage] = useState(1);
  const totalpages = 10;

  useEffect(() => {
      let loaddata = async () => {
        setLoading(true);
        setError(null);
      try {
        const res = await Fecthdata(currentpage);
        // Manually adding delay to show loader its not AI its Coder
        setTimeout(() => {
          setPosts(res);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loaddata();
  }, [currentpage]);

  const handleNext = () => {
    setCurrentpage((prev) => Math.min(prev + 1,totalpages));
  };
  const handlePrev = () => {
    setCurrentpage((prev) => Math.max(1, prev - 1));
  };
  if (loading) return <Loader count={5} />;

  if (error) return <Error error={error} />;

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 mb-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="
        bg-white/90 
        border border-blue-100 
        rounded-2xl 
        p-6 
        shadow-sm 
        hover:shadow-lg 
        hover:-translate-y-1 
        transition-all 
        duration-300
      "
          >
            <div className="mb-4">
              <span className="inline-block text-xs font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Post #{post.id}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
              {post.title}
            </h2>

            <div className="h-0.5 w-full bg-blue-200 mb-4"></div>

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
              {post.body}
            </p>

            <div className="mt-6">
              <button
                className="
          text-blue-600 
          text-sm 
          font-semibold 
          border border-blue-200 
          px-4 py-2 
          rounded-lg 
          hover:bg-blue-50 
          transition
        "
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-5 py-5 sticky bottom-0 mt-10 border-t-2 border-gray-200 bg-white rounded-2xl">
        <Button
          text="Previous"
          onClick={handlePrev}
          className="mr-2"
          disabled={currentpage === 1}
        />
        <Button
          text="Next"
          onClick={handleNext}
          disabled={currentpage === totalpages}
        />
      </div>
    </>
  );
};
