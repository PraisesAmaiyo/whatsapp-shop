export function formatNumber(num) {
  if (num == null) {
    return '0';
  }

  return num.toLocaleString();
}

export function getDate() {
  const date = new Date().toLocaleDateString('en-GB');
  return date;
}

export function generateOrderID(length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
    .toUpperCase();
}
