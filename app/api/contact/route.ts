import { NextRequest } from "next/server";
import { htmxSuccessResponse, htmxErrorResponse } from "@/lib/htmx-utils";

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string; // Optional field, not used in validation
    const message = formData.get("message") as string;
    
    // Log the submission (in a real app, you would store this data)
    console.log({ name, email, company, message });
    
    // Validate required fields
    if (!name || !email || !message) {
      return htmxErrorResponse("Please fill in all required fields.");
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return htmxErrorResponse("Please enter a valid email address.");
    }
    
    // In a real application, you would send an email or store the contact request in a database
    // For this example, we'll just simulate a successful submission
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return htmxSuccessResponse("Thank you for your message! We'll get back to you soon.");
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Return error response
    return htmxErrorResponse(
      "Sorry, there was an error processing your request. Please try again later.",
      500
    );
  }
} 