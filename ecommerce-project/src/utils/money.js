export function formatMoney(amountInCents) {
    const dollars = amountInCents / 100;
    return `$${dollars.toFixed(2)}`;
}
