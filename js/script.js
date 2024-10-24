let hacerReserva = function() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const menu = document.getElementById('menu').value;
    const ingrediente = document.getElementById('ingrediente').value;


    // Crear objeto JSON con los datos de la reserva
    const reservaJSON = {
        nombre: nombre,
        edad: edad,
        menu: menu,
        ingrediente: ingrediente,
        total: menu === "Menú Dragón" ? 200 : 150
    };

    console.log("Reserva realizada: ", JSON.stringify(reservaJSON, null, 2));

    // Mostrar sección de la factura
    document.getElementById('facturaSection').style.display = "block";

    // Generar datos de factura
    const conceptos = `Menú: ${menu} con ${ingrediente}`;
    const total = reservaJSON.total;

    // Asignar valores en el ticket
    document.getElementById('nombreCliente').textContent = "Nombre del Cliente: " + reservaJSON.nombre;
    document.getElementById('conceptos').innerHTML = conceptos;
    document.getElementById('total').textContent = total.toFixed(2);

    // Crear nueva ventana/pestaña con el ticket
    let nuevaVentana = window.open('', '_blank');
    nuevaVentana.document.write(`
        <html>
        <head>
            <title>Ticket de Factura</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    padding: 20px;
                }
                h1 {
                    color: #4CAF50;
                }
                table {
                    width: 100%;
                    margin-top: 20px;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ccc;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <h1>Ticket de Factura</h1>
            <h3>Nombre del Cliente: ${reservaJSON.nombre}</h3>
            <div>Conceptos: ${conceptos}</div>
            <table>
                <tr>
                    <th>Total:</th>
                    <td>${total.toFixed(2)}</td>
                </tr>
            </table>
        </body>
        </html>
    `);
    nuevaVentana.document.close();
};
