'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:sabehshaikh201@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/sabeh-shaikh/',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/SabehShaikh',
      label: 'GitHub',
    },
    {
      icon: FaXTwitter,
      href: 'https://twitter.com/shaikh_sabeh',
      label: 'Twitter',
    },
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/Sabeh420/',
      label: 'Facebook',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sabehshaikh201@gmail.com',
      href: 'mailto:sabehshaikh201@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 334 3764437',
      href: 'tel:+923343764437',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-12 space-y-3">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Have a project, opportunity, or just want to say hi? My inbox is open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left — Contact Info */}
        <div className="space-y-8">
          {/* Contact details */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/60 hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Find me on
            </p>
            <TooltipProvider>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all"
                        aria-label={label}
                      >
                        <Icon className="w-4 h-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>

          {/* Resume */}
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/images/SabehShaikhResume.pdf" target="_blank">
              Download Resume
            </Link>
          </Button>
        </div>

        {/* Right — Form */}
        <Card className="border border-border/60 shadow-sm">
          <CardContent className="pt-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-3 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary" />
                <p className="font-semibold text-lg">Message sent!</p>
                <p className="text-sm text-muted-foreground">
                  Your email client should have opened. Thanks for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none"
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}