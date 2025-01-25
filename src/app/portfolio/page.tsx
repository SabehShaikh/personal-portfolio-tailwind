"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Furniro Ecommerce",
      description:
        "Discover a world of stylish furniture and home decor, all in one place.",
      image: "/images/furniro.png",
      liveLink: "https://furniro-ecommerce-sabeh.vercel.app/",
      githubLink: "https://github.com/SabehShaikh/furniro-ecommerce",
      technologies: ["Next.js", "Sanity", "Tailwind", "TypeScript"],
    },

    {
      title: "Blog App",

      description:
        "Discover a world of stylish furniture and home decor, all in one place.",
      image: "/images/blog.png",
      liveLink: "https://blog-app-sigma-kohl.vercel.app/",
      githubLink: "https://github.com/SabehShaikh/Milestone3-BlogApp",
      technologies: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
      title: "Movie Search App",
      description: "Search for your favorite movies quickly and easily.",
      image: "/images/movie_search.PNG",
      liveLink: "https://movie-search-sabeh.vercel.app/",
      githubLink:
        "https://github.com/SabehShaikh/30days-of-30projects-pt2/tree/main/16_movie_search",
      technologies: ["Next.js", "MovieDB API", "Tailwind", "TypeScript"],
    },
    {
      title: "Quiz App",
      description:
        "Test your knowledge with fun quizzes and challenges, and challenge your friends to see who's the smartest.",
      image: "/images/quiz-app.jpeg",
      liveLink: "https://quizappsabeh.netlify.app/",
      githubLink: "https://github.com/SabehShaikh/quizApp/tree/main",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Currency Converter",
      description:
        "Easily convert currencies with this user-friendly app, ensuring you get the best rates.",
      image: "/images/currencyconvo.jpg",
      liveLink: "https://exchangeratebysabeh.netlify.app/",
      githubLink:
        "https://github.com/SabehShaikh/exchange-rates/tree/main/exchange-rates",
      technologies: ["JavaScript", "API", "HTML", "CSS"],
    },

    {
      title: "URL Shortener",
      description: "Shorten long URLs and save time with this easy-to-use app.",
      image: "/images/url.jpg",
      liveLink: "https://url-shortener-sabeh.vercel.app/",
      githubLink:
        "https://github.com/SabehShaikh/30days-of-30projects-pt3/tree/main/27_url_shortener",
      technologies: ["Next.js", "API", "Tailwind", "TypeScript"],
    },
    {
      title: "Text Analysis App",
      description: "Enter text and see the word and character count.",
      image: "/images/text-analysis.png",
      liveLink: "https://text-analysis-sabeh.vercel.app/",
      githubLink: "https://github.com/SabehShaikh/TextAnalysis",
      technologies: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
      title: "Todo List",
      description:
        "Keep track of your tasks and stay organized with our todo list.",
      image: "/images/todo_list.png",
      liveLink: "https://todo-list-sabeh.vercel.app/",
      githubLink:
        "https://github.com/SabehShaikh/30days-of-30projects-pt3/tree/main/28_todo_list",
      technologies: ["Next.js", "LocalStorage", "Tailwind", "TypeScript"],
    },

    {
      title: "Weather App",
      description:
        "Stay updated with the latest weather information, so you can plan your day with confidence.",
      image: "/images/weatherapp (1).jpg",
      liveLink: "https://weather-widget-sabeh.vercel.app/",
      githubLink:
        "https://github.com/SabehShaikh/GenAi/tree/main/30days-of-30projects(pt1)/02_weather_widget",
      technologies: ["Next.js", "Tailwind", "API", "TypeScript"],
    },
  ];

  const displayProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of innovative web applications demonstrating my skills in
          frontend development, responsive design, and creative problem-solving.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {displayProjects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <Button variant="outline" asChild>
                <Link href={project.liveLink} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubLink} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
}
