"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function WorkspaceShowcase() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Modern Workspace for Modern Ideas</h2>
            <p className="text-lg text-foreground/80">
              At Incubizo, we provide a comfortable and productive environment for startups and entrepreneurs to work, 
              collaborate, and grow their businesses. Our workspace is designed to foster creativity and innovation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>High-speed internet and modern amenities</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Comfortable workstations and meeting areas</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Coffee, tea, and refreshments available</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 access for members</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button size="lg" className="mr-4">
                Tour Our Space
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/workspace-image.jpg"
                alt="Incubizo workspace with laptop and branded mug"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-30"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/20">
              <p className="text-sm font-medium">
                &ldquo;Incubizo provides the perfect environment for our team to focus and innovate.&rdquo;
              </p>
              <p className="text-xs mt-2 text-foreground/70">
                — Sarah Johnson, TechStart Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 