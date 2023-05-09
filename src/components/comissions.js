import Image from "next/image";
import Link from "next/link";
import Hero from "./hero";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function comissions() {
  const { data, isLoading, isError } = fetcher("api/comissions");
  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>;

  return (
    <section className="bg-gradient-to-b from-halcyon-50 to-halcyon-100">
      <div className="md:h-screen mx-auto md:p-20 p-6 flex flex-col justify-between">
        <div>
          <h1 className="font-subject font-bold text-4xl">sample comissions</h1>
          <div className="flex flex-col md:flex-row md:justify-between font-description">
            <Link
              href={"/"}
              className="text-xl text-halcyon-600 hover:text-halcyon-800"
            >
              browse instagram feed for more artworks
            </Link>
            <Link
              href={"https://forms.gle/wzv2cXzaPYGURGk97"}
              className="text-xl text-halcyon-600 hover:text-halcyon-800"
            >
              request an artwork
            </Link>
          </div>
        </div>
        {/* grid columns */}
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6 place-content-center">
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
    <div className="items ">
      <div className="painting">
        <Link href={"/"}>
          <Image
            src={img || "/"}
            className="object-contain h-[475px] w-[475px]"
            width={475}
            height={475}
          />
        </Link>
      </div>
      <div className="painting-info">
        <p className="text-2xl font-subject font-bold uppercase">
          {title || "Unknown"}{" "}
        </p>
        <p className="text-lg font-subtitle font-semibold lowercase">
          {subtitle || "Unknown"} {description || "Unknown"}
        </p>
      </div>
    </div>
  );
}
