"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils";
import { TypingText } from "./TypingText";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.2, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-200"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it&apos;s really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{" "}
        of today, using only{" "}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. {"Let's "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="w-[18px] h-[28px] mt-[28px]"
      >
        <Image
          src="/arrow-down.svg"
          alt="arrow down"
          width={18}
          height={28}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
