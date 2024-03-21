export const getSubtotal = (item) => {
    const subtotal = item.product.price * item.quantity;
    return Number(subtotal.toFixed(2));
}

export const getTotal = (items) => {
    let total = 0;
    items.forEach((item) => total += getSubtotal(item))
    return Number(total.toFixed(2));
}

export const toMoney =  (num) => {
    return num.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    })
}