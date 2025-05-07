import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { contacts, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the incoming data with the schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Insert the validated data into the database
      const [contact] = await db.insert(contacts).values(validatedData).returning();
      
      // Return the created contact as a response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        contact
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      // Handle other errors
      return res.status(500).json({ 
        message: "Failed to submit contact form" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
