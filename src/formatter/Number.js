export function NumberFormatter(value) {
    return new Intl.NumberFormat('fr-FR').format(value);
}

export function CurrencyFormatter(value) {
    // ...
}