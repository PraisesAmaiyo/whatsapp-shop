export function formatNumber(num) {
  if (num == null) {
    return '0';
  }

  return num.toLocaleString();
}

export function getDate() {
  const date = new Date().toLocaleString('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return date;
}

export function generateOrderID(length = 6) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
    .toUpperCase();
}
