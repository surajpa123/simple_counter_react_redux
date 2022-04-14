export const INC_COUNT = "INC_COUNT";

export const DEC_COUNT = "DEC_COUNT";

export const inccount = (payload) =>({
    type:INC_COUNT,
    payload
})

export const deccount = (payload) =>({ type:DEC_COUNT, payload})
