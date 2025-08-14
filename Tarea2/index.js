import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileName = "./Entrada/inventario.inv";

function mostrarMenu() {
    console.log("\n--- MENÚ ---");
    console.log("1. Leer archivo .inv e imprimir su contenido.");
    console.log("2. Salir");
    rl.question("Selecciona una opción: ", (opcion) => {
        switch (opcion.trim()) {
            case '1':
                leerInventario();
                break;
            case '2':
                console.log("¡Hasta luego!");
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                mostrarMenu();
        }
    });
}

function leerInventario() {
    try {
        if (!fs.existsSync(fileName)) {
            console.error(`Error: El archivo "${fileName}" no existe.`);
        } else {
            const contenido = fs.readFileSync(fileName, 'utf8');
            const lineas = contenido.split('\n');
            console.log("\nContenido del inventario:");
            lineas.forEach((linea) => {
                if (linea.trim() !== '') {
                    console.log(linea);
                }
            });
        }
    } catch (error) {
        console.error("Ocurrió un error al leer el archivo:", error.message);
    }
    mostrarMenu();
}

mostrarMenu();