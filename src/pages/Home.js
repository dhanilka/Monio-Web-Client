import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import aiimg from "../assets/ai.png";
import aiimg2 from "../assets/ai2.png";
import chip from "../assets/chip.png";

function Home() {
  return (
    <div
      style={{ height: "auto" }}
      //   className="bg-gray-900"
    >
      <div className="">
        <Navbar />
      </div>
      <section id="home">
        <div className="w-11/12 mx-auto pt-9 h-screen">
          <div className="flex justify-between">
            <div>
              <h1 className="text-white text-7xl font-bold pt-40">
                Monio <span className="text-blue-400">Visual</span> <br />{" "}
                Question Answering
              </h1>
              <div className="pt-6 pb-6">
                <div className="h-12 bg-blue-500 w-80 cursor-pointer hover:bg-blue-800 justify-center items-center flex rounded-md">
                  <p className="text-white font-bold ">
                    Try monio <i className="bi bi-arrow-right-circle"></i>
                  </p>
                </div>
                <p className="ml-6 text-gray-400">
                  Sign up and get your{" "}
                  <span className="text-yellow-300">FREE 15 chips</span>{" "}
                </p>
              </div>

              <div className="w-auto  pt-4">
                <h1 className="text-gray-300 ml-2">Key features</h1> <hr />
              </div>
              <div className="flex">
                <div className="bg-gray-800 m-2 rounded-md  ">
                  <p className="text-white font-bold m-3">
                    Identify Images <i className="bi bi-robot"></i>
                  </p>
                </div>
                <div className="bg-gray-800 m-2 rounded-md   ">
                  <p className="text-white font-bold m-3">
                    Sketch2Code <i className="bi bi-code-slash"></i>
                  </p>
                </div>
                <div className="bg-gray-800 m-2 rounded-md   ">
                  <p className="text-white font-bold m-3">
                    Multi Languages <i className="bi bi-translate"></i>
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="bg-gray-800 m-2 rounded-md  ">
                  <p className="text-white font-bold m-3">
                    Question Answering <i className="bi bi-patch-question"></i>
                  </p>
                </div>
                <div className="bg-gray-800 m-2 rounded-md   ">
                  <p className="text-white font-bold m-3">
                    Graph Reading <i className="bi bi-graph-up"></i>
                  </p>
                </div>
                <div className="bg-gray-800 m-2 rounded-md   ">
                  <p className="text-white font-bold m-3">
                    Deep Vision <i className="bi bi-bullseye"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-32 pb-10">
              <img src={aiimg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="w-11/12 mx-auto pt-8 bg-gray-700 p-3 rounded-md">
          <div className="">
            <div className="">
              <h2 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl pb-2">
                Overview
              </h2>

              <p className="text-gray-300">
                Explore the cutting-edge capabilities of Monio AI, your go-to
                Visual Question Answering (VQA) model. This advanced AI excels
                at transforming sketches into code, identifying images with
                precision, recognizing prominent personalities, and delivering
                insightful answers to diverse questions. With its exceptional
                graph and chart reading abilities, Monio AI stands as a
                versatile solution for a wide range of visual tasks. Elevate
                your projects with Monio AI's accuracy, efficiency, and
                comprehensive visual understanding, making it the optimal choice
                for seamless integration and enhanced user experiences.
              </p>
            </div>

            <div className="pt-4">
              {/* <p className="cursor-pointer text-white font-bold text-xl">View more details </p> */}

              <div className="flex justify-between">
                <div className="bg-gray-800 w-3/5 p-4 m-6 ml-0 rounded-lg     ">
                  <p className="text-white font-bold text-lg hover:text-blue-500 ">
                    Identify Images with Precision{" "}
                    <i className="bi bi-robot"></i>
                  </p>
                  <p className="text-gray-300">
                    Unlock the potential of Monio AI's advanced image
                    recognition, allowing you to seamlessly identify and
                    interpret complex images with unparalleled precision.
                    Enhance your applications and projects with the ability to
                    recognize and understand diverse visual content
                    effortlessly.
                  </p>
                </div>

                <div className="bg-gray-800 w-3/5 p-4 m-6 ml-0 rounded-lg ">
                  <p className="text-white font-bold text-lg">
                    Transform Sketches into Functional Code{" "}
                    <i className="bi bi-code-slash"></i>
                  </p>
                  <p className="text-gray-300">
                    Experience the future of development with Monio AI's
                    Sketch2Code feature. Effortlessly convert hand-drawn
                    sketches into functional and efficient code. Bridge the gap
                    between design and development, streamlining your workflow
                    and bringing your creative concepts to life with ease.
                  </p>
                </div>

                <div className="bg-gray-800 w-3/5 p-4 m-6 ml-0 rounded-lg ">
                  <p className="text-white font-bold text-lg">
                    Multilingual Support for Global Reach{" "}
                    <i className="bi bi-translate"></i>
                  </p>
                  <p className="text-gray-300">
                    Break down language barriers and connect with a global
                    audience using Monio AI's Multi Languages feature. Enjoy
                    seamless communication and user interaction by incorporating
                    multilingual support into your applications, websites, and
                    projects.
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="bg-gray-800 w-3/5 p-4 m-6 ml-0 rounded-lg ">
                  <p className="text-white font-bold text-lg">
                    Intelligent Question Answering{" "}
                    <i className="bi bi-patch-question"></i>
                  </p>
                  <p className="text-gray-300">
                    Elevate user engagement with Monio AI's Question Answering
                    capability. Provide users with accurate and insightful
                    responses to a wide range of queries, enhancing the
                    interactivity and usefulness of your applications or
                    platforms.
                  </p>
                </div>

                <div className="bg-gray-800 w-3/5 p-4 m-6 ml-0 rounded-lg ">
                  <p className="text-white font-bold text-lg">
                    Comprehensive Graph Reading{" "}
                    <i className="bi bi-graph-up"></i>
                  </p>
                  <p className="text-gray-300">
                    Gain a deeper understanding of complex data sets through
                    Monio AI's Graph Reading feature. Uncover meaningful
                    insights from graphical representations, enabling you to
                    make informed decisions and extract valuable information
                    from various types of graphs.
                  </p>
                </div>

                <div className="bg-gray-800 w-3/5 p-4 m-6 ml-0 rounded-lg ">
                  <p className="text-white font-bold text-lg">
                    Cutting-edge Deep Vision <i className="bi bi-bullseye"></i>
                  </p>
                  <p className="text-gray-300">
                    Explore the pinnacle of visual intelligence with Monio AI's
                    Deep Vision. Achieve unparalleled accuracy and precision in
                    object recognition, allowing your applications to interpret
                    and understand visual data with exceptional proficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id='api'>
            <div className="w-11/12 mx-auto pt-4">
                <div>
                    <p className="text-white font-bold text-2xl">API</p>
                    <div>
                        <div className="bg-gray-800 flex justify-center items-center h-20 rounded-lg">
                            <p className="text-white font-bold text-lg text-center">Coming Soon !</p>
                        </div>
                    </div>
                </div>
            </div>
      </section> */}

      <section id="pricing" className=" ">
        <div class=" px-4 pt-0  w-11/12 mx-auto rounded-md">
          <div
            aria-hidden="true"
            class=" inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
          >
            <div class="blur-[106px] h-0 bg-gradient-to-br to-purple-400 from-blue-700"></div>
            <div class="blur-[106px] h-0 pt-8 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>
          <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div class="mb-10 space-y-4 px-6 md:px-0">
              <h2 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Pricing
              </h2>
            </div>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
                  Starter
                </h2>
                <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span class="text-3xl sm:text-4xl font-bold text-white">
                    $4.50
                  </span>{" "}
                  / Onetime
                </p>
                <ul class="list-none list-inside mb-6 text-center text-gray-300">
                  <li class="font-bold text-blue-400">30 Chips</li>
                  <li>
                    API Keys{" "}
                    <span className=" text-red-600">
                      <i className="bi bi-x-lg"></i>
                    </span>
                  </li>
                  <li>
                    All features{" "}
                    <span className="text-green-600">
                      <i className="i bi-check2"></i>
                    </span>
                  </li>
                  <li>
                    Limited Support{" "}
                    <span className="text-green-600">
                      <i className="i bi-check2"></i>
                    </span>
                  </li>
                </ul>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  href="https://example.com/starter-plan"
                >
                  <span class="relative text-sm font-semibold text-black">
                    Get Started
                  </span>
                </a>
              </div>
              <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
                  Pro
                </h2>
                <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span class="text-3xl sm:text-4xl font-bold text-white">
                    $25{" "}
                  </span>{" "}
                  / Onetime
                </p>
                <ul class="list-none list-inside mb-6 text-center text-gray-300">
                  <li class="font-bold text-blue-400">180 Chips</li>
                  <li>
                    API Keys{" "}
                    <span className=" text-red-600">
                      <i className="bi bi-x-lg"></i>
                    </span>
                  </li>
                  <li>
                    All features{" "}
                    <span className="text-green-600">
                      <i className="i bi-check2"></i>
                    </span>
                  </li>
                  <li>
                    Limited Support{" "}
                    <span className="text-green-600">
                      <i className="i bi-check2"></i>
                    </span>
                  </li>
                </ul>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  href="https://example.com/pro-plan"
                >
                  <span class="relative text-sm font-semibold text-black">
                    Get Started
                  </span>
                </a>
              </div>
              <div class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-blue-950 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md cursor-not-allowed">
                <h2 class="text-lg sm:text-xl font-medium text-white mb-2">
                  Enterprise
                </h2>
                <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                  <span class="text-3xl sm:text-4xl font-bold text-white">
                    $399
                  </span>{" "}
                  / Month
                </p>
                <ul class="list-none list-inside mb-6 text-center text-gray-300">
                  <li class="font-bold text-orange-300">Unlimited Chips</li>
                  <li>
                    API Keys{" "}
                    <span className="text-green-600">
                      <i className="i bi-check2"></i>
                    </span>
                  </li>
                  <li>
                    All features{" "}
                    <span className="text-green-600">
                      <i className="i bi-check2"></i>
                    </span>
                  </li>
                  <li>
                    Premium Support{" "}
                    <span className="text-green-600">
                      <i className="i bi-check2"></i>
                    </span>
                  </li>
                </ul>
                <p
                  target="_blank"
                  rel="noopener noreferrer"
                  class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max cursor-not-allowed"
                
                  
                >
                  <span class="relative text-sm font-semibold text-black">
                    Coming soon
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-12 bg-gray-900">
        <div className="w-11/12 mx-auto bg-gray-700 rounded-lg p-4">
          <h2 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl pb-2">
            Contact us
          </h2>

          <div className="w-1/2 mx-auto">
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>

            <div className="pt-4"></div>
            <div className="w-full flex justify-center">
              <div className="h-12 bg-blue-500 w-80 cursor-pointer hover:bg-blue-800 justify-center items-center flex rounded-md">
                <p className="text-white font-bold ">
                  Send <i className="bi bi-send"></i>
                </p>
              </div>
            </div>

            <div className="pb-6"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
