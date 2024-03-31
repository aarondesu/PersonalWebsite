import { motion } from 'framer-motion';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row lg:m-auto mx-auto font-Roboto md:space-x-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="space-y-4">
        <div className="text-5xl font-black mb-10 text-center">
          &#123; About &#125;
        </div>
        <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-10 md:divide-y-0 divide-y-2 divide-dotted">
          <div className="md:max-w-lg space-y-4">
            <h1 className="text-2xl font-black ">Hey there! I'm Aaron</h1>
            <p>
              A self-taught web developer/software engineer, with dreams as big
              as my love for technology and programing.
            </p>
            <p>
              Passion drives me. Whether it's coding up a storm or diving into
              the latest web dev trends, I'm all about turning ideas into
              interactive online experiences.
            </p>
            <p>
              I'm not just a code junkie; I'm a perpetual learner. From
              tinkering with HTML and CSS to mastering JavaScript wonders like
              React and Node.js, I'm on a rollercoaster of continuous
              improvement. As throughout the years, I've been pushing myself to
              learn and improve myself whenever I have free time on technologies
              that interest me, whether it be Web Development, Software
              Engineering, and even Game Development!
            </p>

            <p>
              With that said, I am aspiring to work on myself and work on my
              career after the numerous challenges I've had the in the past, and
              I try to look forward to the future as much as I can.
            </p>
          </div>

          <div className="space-y-4 md:py-0 py-10">
            <h1 className="text-2xl font-black">Skills</h1>
            <div className="space-y-2">
              <h1 className="font-bold">Techincal Skills</h1>
              <ul className="space-y-2 list-inside list-disc">
                <li>C#, Java, and Javascript/Typescript</li>
                <li>Node.js</li>
                <li>Frontend with React/ReduxJs/NextJs</li>
                <li>Backend with ExpressJs/NestJs</li>
                <li>Database management with MySQL/PostgresSQL</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold">Tools</h1>
              <ul className="space-y-2 list-inside list-disc">
                <li>Krita</li>
                <li>Figma</li>
                <li>Visual Studio Code</li>
                <li>Github</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold">Development Practices</h1>
              <ul className="space-y-2 list-inside list-disc">
                <li>Agile Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
