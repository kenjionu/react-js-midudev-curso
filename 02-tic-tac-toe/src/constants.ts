export const TURNS: ITurns = {
    X: 'x',
    O: 'o'
}
interface ITurns {
    X: string;
    O: string;
}

export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [6, 4, 2],
    [0, 4, 8],
    [2, 5, 8],
]