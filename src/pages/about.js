import AnimatedText from "@/components/AnimatedText";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/developerprofile.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Ajay Maurya| About Page</title>
        <meta name="description" content="my portfolio website" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center  dark:text-light ">
        <Layout className="pt-16 ">
          <AnimatedText text="So grateful to be sharing my world with you." className=" mb-16 text-4xl" />
          <div className="grid w-full grid-cols-6 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <AnimatedText className="mb-4 text-5xl font-bold uppercase text-dark/75 dark:text-light/75" text="Biography"/>
                
            
              <p className="font-mono text-sm text-dark dark:text-light">
              This is Ajay Maurya. I am a web designer who is passionate about creating stunning, useful websites. I am pursuing a B.Tech in Electronics and Communication Engineering at Vellore Institute of Technology in Vellore, Tamil Nadu. My lifelong obsession with constructing things has inspired me to pursue a career in web development. I have always sought to change things by manipulating materials and objects since I was a little child.
              </p>

              <p className="my-4 font-mono text-dark  dark:text-light text-sm">
              Being a science major, I continually research other fields to extend my artistic interests. I combine my experience in fine art with design studies and illustration.
              </p>
              <p className="font-mono text-dark dark:text-light text-sm">

              My current area of interests areWeb development, the designing and testing of electrical devices and various systems are some of my current interests. In my capacity as an electronics and communication engineer, I have also worked with numerous simulation programmes, including Keil MicroVision 5, ModelSim, Multisim, Cadence, etc., and investigated a variety of topics, including analogue communication systems, microprocessors and microcontrollers, digital signal processing, the internet of things, VLSI system design, robotics and automation, etc.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light
"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="AmazingWorld"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px)50vw,33vw"


              />
            </div>
            
            <div className="mt-20 flex flex-row justify-between px-80">

              <div className="flex flex-row justify-center">
                <span className="inline-block text-7xl font-bold text-orange">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-orange/75 dark:text-orange/75" >Websites built</h2>
              </div>
             

              <div className="flex flex-row justify-center">
                <span className="inline-block text-7xl font-bold text-red">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-red/75  dark:text-light/75"> User interfaces</h2>
              </div>

              <div className="flex flex-row  justify-center">
                <span className="inline-block text-7xl font-bold text-green">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-green/75  dark:text-light/75">Experience</h2>
              </div>
            </div>
          </div>
          
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
