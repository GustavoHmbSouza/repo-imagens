import "reflect-metadata";

import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";

import { router } from "./routes";

import { AppError } from "../../errors/AppError";

const app = express();

app.use(express.json());

app.use(express.static(__dirname + "../../../../../tmp/avatar"));

app.use(router);


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json(
            {
                message: err.message
            }
        )
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
});

export { app }