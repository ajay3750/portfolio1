import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/accenture.jpg"
import article2 from "../../public/images/articles/cognizant.jpg"
import {motion, useMotionValue} from "framer-motion"
import article3 from "../../public/images/articles/isro.jpg"
import article4 from "../../public/images/articles/ml.jpg"
import article5 from "../../public/images/articles/html.jpg"
import article6 from "../../public/images/articles/iitkanpur.jpg"
import article7 from "../../public/images/articles/aws.jpg"
import article8 from "../../public/images/articles/ai aware.jpg"
import article9 from "../../public/images/articles/ai expert.jpg"
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage=motion(Image);
const MovingImg=({title, img, link})=>{
  const x=useMotionValue(0);
  const y=useMotionValue(0);
  const imgRef=useRef(null);
  function handleMouse(event){
    imgRef.current.style.display="inline-block";
    x.set(event.pageX);
    y.set(-10);
    
  }
  function handleMouseLeave(event){
    imgRef.current.style.display="none";
    x.set(0);
    y.set(0);
    
  }
  

  return(
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
        <h2 className="capitalize text-xl font-semibold hover: underline">{title}</h2>
      <FramerImage  
      style={{x:x , y:y}}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration:0.2}}}
      ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absoulte rounded-lg"/>
      </Link>
  )

}

const Article=({img, title ,date, link})=>{
  return(
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-yellow text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    ">
      <MovingImg title={title} img={img} link={link}/>
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
    </motion.li>
  )
}


const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-skyblue border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link} 
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px)50vw,50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover: underline mt-4"> {title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Ajay Maurya| Articles Page</title>
        <meta name="description" content="my portfolio website" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col itmes-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="A certificate without knowledge is a gun without bullets in your hand." className="mb-16 text-6xl" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticles 
            title= "Consultant Virtual Experience Program" 
           summary=""
            time=""
            link="/" 
            img={article1}
            />
           
           <FeaturedArticles 
            title= "Ready, Set, Agile! Virtual Experiance Program" 
           summary=""
            time=""
            link="/" 
            img={article2}
            />
           
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32"> All Certificates</h2>
        <ul>
          <Article
          title="Online summer school on usefulness of remote sensing & gis for environmental studies(ISRO)"
          date="August 6, 2021"
          link="/"
          img={article3}
          />
            <Article
          title="Machine learning using python"
          date="July 8, 2021"
          link="/"
          img={article4}
          />
            <Article
          title="The story of Photoelectric Effect(IIT Kanpur)"
          date="August 15-17, 2023"
          link="https://bsc.hcverma.in/sites/default/files/penopcyc/certificates/611e2086bc8ce6e5ea185a50.pdf"
          img={article6}
          />
            <Article
          title="Iot foundation telemetry(AWS)"
          date="July 18, 2021"
          link="/"
          img={article7}
          />
            <Article
          title="AI appriciate(INTEL)"
          date="August 6, 2021"
          link="/"
          img={article8}
          />
          <Article
          title="AI aware(INTEL)"
          date="August 6, 2021"
          link="/"
          img={article9}
          />
        </ul>
        
        </Layout>
      </main>
    </>
  );
};

export default articles;
