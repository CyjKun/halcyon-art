import Image from "next/image";
import Link from "next/link";
import Hero from "./hero-2";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function paintings() {
  const { data, isLoading, isError } = fetcher("api/paintings");
  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>;

  return (
    <section id="paint" className="bg-gradient-to-b from-halcyon-50 to-halcyon-100">
      <div className="lg:min-h-screen mx-auto lg:p-20 p-6 flex flex-col justify-between">
        <div>
          <h1 className="font-subject font-bold text-4xl">recent paintings</h1>
          <div className="flex flex-col lg:flex-row lg:justify-between font-description">
            <Link
              href={"https://instagram.com/hal.cyon.art/"}
              className="text-xl text-halcyon-600 hover:text-halcyon-800"
            >
              browse instagram feed for more artworks
            </Link>
          </div>
        </div>
        {/* grid columns */}
        <div className="grid lg:grid-cols-4 gap-6 place-content-center">
          {data?.map((value, index) => (
            <Post data={value} key={index}></Post>
          ))}
        </div>
        <div className="footer flex justify-center">
          <Link
            href={"/"}
            className="text-base font-bold underline hover:text-sky-400"
          >
            back to home
          </Link>
        </div>
      </div>
      <Hero></Hero>
    </section>
  );
}

function Post({ data }) {
  const { id, title, subtitle, img, description } = data;
  return (
    <div className="items">
      <div className="painting">
        <div>
          <Image
            src={img || "/"}
            className="object-contain h-[475px] w-[475px]"
            width={475}
            height={475}
          />
        </div>
      </div>
      <div className="painting-info">
        <p className="text-2xl font-subject font-bold uppercase">
          {title || "Unknown"}{" "}
        </p>
        <p className="text-lg font-description font-semibold lowercase">
          {subtitle || "Unknown"} {description || "Unknown"}
        </p>
      </div>
    </div>
  );
}
