class Turno {
    constructor(nombre, apellido, mutual, valor, especialidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mutual = mutual;
        this.valor = valor;
        this.especialidad = especialidad;
    }
}
const coberturas = [];

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido")
let mutual = prompt("Ingrese su cobertura medica");
let valor = Number(prompt("Ingrese el valor de su consulta"));
let especialidad = prompt("Ingrese la especialidad a la cual desea concurrir: Clinica - Traumatologia - Cardiologia").toUpperCase();

let registro = prompt("Desea registrar los turnos solicitados?").toUpperCase();

const registros = (nombre, apellido, mutual, valor, especialidad) => {

    coberturas.push(new Turno(nombre, apellido, mutual, valor, especialidad));
    console.log(coberturas)
}
if (registro === "SI") {
    registros(nombre, apellido, mutual, valor, especialidad);
}

let agregarMasTurnos = prompt("Desea agregar mas turnos?").toUpperCase();

while (agregarMasTurnos === "SI") {
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    mutual = prompt("Ingrese su cobertura medica");
    valor = prompt("Ingrese el valor de su consulta");
    especialidad = prompt("Ingrese la especialidad a la cual desea concurrir: Clinica - Traumatologia - Cardiologia").toUpperCase();
    registros(nombre, apellido, mutual, valor, especialidad);
    agregarMasTurnos = prompt("Desea agregar mas turnos?").toUpperCase();
}

let filtrar = prompt("Desea filtrar los turnos segun la especialidad?").toUpperCase();

const filtrarPorEspecialidad = (especialidad) => {
    return coberturas.filter((mutual)=> mutual.especialidad === especialidad);
}

if(filtrar === "SI"){
    let especialidad = prompt("Ingrese la especialidad a la cual desea concurrir: Clinica - Traumatologia - Cardiologia").toUpperCase();
    const especialidadFiltrada = filtrarPorEspecialidad(especialidad);
    console.log(especialidadFiltrada)
}

let filtrarPersona = prompt("Desea filtrar algun turno especifica?").toUpperCase();

const filtrarTurno = (nombre) => {
    return coberturas.find((turno)=> turno.nombre === nombre);
}
if(filtrarPersona === "SI"){
    let turno = prompt("Por favor ingrese a nombre de quien esta el turno");
    const turnoFiltrado = filtrarTurno(turno);
    console.log(turnoFiltrado)
}