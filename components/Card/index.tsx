/* eslint-disable @next/next/no-img-element */
import { Box } from "@chakra-ui/react";
import Link from "next/link";

interface Author {
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  bio: string;
}

const ArticleCard = ({
  title,
  slug,
  imgSrc,
  category,

  authors,
}) => {
  // console.log("Each author", authors);
  const transformCategory = (category) => {
    return category
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between camelCase
      .toLowerCase() // Convert to lowercase
      .replace(/^[a-z]/, (match) => match.toUpperCase()); // Capitalize first letter
  };
  return (
    <Box>
      <Link href={`/blog/${slug}`}>
        <div className="bg-transparent rounded-[20px] mb-[32px] w-full h-[282px] overflow-hidden cursor-pointer border-[0.5px] border-[#3F3F48]  img-container">
          <img src={imgSrc} alt={slug} width={"100%"} height={"100%"} />
        </div>

        <Box className="text-[20px] font-semibold tracking-[-0.21px] capitalize">
          <p className="add-gradient ">{title}</p>
          <p className="add-gradient ">{transformCategory(category)}</p>
        </Box>

        <Box className="w-full inline-flex">
          {(authors as Author[]).map((author) => (
            <div
              className="inline-flex items-center gap-[6px] mt-[14px] mr-4"
              key={author.slug.current}
            >
              <div className="w-[20px] h-[20px] rounded-full overflow-hidden">
                <img
                  src={author.image.asset.url}
                  alt="author"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <p className="add-gradient text-[14px] leading-[20px] tracking-[-0.2px] font-normal ">
                {author.name}
              </p>
            </div>
          ))}
        </Box>
      </Link>
    </Box>
  );
};

export default ArticleCard;

export const FeaturedArticleCard = ({ title, text, imgSrc, authors, slug }) => {
  return (
    <Box>
      <h1 className="text-[32px] font-semibold leading-[38px] tracking-[-1px]">
        The latest news from Barrel
      </h1>{" "}
      <div className="inline-flex mt-[53px] gap-8">
        <div className="bg-[#312C46] rounded-[20px] w-[526px] h-[393px] overflow-hidden cursor-pointer border-[0.5px] border-[#3F3f48] img-container">
          <Link href={`/blog/${slug}`}>
            <img src={imgSrc} alt="" width={"100%"} height={"100%"} />
          </Link>
        </div>

        <Link href={`/blog/${slug}`}>
          <div className="flex flex-col gap-[6px] max-w-[514px] mt-8">
            <Box className="w-full inline-flex mb-2">
              {(authors as Author[]).map((author) => (
                <div
                  className="inline-flex items-center gap-[6px] mt-[14px] mr-4"
                  key={author.slug.current}
                >
                  <div className="w-[20px] h-[20px] rounded-full overflow-hidden">
                    <img
                      src={author.image.asset.url}
                      alt="author"
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <p className="add-gradient text-[14px] leading-[20px] tracking-[-0.2px] font-normal ">
                    {author.name}
                  </p>
                </div>
              ))}
            </Box>
            <h1 className="text-[32px] font-semibold leading-[38px] tracking-[-0.21px] add-gradient">
              {title}{" "}
            </h1>
            <p className="text-[16px] leading-[28px] tracking-[-0.2px] line-clamp-4 add-gradient">
              {text}
            </p>
          </div>
        </Link>
      </div>
    </Box>
  );
};
