export function NumberFormatter(value) {
    return new Intl.NumberFormat('fr-FR').format(value);
}

export function CurrencyFormatter(value) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
}