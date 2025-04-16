export class UserService {
  static async createUser(userData: IUser) {
    // Validation logic
    // Business rules
    const user = new User(userData);
    return await user.save();
  }

  static async getUsers() {
    return await User.find();
  }
} 