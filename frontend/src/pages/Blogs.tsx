import { AppBar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName={"Aurojyoti"}
            title={
              "How an ugly single page website makes $5000 a month without affiliate marketing"
            }
            content={
              "How an ugly single page website makes $5000 a month without affiliate marketting"
            }
            publishedDate={"29 feb 2024"}
          />
        </div>
      </div>
    </div>
  );
};
