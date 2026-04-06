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
      title: "Beautique Store",
      description:
        "Full-stack e-commerce platform with a Next.js frontend and FastAPI/PostgreSQL backend. Features product management, cart functionality, and Cloudinary image hosting.",
      image: "/images/beautique_store.jpg",
      liveLink: "https://beautique-store.vercel.app/",
      githubLink: "https://github.com/SabehShaikh/beautique-store",
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "Cloudinary", "Tailwind"],
    },
    {
      title: "AI Native Textbook",
      description:
        "An AI-powered textbook platform with an integrated RAG chatbot. Built with Groq (LLaMA 3.1 8B), Gemini embeddings, and Qdrant Cloud for vector search.",
      image: "/images/ainativebook.jpg",
      liveLink: "https://ai-native-text-book.vercel.app/",
      githubLink: "https://github.com/SabehShaikh/ai-native-text-book",
      technologies: ["Next.js", "Groq", "Qdrant", "Gemini", "RAG"],
    },
    {
      title: "Furniro Ecommerce",
      description:
        "Stylish furniture e-commerce store with a fully responsive UI and product catalog powered by Sanity CMS.",
      image: "/images/furniro.png",
      liveLink: "https://furniro-ecommerce-sabeh.vercel.app/",
      githubLink: "https://github.com/SabehShaikh/furniro-ecommerce",
      technologies: ["Next.js", "Sanity", "Tailwind", "TypeScript"],
    },
    {
      title: "Todo App with ChatKit",
      description:
        "A cloud-native todo app built with a microservices architecture using Kafka, Dapr, and Kubernetes. Includes an AI chat assistant powered by ChatKit.",
      image: "/images/todo_chat_kit.jpg",
      liveLink: "https://hackathon-2-chatkit.vercel.app/",
      githubLink: "https://github.com/SabehShaikh/-hackathon-2",
      technologies: ["Next.js", "Kafka", "Dapr", "Kubernetes", "ChatKit"],
    },
    {
      title: "Blog App",
      description:
        "A clean blogging platform where users can read and explore posts across different categories. Built with Next.js and a simple content structure.",
      image: "/images/blog.png",
      liveLink: "https://blog-app-sigma-kohl.vercel.app/",
      githubLink: "https://github.com/SabehShaikh/Milestone3-BlogApp",
      technologies: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
      title: "Movie Search App",
      description:
        "Search for any movie and get details instantly using the MovieDB API. Fast, clean, and responsive.",
      image: "/images/movie_search.PNG",
      liveLink: "https://movie-search-sabeh.vercel.app/",
      githubLink:
        "https://github.com/SabehShaikh/30days-of-30projects-pt2/tree/main/16_movie_search",
      technologies: ["Next.js", "MovieDB API", "Tailwind", "TypeScript"],
    },
    {
      title: "URL Shortener",
      description:
        "Shorten long URLs instantly with a clean and easy-to-use interface.",
      image: "/images/url.jpg",
      liveLink: "https://url-shortener-sabeh.vercel.app/",
      githubLink:
        "https://github.com/SabehShaikh/30days-of-30projects-pt3/tree/main/27_url_shortener",
      technologies: ["Next.js", "API", "Tailwind", "TypeScript"],
    },
    {
      title: "Weather App",
      description:
        "Stay updated with real-time weather information for any city using a live weather API.",
      image: "/images/weatherapp (1).jpg",
      liveLink: "https://weather-widget-sabeh.vercel.app/",
      githubLink:
        "https://github.com/SabehShaikh/GenAi/tree/main/30days-of-30projects(pt1)/02_weather_widget",
      technologies: ["Next.js", "Tailwind", "API", "TypeScript"],
    },
    {
      title: "Quiz App",
      description:
        "Test your knowledge with interactive quizzes across multiple categories. Tracks your score in real time.",
      image: "/images/quiz-app.jpeg",
      liveLink: "https://quizappsabeh.netlify.app/",
      githubLink: "https://github.com/SabehShaikh/quizApp/tree/main",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
  ];

  const displayProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          A showcase of web applications and AI-powered tools — from full-stack
          e-commerce platforms to RAG chatbots and cloud-native apps.
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
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.liveLink} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={project.githubLink} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
}