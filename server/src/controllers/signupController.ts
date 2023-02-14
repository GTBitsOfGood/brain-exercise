import { Request, Response } from 'express';
import React from 'react';
import { User, UserDocument } from '../models/User';

import jwt_decode, { JwtPayload } from 'jwt-decode';

export const postUserSignUp = (req: Request, res: Response) => {
  const user = new User(req.body);
  return user
    .save()
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};
