import Controller from " . . /controllers/controller";

import express from "express";
const router = express.Router();
router.get("/login", Controller.login_get);
router.get("/dashboard", Controller.dashboard_get);
router.get("/home", Controller.home_get);
router.get("/signup", Controller.signup_get);

export default router;
