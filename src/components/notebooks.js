import Link from "next/link";
import Hero from "./hero";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section4() {
  const { data, isLoading, isError } = fetcher("api/notebooks");
  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>;

  return (
    <section className="bg-gradient-to-b from-halcyon-50 to-halcyon-100">
      <div className="md:h-screen md:mx-auto md:p-20 p-6 flex flex-col justify-between gap-4">
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
        <div>
          <div className="flex flex-col md:flex-row md:justify-between pb-6">
            <h1 className="font-subject font-bold text-3xl">notebooks</h1>
          </div>

          {/* grid columns */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 place-content-center">
            {data?.map((value, index) => (
              <Post data={value} key={index}></Post>
            ))}
          </div>
        </div>
        <div className="flex justify-center p-2">
          <p className="font-semibold font-description">
            A5, 90 GSM Premium White Bookpaper 60 leaves (120 ruled pages)
            Halcyon Art original painting at the front and back cover Comes with
            free bookmark, and 5 piece sticker set Notebook + Tote Bag bundle
            also available! (Php 650, with additional free art print) Available
            also in wholesale prices (Php 300)
          </p>
        </div>
        <div className="footer flex justify-center">
          <Link href={"/"} className="text-base font-bold underline">
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
    <div className="items flex gap-6">
      <div className="painting flex flex-col justify-between">
        <img src={img1 || "/"} className="object-cover md:h-[250px] md:w-[250px]" />
        <p className="text-2xl font-subject font-bold uppercase">
          {title || "Unknown"}{" "}
        </p>
        <p className="text-lg font-subtitle font-semibold lowercase">
          {subtitle || "Unknown"} <br /> {description || "Unknown"}
        </p>
      </div>
      <div className="painting-info hidden md:block">
        <img
          src={img2 || "/"}
          className="object-cover object-center md:h-[400px] md:w-[250px]"
        />
      </div>
    </div>
  );
}
