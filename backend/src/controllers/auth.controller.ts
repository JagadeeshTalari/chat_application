import { Request, Response } from "express";

export const singup = async (req: Request, res: Response) => {
  res.send("Signed up successfulyy");
};

export const login = async (req: Request, res: Response) => {
  res.send("Logged in successfulyy");
};

export const logout = async (req: Request, res: Response) => {
  res.send("Logged out successfulyy");
};
