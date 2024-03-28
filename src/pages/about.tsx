import photo from '../assets/photo-1.png';

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center m-auto font-Roboto md:space-x-10">
      <div className="md:my-auto mt-6 md:max-w-lg max-w-80 space-y-4 md:text-start text-center">
        <div className="text-5xl font-black mb-10">About Me</div>
        <div className="text-2xl font-black text-gray-600">
          Hey there! I'm Aaron
        </div>
        <p>
          A self-taught web developer/software engineer, with dreams as big as
          my love for technology and programing.
        </p>
        <p>
          Passion drives me. Whether it's coding up a storm or diving into the
          latest web dev trends, I'm all about turning ideas into interactive
          online experiences.
        </p>
        <p>
          I'm not just a code junkie; I'm a perpetual learner. From tinkering
          with HTML and CSS to mastering JavaScript wonders like React and
          Node.js, I'm on a rollercoaster of continuous improvement. As
          throughout the years, I've been pushing myself to learn and improve
          myself whenever I have free time on technologies that interest me,
          whether it be Web Development, Software Engineering, and even Game
          Development!
        </p>

        <p>
          With that said, I am aspiring to work on myself and work on my career
          after the numerous challenges I've had the in the past, and I try to
          look forward to the future as much as I can.
        </p>
      </div>
      <div className="md:mt-0 mt-6">
        <img src={photo} alt="" className="md:w-96 sm:w-[500px] w-[320px]" />
      </div>
    </div>
  );
}
