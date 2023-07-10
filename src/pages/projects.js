import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/websiteimage.png";
import project2 from "../../public/images/projects/project2.png"
import project3 from "../../public/images/projects/project3.jpg"
import project4 from "../../public/images/projects/project4.jpg"
import {motion} from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage=motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
    
      className="w-full flex items-center justify-between relative rounded-br-4xl
        rounded-3xl border border-solid border-light bg-yellow shadow-4xl
        p-12 dark:bg-dark dark:border-light"
    >
    <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className=" w-full h-auto"
        whileHover={{scale:1.05}}
          transition={{duration:0.2}} 
          priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px)50vw"
          />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            {" "}
            Click Here{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl  border border-solid border-dark bg-light p-6 relative  dark:bg-dark dark:border-light">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
          transition={{duration:0.2}} />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex itmes-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="  text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Amazing World| Projects Page</title>
        <meta name="description" content="my portfolio website" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-12">
          <AnimatedText
            text="Digital design is like painting, except the paint never dries"
            className="mb-12 text-6xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-20">
            <div className="col-span-12">
              <FeaturedProject
                title="Bhagwat geeta website"
                img={project1}
                summary=""
                link="https://github.com/ajay3750/krishna-website"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Instagram user interface"
                img={project2}
                summary=""
                link="https://www.figma.com/file/8zehEnDctJkbio1jfmllwk/Untitled?type=design&node-id=0%3A1&mode=design&t=vWtnW69BdwUuwWHa-1"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Spotify application user interface"
                img={project3}
                summary=""
                link="https://www.figma.com/file/5FfdUB5gNZ4OW5WYC8gO2d/spotify?type=design&node-id=0%3A1&mode=design&t=yZFaGLAJ3HgGLBdn-1"
                github="/"
                type="Featured Project"
              />
            </div>
            
            <div className="col-span-12">
              <FeaturedProject
                title="Swiggy application User interface"
                img={project4}
                summary=""
                link="https://www.figma.com/file/RdX37jFEWpUX2eljOqMef8/My-swiggy-project?type=design&node-id=0%3A1&mode=design&t=Poy4vKdM7Bhftu5A-1"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6"></div>
            <div className="col-span-6"></div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
