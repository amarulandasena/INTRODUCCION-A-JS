require.cache = Object.create(null);

function require(nombre) {
    if (!(nombre in require.cache)) {
        let codigo = leerArchivo(nombre);
        let modulo = {exportaciones: {}};
        require.cache[nombre] = modulo;
        let envolvedor = Function("require, exportaciones, modulo",
            codigo);
        envolvedor(require, modulo.exportaciones, modulo);
    }
    
    return require.cache[nombre].exportaciones;

}

const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function (date, format) {
    return format.replace (/YYYY | M(MMM)? | Do? | dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
};


const {formatDate} = require ("./format-date");

console.log(formatDate(new Date(2024, 9, 9), "dddd the Do"));