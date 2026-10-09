// Business setups shown in the scenarios section: what the owner wants and what SmartVenta delivers.
export const scenarioKeys = ['single', 'multi', 'singleWarehouse', 'multiWarehouse'];

export const scenarios = {
  single: {
    title: '1 tienda',
    problems: [
      'Saber cuánto vendes aunque no estés en la tienda.',
      'Mantener tu información protegida y disponible.',
      'Cerrar tu caja de forma rápida y precisa.',
    ],
    solutions: [
      'Consulta tus ventas desde cualquier lugar, en tiempo real.',
      'Tus datos quedan respaldados en la nube, siempre contigo.',
      'Tu corte de caja y tu ganancia se calculan automáticamente.',
    ],
  },
  multi: {
    title: '2 o más tiendas',
    problems: [
      'Supervisar todas tus tiendas al mismo tiempo.',
      'Ofrecer al cliente el producto que busca, esté en la sucursal que esté.',
      'Actualizar precios en todas tus tiendas sin esfuerzo.',
    ],
    solutions: [
      'Ve todas tus tiendas en una sola pantalla.',
      'Consulta el stock de cada sucursal y haz traspasos al instante.',
      'Cambia un precio una vez y se aplica en todas.',
    ],
  },
  singleWarehouse: {
    title: '1 tienda + 1 almacén',
    problems: [
      'Tener tienda y almacén siempre bajo supervisión.',
      'Saber con certeza cuánto hay en tu almacén.',
      'Registrar cada salida de mercancía.',
    ],
    solutions: [
      'Controla tienda y almacén aunque no estés presente.',
      'Conoce tu stock real y cuándo reponer según lo que vendes.',
      'Cada movimiento queda registrado: quién, qué, cuándo y dónde.',
    ],
  },
  multiWarehouse: {
    title: 'Varias tiendas + almacenes',
    problems: [
      'Tener el control de cada ubicación.',
      'Mover mercancía entre tiendas y almacenes con orden.',
      'Conocer el stock exacto de cada lugar.',
    ],
    solutions: [
      'Todas tus ubicaciones en una sola pantalla.',
      'Traspasos y surtido registrados de principio a fin.',
      'Stock exacto por tienda y almacén, en tiempo real.',
    ],
  },
};

