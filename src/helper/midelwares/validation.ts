// middlewares/validate.ts
import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

export const validate = (schema: Yup.ObjectSchema<any>) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                await schema.validate(req.body, { abortEarly: false });
                 next();
            } catch (err: any) {
                if (err instanceof Yup.ValidationError) {
                    throw res.status(400).json({
                        errors: err.inner.map((e) => ({
                            field: e.path,
                            message: e.message,
                        })),
                    });
                }
                throw res.status(500).json({ error: "Internal server error" });
            }
        };
