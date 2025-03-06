import { NextRequest, NextResponse } from "next/server";

// Feature data (same as in the features-section.tsx component)
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

// Define the correct type for the params
type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params }: Params) {
  const id = params.id;
  
  // Find the feature by ID
  const feature = features.find(f => f.id === id);
  
  if (!feature) {
    return new NextResponse("Feature not found", { status: 404 });
  }
  
  // Return just the HTML content for the feature details
  // This is what makes HTMX efficient - we only return the HTML fragment that needs to be updated
  return new NextResponse(feature.details, {
    headers: {
      "Content-Type": "text/html",
    },
  });
} 