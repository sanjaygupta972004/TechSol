import { Router } from "express";

const router = Router();

import { contactForm } from "../controllers/contact.controller.js";

router.route("/contact").post(contactForm);


export default router;