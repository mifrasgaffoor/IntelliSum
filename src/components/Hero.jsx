import React from "react";
import { FaGithub } from "react-icons/fa";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-47 h-16 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/mifrasgaffoor/IntelliSum", "_blank")
          }
          className="black_btn flex items-center"
        >
          <FaGithub className="mr-2" /> GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">
          Textual Intelligence GPT-4
        </span>
      </h1>
      <h2 className="desc">
        Use <span className="font-bold orange_gradient mr-2">IntelliSum</span>
        an open-source tool that simplifies complex articles by providing
        concise and clear summaries, enhancing comprehension and accessibility.
      </h2>
    </header>
  );
};

export default Hero;
