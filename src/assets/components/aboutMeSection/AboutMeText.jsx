import React from 'react'

const AboutMeText = () => {
  return (
    <div className=" flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white ">I’m a passionate developer with a strong focus on React, Tailwind CSS, and Machine Learning. I enjoy building interactive web applications, including projects like e-commerce platforms, mental health chatbots, and AI-powered tools. My expertise spans data science, AI models, and big data frameworks like Apache Spark and Hadoop.
            I thrive on solving complex problems, whether it's developing scheduling AI models, working with deep learning architectures like RNNs and LSTMs, or enhancing images using GANs and curently learning Gen-AI. With a knack for both front-end design and back-end logic, I love creating seamless, responsive user experiences.
            I’m currently expanding my skills in Tailwind CSS, integrating it with React to craft beautiful, responsive UIs. 🚀</p>
            <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-400 cursor-pointer md:self-start sm:self-center text-white hover:text-black mx-8">My Projects</button>
    </div>
  )
}

export default AboutMeText