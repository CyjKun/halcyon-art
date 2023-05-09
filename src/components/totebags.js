import Link from "next/link";
import Hero from "./hero";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section5() {
  const { data, isLoading, isError } = fetcher("api/totebags");
  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>;

  return (
    <section className="bg-gradient-to-b from-halcyon-50 to-halcyon-100">
      <div className="md:h-screen mx-auto md:p-20 p-6 flex flex-col justify-between">
        <div className="flex flex-col md:flex-row md:justify-between ">
          <h1 className="font-subject font-bold text-4xl">art merchandise</h1>
          <div className="flex flex-col">
            <p className="text-lg font-subject">checkout via:</p>
            <Link
              href={"https://forms.gle/wzv2cXzaPYGURGk97"}
              className="text-halcyon-600 hover:text-halcyon-800 font-subtitle text-xl"
            >
              order form
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between ">
          <h1 className="font-subject font-bold text-2xl">totebags</h1>
        </div>
        <div className="flex">
          <div className="grow grid md:grid-cols-1 lg:grid-cols-5 gap-6 place-items-center">
            {data?.map((value, index) => (
              <Post data={value} key={index}></Post>
            ))}
            <p className="flex justify-center items-center text-base font-bold text-center">
              13" by 13" with 10" strap Premium beige canvas Features original
              paintings Also available for a wholesale price of Php 200
            </p>
          </div>
        </div>
        <div className="footer flex justify-center">
          <Link href={"#top"} className="text-base font-bold underline">
            back to home
          </Link>
        </div>
      </div>
      <Hero></Hero>
    </section>
  );
}

function Post({ data }) {
  const { id, title, subtitle, img1, img2, description } = data;
  return (
    <div className="items ">
      <div className="painting flex flex-col gap-6">
        <img src={img1 || "/"} className="object-cover md:h-[250px] md:w-[250px]" />
        <img
          src={img2 || "/"}
          className="hidden md:block object-cover  md:h-[250px] md:w-[250px]"
        />
        <div>
          <p className="text-xl font-subject font-bold uppercase">
            {title || "Unknown"}{" "}
          </p>
          <p className="text-lg font-subtitle font-semibold lowercase">
            {subtitle || "Unknown"}
          </p>
          <p className="text-lg font-subtitle font-semibold lowercase">
            {description || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
