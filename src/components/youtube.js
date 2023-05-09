import Image from "next/image";
import Link from "next/link";
import Hero from "./hero";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import { useState, useEffect } from "react";

export default function youtube() {
  const { data, isLoading, isError } = fetcher("api/youtube-links");
  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>;

  return (
    <section className="bg-gradient-to-b from-halcyon-50 to-halcyon-100">
      <div className="md:h-screen mx-auto md:p-20 p-6">
        <div className="grid md:grid-cols-2 gap-3">
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
              <div className="font-subtitle text-2xl font-semibold pb-6">
                <p>Find me on social media</p>
              </div>
              <div className="font-subtitle text-2xl font-semibold pb-6">
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
              <div className="font-subtitle text-2xl font-semibold flex flex-col md:flex-row gap-2">
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
    <div className="grid md:grid-cols-2">
      <div className="md:h-[250px] md:w-[500px]">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={snippet.title}
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-xl font-semibold text-halcyon-700 md:pl-20 font-subject">
        {snippet.title}
      </p>
    </div>
  );
}
