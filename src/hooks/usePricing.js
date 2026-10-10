'use client';

import { useState } from 'react';
import { useWhatsApp } from '../contexts/WhatsAppContext';
import { CONFIG } from '../constants';

export const PRICE_TABLE = { 1: 399, 2: 789, 3: 1149, 4: 1499, 5: 1799, 6: 2199, 7: 2499, 8: 2799, 9: 3099, 10: 3399 };
export const MAX_UNITS_WITH_PRICE = 10;
export const MIN_TOTAL_UNITS = 1;

const addThousands = (intStr) => intStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const formatPrice = (amount) => `$${addThousands(String(amount))}`;
export const formatPriceDecimals = (amount) => {
  const [intPart, decPart] = amount.toFixed(2).split('.');
  return `$${addThousands(intPart)}.${decPart}`;
};

/** Shared calculator state: same prices and rules for every layout. */
export const usePricing = () => {
  const { openWhatsApp } = useWhatsApp();
  const [stores, setStores] = useState(1);
  const needsQuote = stores > MAX_UNITS_WITH_PRICE;
  const price = PRICE_TABLE[stores] ?? null;
  const pricePerUnit = price && stores > 0 ? price / stores : null;
  const hasDiscount = stores >= 2 && pricePerUnit;
  const ctaMessage = needsQuote
    ? `Hola, tengo ${stores} sucursales y me interesa SmartVenta. Quisiera un precio personalizado.`
    : `Hola, me interesa SmartVenta para ${stores} sucursal${stores !== 1 ? 'es' : ''}. Quiero comenzar.`;
  const cta = () => (needsQuote ? openWhatsApp(ctaMessage) : window.open(`${CONFIG.urls.app}/registrarme`, '_blank'));
  return {
    stores, setStores, needsQuote, price, pricePerUnit, hasDiscount, cta,
    ctaLabel: needsQuote ? 'Contáctanos' : 'Crear mi cuenta',
  };
};
