export const INCREMENT: string = 'INCREMENT';

export type actionType = {
    type: string
}

export const increment = ():actionType => ({
    type: INCREMENT
});