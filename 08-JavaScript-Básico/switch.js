nota = 7;
conceito = null;

if (nota > 8) {
    conceito = "Otimo";
} else if (nota >= 6) {
    conceito = "Bom";
} else {
    conceito = "Ruim";
}

switch (conceito) {
    case "Otimo":
        console.log("Parabens. uma otima nota");
        break;
    case "Bom":
        console.log("Bom, é uma boa nota");
        break;
    case "Ruim":
        console.log("estude mais um pouco");
        break;
    default:
        console.log("Houve algum erro");
        break;
}