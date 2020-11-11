const { Engine } = require("json-rules-engine");

const clientRules = require("./rules/clients");
const specsRules = require("./rules/specs");
const recommendationRules = require("./rules/recommendations");

const rules = [...clientRules, ...specsRules, ...recommendationRules];

const engine = new Engine(rules, { allowUndefinedFacts: true });

engine
  .on("success", (event, almanac) => {
    console.log(event);
    console.log("EXITO");
  })
  .on("failure", (event) => {
    console.log("FALLO");
  });

async function runEngine(facts) {
  try {
    const defineClientType = {
      PRESUPUESTO: facts.PRESUPUESTO,
      USO: facts.USO,
    };

    let results = await engine.run(defineClientType);
    let clientType = await results.almanac.factValue("CLIENTE");

    if (!clientType) {
      return {
        error: "No se pudo definir un tipo de cliente",
      };
    }

    const defineSpecsType = {
      CLIENTE: clientType,
      VOLUMEN: facts.VOLUMEN,
      MOVILIDAD: facts.MOVILIDAD,
      SALIDA_MAS_USADA: facts.SALIDA_MAS_USADA,
    };

    results = await engine.run(defineSpecsType);
    let specsType = await results.almanac.factValue("ESPECIFICIDAD");

    if (!specsType) {
      return {
        error: "No se pudo definir un tipo de especificidad",
      };
    }

    const defineRecomendation = {
      ESPECIFICIDAD: specsType,
    };

    results = await engine.run(defineRecomendation);
    let recommendation = await results.almanac.factValue("RECOMMENDATION");

    if (!specsType) {
      return {
        error: "No se pudo definir una recomendación",
      };
    }

    console.log(`Cliente tipo: ${clientType}`);
    console.log(`Especificidad tipo: ${specsType}`);
    console.log(recommendation);

    return {
      clientType,
      specsType,
      recommendation,
    };
  } catch (err) {
    console.log(err);
  }
}

module.exports = runEngine;

// let facts = {
//   PRESUPUESTO: "BAJO",
//   USO: "BASICO",
//   VOLUMEN: "PRESCINDIBLE",
//   MOVILIDAD: "PRESCINDIBLE",
//   SALIDA_MAS_USADA: "ALTAVOZ",
// };

// runEngine(facts);
