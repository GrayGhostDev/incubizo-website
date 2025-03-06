"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { initializeHtmx } from "@/lib/htmx-utils";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder, TechStart",
    content: "Incubizo provided us with the resources, mentorship, and connections we needed to scale our startup. Their guidance was invaluable in helping us secure our Series A funding.",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, InnovateCo",
    content: "The acceleration program at Incubizo transformed our business. We gained access to industry experts, refined our business model, and connected with investors who believed in our vision.",
    image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "CTO, DataSphere",
    content: "The innovation labs at Incubizo gave us access to cutting-edge technology and expertise that we couldn't have afforded on our own. This helped us develop our product faster and more efficiently.",
    image: "/testimonials/elena.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, GreenTech Solutions",
    content: "Incubizo's network of investors was instrumental in helping us secure the funding we needed to bring our sustainable technology to market. Their guidance throughout the process was exceptional.",
    image: "/testimonials/david.jpg"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize HTMX
  useEffect(() => {
    initializeHtmx();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Hear from the startups and businesses that have grown with Incubizo
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* HTMX-powered testimonial carousel */}
          <div 
            id="testimonials-container"
            className="relative overflow-hidden"
            hx-get="/api/testimonials"
            hx-trigger="load"
            hx-swap="innerHTML"
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex-shrink-0">
                    {/* Placeholder for testimonial image */}
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg italic mb-4">
                      &ldquo;{testimonials[activeIndex].content}&rdquo;
                    </blockquote>
                    <div className="font-semibold">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-foreground/70">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  hx-get={`/api/testimonials/${index}`}
                  hx-target="#testimonials-container"
                  hx-swap="innerHTML"
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background rounded-full p-2 shadow-md"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            hx-get="/api/testimonials/prev"
            hx-target="#testimonials-container"
            hx-swap="innerHTML"
            hx-trigger="click"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background rounded-full p-2 shadow-md"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            hx-get="/api/testimonials/next"
            hx-target="#testimonials-container"
            hx-swap="innerHTML"
            hx-trigger="click"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 