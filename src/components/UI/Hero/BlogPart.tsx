import { useEffect, useState } from "react";
import CategoryTitle from "../../General/CategoryTitle";
import Button from "../../General/Button";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

type User = {
  name: string;
};
type Blog = {
  id: number;
  title: string;
  user: User;
  social_image: string;
  created_at: string;
  tag_list: string[];
  description: string;
};

const BlogPart = () => {
  const navigate = useNavigate();

  const [blogpost, setBlogpost] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlog();
  }, []);
  const fetchBlog = async () => {
    setLoading(true);
    const apiResponse = await fetch("https://dev.to/api/articles?tag=food");
    const apiResult = await apiResponse.json();

    console.log(apiResult);

    if (apiResult && apiResult?.length > 0) {
      const getRandomBlogPost = () => {
        setLoading(false);
        return [...apiResult].sort(() => 0.3 - Math.random()).slice(0, 3);
      };
      setBlogpost(getRandomBlogPost());
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="bg-beige">
      <div className="text-h4">
        <CategoryTitle title="From the blog" bg="bg-blue" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center max-w-[1440px] mx-auto p-3">
        {blogpost.map((blog) => (
          <div
            key={blog?.id}
            className="p-3 flex flex-col gap-2"
            onClick={() => navigate("/blog")}
          >
            <img
              src={blog?.social_image}
              alt=""
              className="w-[373px] h-[474px] hover:opacity-50 hover:cursor-pointer hover:scale-105 transition-all duration-200"
            />
            <h4 className="text-h4 max-w-[373px] font-semibold text-left space-y-2 cursor-pointer ">
              {blog?.title}
            </h4>
            <div className="flex gap-2">
              <p className="text-pr">{blog?.created_at}</p>
              <p>|</p>
              <p className="text-pr">By {blog?.user?.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center  flex items-center justify-center py-3 gap-2">
        <Button
          btnTxt="Next"
          textcolor="blue"
          bordercolor="blue"
          onClick={() => navigate("/blog")}
        />
      </div>
    </div>
  );
};

export default BlogPart;
