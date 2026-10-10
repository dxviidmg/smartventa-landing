// Legal documents shown in the footer dialogs. `{phone}` is replaced with the contact number.
// DRAFT: have a lawyer review the policies (cancellation, grace period, data handling) before relying on them.
export const legalDocuments = {
  terms: {
    title: 'Términos y Condiciones',
    closeLabel: 'Cerrar términos y condiciones',
    updated: 'Última actualización: Octubre 2026',
    sections: [
      { title: '1. Aceptación de términos', text: 'Al registrarte o usar SmartVenta aceptas estos términos y condiciones. Si no estás de acuerdo, no uses el servicio.' },
      { title: '2. El servicio', text: 'SmartVenta es un punto de venta en la nube para negocios con inventario, de una tienda a varias sucursales y almacenes. Se usa desde el navegador y requiere conexión a Internet. Eres responsable de que la información que captures sea correcta y de usar el servicio de manera legal.' },
      { title: '3. Cuenta y usuarios', text: 'El propietario del negocio es el responsable de su cuenta y de las personas a quienes da acceso (administradores y vendedores). Debes cuidar tus contraseñas y avisarnos si sospechas de un acceso no autorizado.' },
      { title: '4. Suscripción y pagos', text: 'SmartVenta se contrata mes a mes. El cobro es mensual y recurrente con tarjeta, procesado por Mercado Pago, según el plan y el número de sucursales que elijas. SmartVenta no almacena los datos completos de tu tarjeta. Los precios se publican en este sitio y pueden cambiar; cualquier cambio aplica a periodos futuros.' },
      { title: '5. Falta de pago y reactivación', text: 'Si un cobro falla o la suscripción vence, el acceso al resto del sistema se pausa hasta que se regularice el pago. El propietario puede reactivar la suscripción desde su cuenta. Tus datos se conservan.' },
      { title: '6. Cancelación', text: 'El propietario puede cancelar la suscripción cuando quiera desde la sección Mi plan. Al cancelar se detiene el cobro recurrente y se cierra de inmediato la sesión de todos los usuarios del negocio. No se generan reembolsos. Tus datos se conservan, y para reactivar la suscripción debes contactarnos al {phone}.' },
      { title: '7. Servicios adicionales', text: 'Algunos servicios, como la impresión por WiFi, pueden tener un costo adicional que se te informará antes de contratarlos. La carga de tu catálogo inicial desde Excel no tiene costo y se entrega en un máximo de una semana a partir de que nos envíes tu archivo.' },
      { title: '8. Tus datos', text: 'La información de tu negocio es tuya. SmartVenta la guarda para prestarte el servicio y no la usa para otros fines. Puedes exportar tu catálogo, inventario, ventas y reportes a Excel en cualquier momento.' },
      { title: '9. Limitación de responsabilidad', text: 'SmartVenta se proporciona "tal cual". No garantizamos que el servicio sea ininterrumpido ni libre de errores. SmartVenta no se hace responsable por pérdidas derivadas de fallas de Internet, de tu equipo o de información capturada incorrectamente.' },
      { title: '10. Cuenta demo', text: 'La cuenta demo es una sola cuenta compartida para evaluar el sistema. No captures información real en ella: cualquier persona con acceso puede ver y modificar sus datos, y estos pueden cambiar o reiniciarse en cualquier momento.' },
      { title: '11. Leyes aplicables', text: 'Estos términos se rigen por las leyes de México. Para cualquier controversia, las partes se someten a los tribunales de Actopan, Hidalgo.' },
      { title: '12. Cambios a estos términos', text: 'Podemos actualizar estos términos. La fecha de la última actualización aparece arriba. Si sigues usando el servicio después de un cambio, lo aceptas.' },
      { title: '13. Contacto', text: 'Para preguntas sobre estos términos, contáctanos al: {phone}' },
    ],
  },
  privacy: {
    title: 'Política de Privacidad',
    closeLabel: 'Cerrar política de privacidad',
    updated: 'Última actualización: Octubre 2026',
    sections: [
      { title: '1. Responsable', text: 'El responsable del tratamiento de tus datos personales es SmartVenta. Para cualquier asunto sobre tus datos, escríbenos a {email} o al {phone}.' },
      { title: '2. Qué datos recopilamos', text: 'Al registrarte o contactarnos recopilamos: nombre, correo electrónico, teléfono y nombre de tu negocio. Al usar el sistema se guarda la información que tú o tu equipo capturan: productos, inventario, ventas, clientes, movimientos de caja y usuarios. Además guardamos quién hizo cada movimiento y cuándo.' },
      { title: '3. Datos de pago', text: 'Los pagos se procesan con Mercado Pago. SmartVenta no almacena el número completo de tu tarjeta. Guardamos el historial de tus cobros y suscripciones y datos básicos de la tarjeta, como su vencimiento, para avisarte si está por vencer o si un cobro falla.' },
      { title: '4. Para qué usamos tu información', text: 'La usamos para prestarte el servicio, darte soporte, cobrar tu suscripción, enviarte correos del servicio (bienvenida con tus credenciales, recibos de pago y avisos de pago rechazado o tarjeta por vencer) y mejorar SmartVenta.' },
      { title: '5. Con quién la compartimos', text: 'No vendemos tu información. La compartimos únicamente con los proveedores necesarios para operar el servicio, como el procesador de pagos y la infraestructura donde se aloja el sistema, o cuando una autoridad competente lo exija.' },
      { title: '6. Seguridad', text: 'El acceso es con usuario y contraseña, y cada persona solo ve lo que su rol permite. Aplicamos medidas razonables para proteger tu información, pero ningún sistema es completamente infalible.' },
      { title: '7. Datos de los clientes de tu negocio', text: 'Los datos de tus clientes que captures en el sistema son responsabilidad de tu negocio. Nosotros los tratamos solo para prestarte el servicio.' },
      { title: '8. Tus derechos', text: 'Puedes pedirnos acceder a tus datos, corregirlos o eliminarlos, y exportar tu información a Excel desde el sistema. Escríbenos a {email} o al {phone}.' },
      { title: '9. Medición del sitio', text: 'Este sitio usa Google Analytics para medir visitas de forma agregada.' },
      { title: '10. Cambios a esta política', text: 'Podemos actualizar esta política. La fecha de la última actualización aparece arriba.' },
      { title: '11. Contacto', text: 'Si tienes preguntas sobre esta política, contáctanos al: {phone}' },
    ],
  },
};
