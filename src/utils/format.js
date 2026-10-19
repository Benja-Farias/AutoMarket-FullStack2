export function formatPrice(valor) {
  return '$' + String(Math.round(valor)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function formatNumber(valor) {
  return String(Math.round(valor)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
