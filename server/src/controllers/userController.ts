import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export const userController = {
  // Get all users
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  },

  // Create new user
  createUser: async (req: Request, res: Response) => {
    try {
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user' });
    }
  }
}; 