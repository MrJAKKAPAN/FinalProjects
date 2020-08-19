const replace = require('lodash/replace');

export function formatCurrency(amount: number, sourceCurrency?: string, rate?: number) {
    // Default destCurrency = 'VND'
    if (!amount || amount <= 0) {
        return `0 ${sourceCurrency ? sourceCurrency : ''}`.trim();
    }

    if (sourceCurrency) {
        amount = roundTo(+amount / rate, 2);
    }

    return `${replace(amount, /(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ${sourceCurrency ? sourceCurrency : ''}`.trim();
}
