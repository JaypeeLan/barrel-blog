/* eslint-disable @next/next/no-img-element */
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const ArticleCard = ({ title, desc, slug, imgSrc, authorName, authorImg }) => {
  return (
    <Box>
      <Link href={`/blog/${slug}`}>
        <div className="bg-transparent rounded-[20px] mb-[32px] w-full h-[282px] overflow-hidden">
          <img src={imgSrc} alt={slug} width={"100%"} height={"100%"} />
        </div>
        <p className="text-[32px] font-semibold leading-[38px] tracking-[-0.21px] mb-[6px]">
          {title}
        </p>
        <p className="text-[16px] leading-[28px] tracking-[-0.2px] line-clamp-3">
          {desc}
        </p>
        <div className="inline-flex items-center gap-[10px] mt-[14px]">
          <div className="w-12 h-12 rounded-[10px] overflow-hidden bg-red-400 ">
            <img src={authorImg} alt="author" width={"100%"} height={"100%"} />
          </div>
          <p className="text-[16px] leading-[28px] tracking-[-0.2px] font-normal ">
            Written by <span className="font-medium"> {authorName}</span>
          </p>
        </div>
      </Link>
    </Box>
  );
};

export default ArticleCard;

export const FeaturedArticleCard = ({
  title,
  text,
  imgSrc,
  authorName,
  authorImg,
  slug,
}: any) => {
  return (
    <Box>
      <h1 className="text-[32px] font-bold leading-[38px] tracking-[-1px]">
        The latest news from Barrel
      </h1>{" "}
      <div className="inline-flex mt-[53px] gap-8">
        <div className="bg-[#312C46] rounded-[20px] h-[393px] w-[792px] overflow-hidden">
          <img src={imgSrc} alt="" width={"100%"} height={"100%"} />
        </div>

        <Link href={`/blog/${slug}`}>
          <div className="flex flex-col gap-[6px] max-w-[514px] mt-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-[10px] overflow-hidden bg-red-400 ">
                <img
                  src={authorImg}
                  alt="author"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <p className="text-[16px] leading-[28px] tracking-[-0.2px] font-normal">
                Written by <span className="font-medium"> {authorName} </span>
              </p>
            </div>
            <h1 className="text-[32px] font-semibold leading-[38px] tracking-[-0.21px]">
              {title}{" "}
            </h1>
            <p className="text-[16px] leading-[28px] tracking-[-0.2px] line-clamp-4">
              {text}
            </p>
          </div>
        </Link>
      </div>
    </Box>
  );
};
