"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/no-unescaped-entities */

import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import Loader from "components/Loader";
import formatDateToMonthDDYYYY from "helpers/formatDate";
import formatDateToDDMMYYYY from "helpers/formatDate";
import { client } from "lib/sanity";
import { urlFor } from "lib/sanityImgUrl";
import Image from "next/image";
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
        author-> {
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
        let tempHeadings = [];

        fetchedData.content.forEach((block) => {
          if (
            block._type === "block" &&
            (block.style === "h1" || block.style === "h2")
          ) {
            const textContent = block.children
              .map((child) => child.text)
              .join("");
            tempHeadings.push(textContent);
          }
        });
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
      <Box className="min-h-[70px] flex items-center justify-center">
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
                className="font-medium text-white text-[24px] mb-3 mt-12"
                key={value.value._key}
              >
                {textContent}
              </h1>
            );
          case "h2":
            return (
              <h2
                className="font-medium text-white text-[20px] mb-3 mt-12"
                key={value.value._key}
              >
                {textContent}
              </h2>
            );
          case "normal":
            return (
              <p key={value.value._key} className="leading-[30px] text-white">
                {textContent}
              </p>
            );
          default:
            return null;
        }
      },
      image: (value) => {
        return (
          <div
            className="w-[738px] h-[388px] rounded-lg overflow-hidden py-12"
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

      // Handle other types...
    },
  };

  return (
    <>
      <Box className="text-white mt-[21px] mb-[197px] min-h-screen w-full flex items-center justify-center px-[10%] relative mx-auto">
        {/* center this div */}
        <div>
          <Box className="flex flex-col gap-[20px] mb-8">
            <h1 className="text-[46px] font-semibold text-white">
              {data?.title}
            </h1>
            <p>
              Last updated on{" "}
              {formatDateToMonthDDYYYY(
                new Date(data?.lastUpdated).toISOString().split("T")[0]
              )}
            </p>

            <div className="inline-flex items-center gap-3">
              <div>
                <img
                  alt="author"
                  src={data?.author?.image?.asset.url}
                  width={"100%"}
                  className=" w-[50px] h-[50px] rounded-[10px]"
                />
              </div>
              {/* <Avatar src={data?.author?.image?.asset.url} /> */}
              <p className="font-normal">
                Written by{" "}
                <span className="font-medium"> {data?.author.name}</span>
              </p>
            </div>
          </Box>

          <>
            <div className="bg-[#312C46] rounded-[20px] h-[393px] w-[738px] overflow-hidden">
              <img
                alt="author"
                src={data?.image?.asset.url}
                width={"100%"}
                className=" rounded-[10px]"
              />{" "}
            </div>
          </>
          <div className="max-w-[738px]">
            <PortableText
              value={data?.content}
              components={PortableTextComponentView}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default SingleArticle;
