const productos = [
    { id: 1, titulo: 'manzana' },
    { id: 2, titulo: 'pera' },
    { id: 3, titulo: 'piña' },
    { id: 4, titulo: 'banano' },
];

export default function ListaCompras() {
    const ListaProductos = productos.map((producto) => (
        <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.titulo}</td>
        </tr>
    ));

    return (
        <table  style={{border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                </tr>
            </thead>
            <tbody>{ListaProductos}</tbody>
        </table>
    );
}
