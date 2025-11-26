import { it,expect,describe } from 'vitest';
import { formatMoney } from './money';


describe('formatMoney',()=>{
it('formats 0 cents as $0.00',()=>{
    expect(formatMoney(0)).toBe('$0.00');

});
it('formats 1999 cents as $19.99',()=>{
    expect(formatMoney(1999)).toBe('$19.99');
});

it('displays 2 decimals',()=>{
    expect(formatMoney(1400)).toBe('$14.00');
    expect(formatMoney(1000)).toBe('$10.00');
});

it('displays negative values correctly',()=>{
    expect(formatMoney(-99)).toBe('-$0.99');
    expect(formatMoney(-1000)).toBe('-$10.00');
});

});
