"use client";
import Link from "next/link";
export default function Home() {
  return (
    <>

    <div >

    <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-7 mt-10 text-4xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-left">
                  Explore the Future of Innovation and Knowledge
                </h1>
                {/* Explore the Future of Innovation and Knowledge */}
                <p className="mb-12 mt-10 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-2xl  text-left ">
                  The world of technology, data, software, applications, and
                  science converge to inspire and inform. Dive into a sea of
                  creativity and discovery as our community shares their
                  insights and experiences in these dynamic fields. Join us in
                  shaping the future of knowledge, and let your curiosity soar
                  in the realms of technology and science. Explore, learn, and
                  be part of the ever-evolving world right 'Here'.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-10 mt-10 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white 
                  hover:bg-primary/80"
                  href={"/blogs"}
                >
                  Explore All Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>

   


    <div>


    </div>


      

     
              
    </>
  );
}
