import * as yup from "yup";

export const schema = yup.object().shape({
  PRESUPUESTO: yup.string().required(),
  USO: yup.string().required(),
  VOLUMEN: yup.string().required(),
  MOVILIDAD: yup.string().required(),
  SALIDA_MAS_USADA: yup.string().required(),
  sendMeEmail: yup.bool(),
  email: yup.string().when("sendMeEmail", {
    is: true,
    then: yup
      .string()
      .email("Ingrese un email válido")
      .required("Ingrese una dirección de email"),
  }),
});

export const params = {
  budgets: ["ALTO", "MEDIO", "BAJO"],
  uses: ["BASICO", "GAMING", "CONFERENCIA_ONLINE"],
  importances: ["IMPORTANTE", "PRESCINDIBLE"],
  outputs: ["ALTAVOZ", "AURICULAR"],
};

export const defaultValues = {
  PRESUPUESTO: "",
  USO: "",
  VOLUMEN: "",
  MOVILIDAD: "",
  SALIDA_MAS_USADA: "",
  sendMeEmail: false,
  email: "",
};
