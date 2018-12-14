export const INCREASE = 'increase';

export const increase = (count) => {
    return {
        type: 'increase',
        poyload: count
    }
}