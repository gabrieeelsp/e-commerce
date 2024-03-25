// Middleware para agregar un retraso de 3 segundos
const delayMiddleware = (req, res, next) => {
    setTimeout(next, 3000); // 3000 milisegundos = 3 segundos
};

module.exports = delayMiddleware;
