import { Router } from "express";
import { createUser, getUsers } from "../controller/UserController";

const router = Router();

router.get('/', getUsers);

router.post('/', createUser);


export default router;
