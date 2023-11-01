const os = require('os');

// Obtener información sobre la arquitectura de la CPU
console.log('Arquitectura de la CPU:', os.arch());

// Obtener información sobre la plataforma del sistema operativo
console.log('Plataforma:', os.platform());

// Obtener información sobre la versión del sistema operativo
console.log('Versión del sistema operativo:', os.version());

// Obtener información sobre la cantidad de memoria libre y total
console.log('Memoria libre:', os.freemem() / (1024 * 1024) + ' MB');
console.log('Memoria total:', os.totalmem() / (1024 * 1024) + ' MB');

// Obtener información sobre los núcleos de la CPU
console.log('Núcleos de CPU:', os.cpus().length);

// Obtener el nombre del host de la máquina
console.log('Nombre del host:', os.hostname());

// Obtener el directorio de inicio del usuario actual
console.log('Directorio de inicio:', os.homedir());

// Obtener información sobre interfaces de red disponibles
console.log('Interfaces de red:', os.networkInterfaces());


