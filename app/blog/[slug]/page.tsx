"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/no-unescaped-entities */

import { Box, Text } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import Loader from "components/Loader";
import VerticalLine from "components/Pipe";
import formatDateToMonthDDYYYY from "helpers/formatDate";
import { client } from "lib/sanity";
import { urlFor } from "lib/sanityImgUrl";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

const SingleArticle = ({ params }) => {
  const [data, setData] = useState<Post>();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useLayoutEffect(() => {
    const getArticles = async (slug) => {
      const query = `*[_type == "post" && slug.current == "${slug}"][0]{
        title,
        overview,
        slug,
        publishedAt,
        lastUpdated,
        image {
          asset-> {
            _id,
            url
          }
        },
        authors[]-> {
          name,
          slug,
          image {
            asset-> {
              _id,
              url
            }
          },
          bio
        },
        content,
        category,
      }`;

      try {
        const fetchedData = await client.fetch(query);

        setData(fetchedData);
      } catch (error) {
        setErrorMsg(
          "There was an error fetching your article: " + error.message
        );
      } finally {
        setLoading(false);
      }
    };

    getArticles(params.slug);
  }, [params.slug]);

  if (loading) {
    return <Loader />;
  }

  if (errorMsg) {
    return (
      <Box className="min-h-[70px] flex items-center justify-center -mt-[100vh]">
        <Text className="text-[32px] font-semibold leading-[38px] tracking-[-0.21px]">
          Oops! Something went wrong. Please try again later.
        </Text>
      </Box>
    );
  }

  // console.log(data);

  const PortableTextComponentView = {
    types: {
      block: (value) => {
        const textContent = value.value.children
          .map((child) => child.text)
          .join("");
        switch (value.value.style) {
          case "h1":
            return (
              <h1
                className="font-medium add-gradient text-[24px] mb-3 mt-12"
                key={value.value._key}
              >
                {textContent}
              </h1>
            );
          case "h2":
            return (
              <h2
                className="font-medium add-gradient text-[20px] mb-3 mt-12"
                key={value.value._key}
              >
                {textContent}
              </h2>
            );
          case "normal":
            return (
              <p key={value.value._key} className="leading-[30px] add-gradient">
                {textContent}
              </p>
            );
          case "bullet":
            return (
              <ul key={value.value._key} className="add-gradient">
                {value.value.children.map((child) => (
                  <li className="add-gradient" key={child._key}>
                    {child.text}
                  </li>
                ))}
              </ul>
            );

          case "blockquote":
            // Split the textContent into quote and author based on the long hyphen
            const [quote, author] = textContent
              .split("—")
              .map((part) => part.trim());

            return (
              <blockquote
                key={value.value._key}
                className="leading-[30px] pl-4 relative my-4"
              >
                <p className="add-gradient">{quote}</p>
                <footer className="add-gradient">— {author}</footer>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    borderLeft: "2px solid #fff",
                  }}
                ></div>
              </blockquote>
            );

          default:
            return null;
        }
      },
      image: (value) => {
        return (
          <div
            className="w-[738px] h-[388px] rounded-lg overflow-hidden my-12"
            key={value.value._key}
          >
            <Image
              src={urlFor(value.value.asset).url()}
              alt="article"
              className="rounded-lg"
              width={800}
              height={200}
            />
          </div>
        );
      },
    },
  };

  return (
    <>
      <div className="text-white mb-[197px] min-h-screen w-full flex items-center justify-center px-[10%] overflow-x-hidden mx-auto mt-[200px]">
        {/* center this div */}
        <div>
          <Box className="flex flex-col gap-[8px] mb-8">
            <div className="leading-7 tracking-[0.2px]">
              <Link href={"/blog"}>
                <span className="add-gradient"> Blog /</span>{" "}
              </Link>
              <span className="text-[#6439F5]">News</span>
            </div>

            <h1 className="text-[46px] font-semibold add-gradient leading-[52px] tracking-[0.2px] ">
              {data?.title}
            </h1>

            <Box className="inline-flex gap-3 items-center mt-1">
              <div className="inline-flex gap-1">
                {data?.authors.map((author, index, array) => (
                  <p className="font-normal add-gradient leading-7 tracking-[0.2px]">
                    {`${author?.name}${index !== array.length - 1 ? ", " : ""}`}
                  </p>
                ))}
              </div>

              <VerticalLine width="1px" height={5} />

              <p className="add-gradient">
                {formatDateToMonthDDYYYY(
                  new Date(data?.lastUpdated).toISOString().split("T")[0]
                )}
              </p>
            </Box>
          </Box>

          <>
            <div className="bg-[#312C46] rounded-[20px] h-[393px] w-[720px] overflow-hidden">
              <img
                alt="author"
                src={data?.image?.asset.url}
                width={"100%"}
                className=" rounded-[10px]"
              />{" "}
            </div>
          </>
          <div className="max-w-[720px]">
            <PortableText
              value={data?.content}
              components={PortableTextComponentView}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
