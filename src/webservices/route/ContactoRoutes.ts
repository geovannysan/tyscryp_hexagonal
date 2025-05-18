import { Router } from "express";
import * as Yup from "yup";
import ContactoController from "../Controller/ContactoController";
import { validate } from "../../helper/midelwares/validation";
const chatperrouter = Router();
const schema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.string()
        .required()
        .matches(/^\d+$/, "Invalid number format. Only numbers is allowed.")
});
chatperrouter.get("/:id", ContactoController.getById);
chatperrouter.post("/", validate(schema), ContactoController.create);
chatperrouter.put("/:id", ContactoController.update);
chatperrouter.delete("/:id", ContactoController.delete);

export default chatperrouter;
