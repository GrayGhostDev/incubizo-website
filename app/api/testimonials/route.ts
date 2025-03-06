import { NextResponse } from "next/server";

// Testimonial data (same as in the testimonials.tsx component)
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

// Helper function to generate testimonial HTML
function generateTestimonialHTML(testimonial: typeof testimonials[0], activeIndex: number) {
  return `
    <div class="card border-none shadow-lg">
      <div class="p-8">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="w-24 h-24 rounded-full bg-primary/20 flex-shrink-0">
            <!-- Placeholder for testimonial image -->
          </div>
          <div class="flex-1">
            <blockquote class="text-lg italic mb-4">
              &ldquo;${testimonial.content}&rdquo;
            </blockquote>
            <div class="font-semibold">${testimonial.name}</div>
            <div class="text-sm text-foreground/70">${testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8 space-x-2">
      ${testimonials.map((_, index) => `
        <button
          class="w-3 h-3 rounded-full ${index === activeIndex ? "bg-primary" : "bg-primary/30"}"
          aria-label="Go to testimonial ${index + 1}"
          hx-get="/api/testimonials/${index}"
          hx-target="#testimonials-container"
          hx-swap="innerHTML"
        ></button>
      `).join('')}
    </div>
  `;
}

export async function GET() {
  // Default to the first testimonial
  const activeIndex = 0;
  const testimonial = testimonials[activeIndex];
  
  return new NextResponse(generateTestimonialHTML(testimonial, activeIndex), {
    headers: {
      "Content-Type": "text/html",
    },
  });
} 