
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

declare global {
    namespace Express {
        interface Request {
            id: string;
        }
    }
}
 
export const isAuthenticated = async (req: Request, res: Response, next:NextFunction):Promise<any> => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }
        // Verify the token and extract user information
        const decode = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;
        //check if decoding was succefful
        if (!decode) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};