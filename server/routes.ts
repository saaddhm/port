import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Define contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the form submission (in a real app, this would send an email)
      console.log("Contact form submission:", validatedData);
      
      // In a production application, you would send an email here
      // using nodemailer or a similar service
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
