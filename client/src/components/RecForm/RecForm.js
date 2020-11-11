import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Snackbar from "../Snackbar";
import Grow from "@material-ui/core/Grow";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import { Container, Button } from "../../globalStyles";
import {
  RecSec,
  FormRow,
  FormColumn,
  Form,
  Title,
  Subtitle,
  Results,
  ResultTitleWrapper,
  ResultContentWrapper,
  ResultText,
  ResultWrapper,
  Progress,
  Img,
} from "./RecForm.elements";
import Select from "./Inputs/Select";
import Input from "./Inputs/Input";
import { schema, params, defaultValues } from "./Data";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const RecForm = () => {
  const [results, setResults] = useState({});
  const [error, setError] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, errors, reset, watch, register } = useForm({
    defaultValues: {
      ...defaultValues,
    },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const sendMeEmail = watch("sendMeEmail");
  const emailSent =
    !!results.emailSent && results.emailSent === true ? true : false;

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      setOpenSnackbar(false);
      setResults({});
      setError({});

      const {
        PRESUPUESTO,
        USO,
        VOLUMEN,
        MOVILIDAD,
        SALIDA_MAS_USADA,
        sendMeEmail,
        email,
      } = formData;

      const params = {
        facts: {
          PRESUPUESTO,
          USO,
          VOLUMEN,
          MOVILIDAD,
          SALIDA_MAS_USADA,
        },
        options: {
          sendMeEmail,
          email,
        },
      };

      const { data } = await axios.post("/api/v1/recomendation", params);

      setResults(data);
      if (data.emailSent) {
        setOpenSnackbar(true);
      }
      setLoading(false);

      reset();
    } catch (err) {
      const { data } = err.response;
      console.log(data);
      if (!!data.error) {
        setError({
          message: data.error,
        });
        setOpenSnackbar(true);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <RecSec>
        <Container>
          <FormRow>
            <FormColumn>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Title>Seleccioná los parámetros de la recomendación</Title>
                <Select
                  id="budget-select"
                  name="PRESUPUESTO"
                  label="Tu presupuesto"
                  control={control}
                  error={!!errors.PRESUPUESTO}
                >
                  {params.budgets.map((budget) => (
                    <MenuItem key={budget} value={budget}>
                      {budget}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  id="use-select"
                  name="USO"
                  label="El uso principal que le darás al sistema"
                  control={control}
                  error={!!errors.USO}
                  helpertext={errors?.USO?.message}
                >
                  {params.uses.map((use) => (
                    <MenuItem key={use} value={use}>
                      {use}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  id="volume-select"
                  name="VOLUMEN"
                  label="¿Qué tan importante es el volumen?"
                  control={control}
                  error={!!errors.VOLUMEN}
                >
                  {params.importances.map((importance) => (
                    <MenuItem key={importance} value={importance}>
                      {importance}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  id="movility-select"
                  name="MOVILIDAD"
                  label="¿Qué tan importante es la movilidad?"
                  control={control}
                  error={!!errors.MOVILIDAD}
                >
                  {params.importances.map((importance) => (
                    <MenuItem key={importance} value={importance}>
                      {importance}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  id="output-select"
                  name="SALIDA_MAS_USADA"
                  label="¿Qué periférico usás más?"
                  control={control}
                  error={!!errors.SALIDA_MAS_USADA}
                >
                  {params.outputs.map((output) => (
                    <MenuItem key={output} value={output}>
                      {output}
                    </MenuItem>
                  ))}
                </Select>
                <Controller
                  name="sendMeEmail"
                  control={control}
                  render={(props) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => props.onChange(e.target.checked)}
                          checked={props.value}
                        />
                      }
                      label="Enviarme la recomendación por email"
                    />
                  )}
                />
                {sendMeEmail && (
                  <Input
                    ref={register}
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                  />
                )}
                <Button>
                  Recomendar
                  {loading && <Progress color="secondary" size={20} />}
                </Button>
              </Form>
            </FormColumn>
            <FormColumn darkBg>
              <Results>
                <Title lightTitle>
                  Los resultados se mostrarán en esta sección
                </Title>
                {!!results.recommendation ? (
                  <>
                    <Grow in={!!results.recommendation} timeout={3000}>
                      <ResultWrapper>
                        <ResultTitleWrapper>
                          <Subtitle lightTitle>Altavoz</Subtitle>
                        </ResultTitleWrapper>
                        <ResultContentWrapper>
                          <ResultText>
                            Conectividad:{" "}
                            {results.recommendation.altavoz.CONECTIVIDAD}
                          </ResultText>
                          <ResultText>
                            Potencia: {results.recommendation.altavoz.POTENCIA}
                          </ResultText>
                          <ResultText>
                            Direccionalidad:{" "}
                            {results.recommendation.altavoz.DIRECCIONALIDAD}
                          </ResultText>
                        </ResultContentWrapper>
                      </ResultWrapper>
                    </Grow>
                    <Grow in={true} timeout={3000}>
                      <ResultWrapper>
                        <ResultTitleWrapper>
                          <Subtitle lightTitle>Auricular</Subtitle>
                        </ResultTitleWrapper>
                        <ResultContentWrapper>
                          <ResultText>
                            Tipo: {results.recommendation.auricular.TIPO}
                          </ResultText>
                          <ResultText>
                            Conectividad:{" "}
                            {results.recommendation.auricular.CONECTIVIDAD}
                          </ResultText>
                          <ResultText>
                            Comodidad:{" "}
                            {results.recommendation.auricular.COMODIDAD}
                          </ResultText>
                        </ResultContentWrapper>
                      </ResultWrapper>
                    </Grow>
                    <Grow in={true} timeout={3000}>
                      <ResultWrapper>
                        <ResultTitleWrapper>
                          <Subtitle lightTitle>Microfono</Subtitle>
                        </ResultTitleWrapper>
                        <ResultContentWrapper>
                          <ResultText>
                            Tipo: {results.recommendation.microfono.TIPO}
                          </ResultText>
                          <ResultText>
                            Conectividad:{" "}
                            {results.recommendation.microfono.CONECTIVIDAD}
                          </ResultText>
                          <ResultText>
                            Direccionalidad:{" "}
                            {results.recommendation.microfono.DIRECCIONALIDAD}
                          </ResultText>
                        </ResultContentWrapper>
                      </ResultWrapper>
                    </Grow>
                  </>
                ) : (
                  <Grow in={!results.recommendation} timeout={3000}>
                    <Img
                      src={require("../../images/svg-4.svg").default}
                      alt="image"
                    />
                  </Grow>
                )}
              </Results>
            </FormColumn>
          </FormRow>
        </Container>
      </RecSec>
      {!!error.message && (
        <Snackbar
          message={error.message}
          severity="error"
          open={openSnackbar}
          setOpen={setOpenSnackbar}
        />
      )}
      {emailSent && (
        <Snackbar
          message={"Enviamos la recomendación a su email"}
          severity="success"
          open={openSnackbar}
          setOpen={setOpenSnackbar}
        />
      )}
    </>
  );
};

export default RecForm;
