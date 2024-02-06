"use client";

import { Box, Text } from "@chakra-ui/react";
import ArticleCard, { FeaturedArticleCard } from "components/Card";
import Loader from "components/Loader";
import { client } from "lib/sanity";
import { useLayoutEffect, useState } from "react";

const Blog = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useLayoutEffect(() => {
    const getFeaturedArticle = () => {
      setLoading(true);

      const query = `*[_type == "post" && featured == true][0]{
        _id,
        title,
        category,
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
      }`;

      client
        .fetch(query)
        .then((article) => {
          setFeaturedArticle(article);
        })
        .catch((error) => {
          console.error("Error fetching featured article:", error);
          setError("Error fetching featured article. Please try again later.");
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const getArticles = () => {
      setLoading(true);
      let query = `*[_type == "post"]{
        _id,
        title,
        category,
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
      }`;

      client
        .fetch(query)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
          setError("Error fetching articles. Please try again later.");
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getFeaturedArticle();
    getArticles();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Box className="min-h-[70px] flex items-center justify-center -mt-[100vh]">
        <Text className="text-[32px] font-semibold leading-[38px] tracking-[-0.21px]">
          {error}
        </Text>
      </Box>
    );
  }

  if (loading) return <Loader />;
  return (
    <Box flex={1} className="text-white mx-[174px] max-w-[1085px]  mt-[200px]">
      {featuredArticle && (
        <>
          <FeaturedArticleCard
            title={featuredArticle?.title}
            text={featuredArticle?.overview}
            imgSrc={featuredArticle?.image?.asset?.url}
            authors={featuredArticle.authors}
            slug={featuredArticle?.slug?.current}
          />
        </>
      )}

      {/* articles */}
      <Box className="w-full  flex items-center justify-center mb-[241px]">
        <div className="w-full max-w-[1085px]">
          <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px] text-white">
              {data &&
                data.map((Articles) => (
                  <>
                    {/* {console.log("cat", Articles)} */}
                    <ArticleCard
                      key={Articles._id}
                      title={Articles?.title}
                      slug={Articles?.slug?.current}
                      imgSrc={Articles?.image?.asset?.url}
                      authors={Articles.authors}
                      category={Articles.category}
                    />
                  </>
                ))}
            </div>
          </>
        </div>
      </Box>
    </Box>
  );
};

export default Blog;
