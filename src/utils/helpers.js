export function formatNumber(num) {
  if (num == null) {
    return '0';
  }

  return num.toLocaleString();
}
