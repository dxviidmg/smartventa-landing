// Business setups shown in the scenarios section: what the owner wants and what SmartVenta delivers.
export const scenarioKeys = ['single', 'multi', 'singleWarehouse', 'multiWarehouse'];

export const scenarios = {
  single: {
    title: '1 tienda',
    problems: [
      'Saber cuánto vendes y ganas aunque no estés en la tienda.',
      'Dejar de depender de cuadernos y hojas de cálculo para tu inventario.',
      'Cerrar la caja sin cuentas largas ni diferencias.',
    ],
    solutions: [
      'Consulta tus ventas y tu ganancia desde tu celular, estés donde estés.',
      'Cada producto con su existencia y su historial: quién lo movió y cuándo.',
      'El corte de caja sale solo, por forma de pago, con entradas y salidas de dinero.',
    ],
  },
  multi: {
    title: '2 o más tiendas',
    problems: [
      'Ver cómo va cada tienda sin tener que llamar o visitarla.',
      'Vender un producto que no tienes en esta tienda pero sí en otra.',
      'Cambiar precios sin ir tienda por tienda.',
    ],
    solutions: [
      'Entras a cualquier tienda desde una sola cuenta y comparas sus ventas.',
      'Ves cuánto hay en las otras sucursales y pides el traspaso desde la venta.',
      'Tu catálogo y tus precios son uno solo para todo el negocio: cambias un precio una vez y vale en todas.',
    ],
  },
  singleWarehouse: {
    title: '1 tienda + 1 almacén',
    problems: [
      'Saber qué hay en la bodega y qué ya salió a la tienda.',
      'Reponer la tienda sin llamadas ni mensajes.',
      'Que cada salida de mercancía tenga un responsable.',
    ],
    solutions: [
      'Inventario separado de tienda y almacén, siempre a la vista.',
      'El almacén arma el envío viendo lo que falta en la tienda, y la tienda lo acepta al contar la mercancía.',
      'Cada movimiento guarda quién, qué, cuándo y a dónde fue.',
    ],
  },
  multiWarehouse: {
    title: 'Varias tiendas + almacenes',
    problems: [
      'Saber qué hay en cada tienda y en cada almacén.',
      'Mover mercancía entre ubicaciones sin que se pierda en el camino.',
      'Encontrar de dónde sale la diferencia cuando el inventario no cuadra.',
    ],
    solutions: [
      'Inventario exacto por tienda y por almacén.',
      'Traspasos y distribuciones registrados de principio a fin, con avisos al momento.',
      'Historial y auditoría para ubicar cada diferencia y a su responsable.',
    ],
  },
};
