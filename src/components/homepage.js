import Image from "next/image";
import Link from "next/link";
import Hero from "./hero";
import Card from "./_child/card";
import { ImFacebook, ImInstagram, ImYoutube } from "react-icons/im";

export default function homepage() {
  return (
    <section className="bg-gradient-to-b from-halcyon-50 to-halcyon-100">
      <div className="md:h-screen container mx-auto md:p-20 p-6">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="homepage">
            <div className="title pb-3">
              <h className="font-bold font-subject text-accent text-center lowercase text-4xl md:text-6xl">
                Halcyon <br /> Art Gallery
              </h>
            </div>
            <div className="home-image ">
              <Image
                className="rounded-xl shadow-xl"
                src={"/images/Homepage.png"}
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className="card-links flex flex-col gap-6 justify-center lg:p-10">
            <div className="hidden social-icons md:flex gap-10">
              <Link href={"https://facebook.com/halcyonartgallery"}>
                <ImFacebook
                  size={45}
                  className="fill-primary hover:fill-primary-focus"
                />
              </Link>
              <Link href={"https://instagram.com/hal.cyon.art/"}>
                <ImInstagram
                  size={45}
                  className="fill-primary hover:fill-primary-focus"
                />
              </Link>
              <Link href={"https://youtube.com/HalcyonArt"}>
                <ImYoutube
                  size={45}
                  className="fill-primary hover:fill-primary-focus"
                />
              </Link>
            </div>

            <div className="card-1">
              <Card></Card>
            </div>
          </div>
        </div>
      </div>

      <Hero></Hero>
    </section>
  );
}
