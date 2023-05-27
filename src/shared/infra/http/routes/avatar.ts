import { Router } from "express";

import uploadConfig from '../../../../config/upload';
import multer from "multer";

import { Request, Response } from 'express';


const funcionariosRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("avatar"));

funcionariosRoutes.post("/", uploadAvatar.single("avatar"), (request: Request, response: Response) => {

    const avatar_file = request.file.filename;
    return response.send({ nome_arquivo: avatar_file });

});


export { funcionariosRoutes };
