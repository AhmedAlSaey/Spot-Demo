import { Request, Response } from "express";

export const createUserController = (req: Request, res: Response) => {
  console.log(req);
  res.status(201).send({
    firstName: req.body.firstName,
    laseName: req.body.lastName,
    role: "guest",
  });
};
