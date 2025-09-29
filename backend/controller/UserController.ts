import { PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';
const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findMany();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(user);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

