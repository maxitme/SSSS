import { PROVIDER_TYPE } from "../src/common/constant";

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seed() {
  try {
    // Create a user
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        password: await bcrypt.hash('password123', 10), // Hash the password
      },
    });

    // Create an account for each provider
    await prisma.account.createMany({
      data: [
        {
          userId: user.id, // ID of the user
          providerType: PROVIDER_TYPE.Credentials, // Type of provider (e.g., email, google, etc.)
          providerId: '', // ID provided by the provider (e.g., email)
          providerAccountId: '', // Account ID provided by the provider (e.g., email)
          refreshToken: 'refresh_token_here', // Refresh token (if applicable)
          accessToken: 'access_token_here', // Access token (if applicable)
          accessTokenExpires: new Date(), // Access token expiry date (if applicable)
        },

      ],
    });

    console.log('Seeder executed successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();