import { HTTPSTATUS } from "../config/http.config";
import { asyncHandler } from "../middlewares/asyncHandler.middlerware";
import { Request, Response} from "express";
import { registerSchema } from "../validators/auth.validator";

export const registerController = asyncHandler(
    async (req: Request, res: Response) => {
            const body = registerSchema.parse(req.body);

        
        return res
            .status(HTTPSTATUS.CREATED)
            .json({ message: "user register successfully" });

    }
)