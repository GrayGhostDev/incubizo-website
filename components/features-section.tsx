"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { initializeHtmx } from "@/lib/htmx-utils";

// Feature data
const features = [
  {
    id: "incubation",
    title: "Business Incubation",
    description: "We provide startups with the resources, mentorship, and infrastructure they need to grow and succeed.",
    details: `
      <div class="space-y-4">
        <p>Our business incubation program offers:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Dedicated workspace and facilities</li>
          <li>Mentorship from industry experts</li>
          <li>Access to funding opportunities</li>
          <li>Networking events and connections</li>
          <li>Business development support</li>
        </ul>
      </div>
    `
  },
  {
    id: "acceleration",
    title: "Startup Acceleration",
    description: "Accelerate your startup's growth with our intensive program designed to scale businesses rapidly.",
    details: `
      <div class="space-y-4">
        <p>Our acceleration program includes:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Intensive 12-week program</li>
          <li>Seed funding opportunities</li>
          <li>Product-market fit validation</li>
          <li>Go-to-market strategy development</li>
          <li>Investor pitch preparation</li>
        </ul>
      </div>
    `
  },
  {
    id: "innovation",
    title: "Innovation Labs",
    description: "Access cutting-edge technology and expertise to develop innovative solutions for your business.",
    details: `
      <div class="space-y-4">
        <p>Our innovation labs provide:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>State-of-the-art equipment and facilities</li>
          <li>Technical expertise and guidance</li>
          <li>Prototyping and testing capabilities</li>
          <li>R&D collaboration opportunities</li>
          <li>Technology commercialization support</li>
        </ul>
      </div>
    `
  },
  {
    id: "funding",
    title: "Funding Access",
    description: "Connect with investors and funding opportunities to fuel your business growth.",
    details: `
      <div class="space-y-4">
        <p>Our funding services include:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Investor network introductions</li>
          <li>Pitch deck preparation</li>
          <li>Due diligence support</li>
          <li>Grant application assistance</li>
          <li>Financial planning and modeling</li>
        </ul>
      </div>
    `
  }
];

export default function FeaturesSection() {
  const detailsRef = useRef<HTMLDivElement>(null);

  // Initialize HTMX interactions after component mounts
  useEffect(() => {
    initializeHtmx();
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive support for startups and businesses at every stage of growth
          </p>
        </motion.div>

        <Tabs defaultValue="incubation" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {features.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="text-sm md:text-base py-3"
                data-feature-id={feature.id}
                hx-get={`/api/features/${feature.id}`}
                hx-target="#feature-details"
                hx-trigger="click"
                hx-swap="innerHTML"
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Feature cards */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <TabsContent key={feature.id} value={feature.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </div>

            {/* Feature details */}
            <div className="relative">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Feature Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    id="feature-details" 
                    ref={detailsRef}
                    className="prose prose-stone dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: features[0].details }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
} 