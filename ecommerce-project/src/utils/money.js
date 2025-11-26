export function formatMoney(amountInCents) {
    const dollars = amountInCents / 100;
    if (dollars < 0) {
        return `-$${Math.abs(dollars).toFixed(2)}`;
    }
    return `$${dollars.toFixed(2)}`;
}
