'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaPaperPlane, 
  FaFacebookF, 
  FaXTwitter, 
  FaLinkedinIn, 
  FaGithub 
} from 'react-icons/fa6';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/Sabeh420/",
      label: "Facebook"
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/shaikh_sabeh",
      label: "Twitter"
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/sabeh-shaikh-016623245/",
      label: "LinkedIn"
    },
    {
      icon: FaGithub,
      href: "https://github.com/SabehShaikh",
      label: "GitHub"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="flex items-center text-lg">
              <FaPaperPlane className="text-emerald-400 mr-4 text-2xl" />
              <span>sabehshaikh201@gmail.com</span>
            </div>
            
            <TooltipProvider>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Link 
                        href={href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-emerald-400 transition-colors"
                        aria-label={label}
                      >
                        <Icon className="text-3xl" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>

            <Button 
              asChild 
              variant="outline" 
              className="w-full md:w-auto"
            >
              <Link 
                href="/images/SabehShaikhUpdatedResume.pdf" 
                
                download
              >
                Download CV
              </Link>
            </Button>
          </div>

          {/* Right Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="resize-none"
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}