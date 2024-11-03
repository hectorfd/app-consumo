export function money(quantity: number) {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency', currency: 'PEN'
    }).format(quantity);
}
