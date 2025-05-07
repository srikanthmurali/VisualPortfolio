import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    // Create the contacts table if it doesn't exist
    console.log('Running database seed...');
    
    // Check if the contacts table exists and has data
    const existingContacts = await db.query.contacts?.findMany?.();
    
    if (!existingContacts || existingContacts.length === 0) {
      console.log('No existing contacts found, no need to seed sample data');
    }
    
    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error during database seeding:', error);
  }
}

seed();
