import * as Yup from "yup";

export default Yup.object({
    telefono: Yup.string()
        .length(10, "El numero debe ser de 10 caracteres")
        .required("Requerido"),
});
