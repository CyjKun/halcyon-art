import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section5() {
  const { data, isLoading, isError } = fetcher("api/totebags");
  if(isLoading) return <Spinner></Spinner>;
  if(isError) return <Error></Error>;

  return (
    <section id="about" className="bg-gradient-to-b from-halcyon-50 to-halcyon-100">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row md:gap-24">
          <img
            src="/images/Portrait.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold font-subject">
              Renztelle Anne Miclat
            </h1>
            <div className="font-paragraph text-xl">
              <p className="py-3">
                I’m 25, a self taught artist based in the Philippines.
              </p>
              <p className="py-3">
                My art style is impressionism, inspired by French painter Monet.
                I work with acrylics, mediums, and chalk pastels. I get creative
                when I travel, but when I see skies and sunsets, that’s when my
                inspiration is at its peak.
              </p>
              <p className="py-3">
                I am able to sell my paintings all year round – which is already
                a huge milestone for me. I was able to exhibit in certain
                galleries in Tagaytay, Philippines and even in Japan. I did
                collaborations with different brands and I am truly thankful for
                that. My artwork is also featured in an art magazine published
                in the Philippines.
              </p>
              <p className="py-3">
                Halcyon Art started in 2020, in a little art corner just in my
                bedroom. With a degree in accounting, I never thought art would
                be an open door. I used painting as a form of therapy at first,
                then I discovered there was a lot more to this passion than just
                a stress outlet.
              </p>
              <p className="py-3">
                I wanted my paintings to be relatable to another person’s eye –
                like there’s more to life than 9 to 5 jobs and deadlines. Two
                years later, I was able to experience more than I could ever
                imagine. I realized art has a capability to inspire others to
                express their authentic versions as well.
              </p>
              <p className="py-3">
                Now art is a part of me & I am truly grateful that I am able to
                convey my story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, subtitle, img1, img2, description } = data;
  return (
    <div className="items ">
      <div className="painting flex flex-col gap-6">
        <img src={img1 || "/"} className="object-cover h-[250px] w-[250px]" />
        <img
          src={img2 || "/"}
          className="hidden md:block object-cover  h-[250px] w-[250px]"
        />
        <div>
          <p className="text-xl font-subject font-bold uppercase">
            {title || "Unknown"}{" "}
          </p>
          <p className="text-lg font-subject font-semibold lowercase">
            {subtitle || "Unknown"}
          </p>
          <p className="text-lg font-subject font-semibold lowercase">
            {description || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
