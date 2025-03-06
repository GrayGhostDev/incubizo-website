"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { initializeHtmx } from "@/lib/htmx-utils";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  // This will be used by the HTMX response handler to update form status
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  // Initialize HTMX
  useEffect(() => {
    initializeHtmx();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions or want to learn more about our services? Reach out to us!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                id="contact-form"
                className="space-y-6"
                hx-post="/api/contact"
                hx-target="#form-response"
                hx-swap="outerHTML"
                hx-indicator="#form-indicator"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      hx-validate="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      hx-validate="true"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    hx-validate="true"
                  />
                </div>

                <div id="form-response">
                  {formStatus && (
                    <div
                      className={`p-4 rounded-md ${
                        formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button 
                    type="submit"
                    className="relative"
                    disabled={!formState.name || !formState.email || !formState.message}
                  >
                    <span>Send Message</span>
                    <div
                      id="form-indicator"
                      className="htmx-indicator absolute inset-0 flex items-center justify-center bg-primary/90 rounded-md"
                    >
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 