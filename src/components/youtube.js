import Image from "next/image";
import Link from "next/link";
import Hero from "./hero-6";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import { useState, useEffect } from "react";

export default function youtube() {
  const { data, isLoading, isError } = fetcher("api/youtube-links");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section
      id="youtube"
      className="bg-gradient-to-b from-halcyon-50 to-halcyon-100"
    >
      <div className="lg:min-h-screen mx-auto lg:p-20 p-6">
        <div className="grid lg:grid-cols-2 gap-11">
          <div>
            <div className="title pb-3">
              <h className="font-subject font-bold text-4xl text-halcyon-700">
                youtube channel
              </h>
            </div>
            <div className="flex justify-center items center">
              <Image
                className="rounded-xl shadow-xl"
                src={"/images/Homepage.png"}
                width={500}
                height={500}
              />
            </div>
            <div className="py-6 flex flex-col items-center">
              <div className="font-subject text-2xl font-semibold pb-6">
                <p>Find me on social media</p>
              </div>
              <div className="font-subject text-2xl font-semibold pb-6">
                <div className="flex gap-2">
                  <p>Instagram:</p>
                  <Link href={"/"} className="underline">
                    @hal.cyon.art
                  </Link>
                </div>
                <div className="flex gap-2">
                  <p>Facebook:</p>
                  <Link href={"/"} className="underline">
                    /halcyonartgallery
                  </Link>
                </div>
                <div className="flex gap-2">
                  <p>Youtube:</p>
                  <Link href={"/"} className="underline">
                    Halyon Art
                  </Link>
                </div>
              </div>
              <div className="font-subject text-2xl font-semibold flex flex-col lg:flex-row gap-2">
                <p>For Collaborations:</p>
                <p href={"/"} className="underline">
                  halcyonartpaintings@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-4 place-content-center">
            {data?.map((value, index) => (
              <YoutubeVideo data={value} key={index}></YoutubeVideo>
            ))}
          </div>
        </div>
      </div>
      <Hero></Hero>
    </section>
  );
}

function YoutubeVideo({ data }) {
  const { id, videoId } = data;

  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyDEzrWN6eOrntoqK-BoWTVdLgJ-2VKgVEU`
      );
      const data = await res.json();
      setVideoData(data.items[0]);
    };

    fetchData();
  }, [videoId]);

  if (!videoData) return <div>Loading...</div>;

  const { snippet } = videoData;

  return (
    <div className="grid lg:grid-rows-1 lg:h-[250px] lg:w-[450px]">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={snippet.title}
        allowFullScreen
      ></iframe>

      <p className="row-span-1 text-xl font-semibold text-halcyon-700 font-subject">
        {snippet.title}
      </p>
    </div>
  );
}
