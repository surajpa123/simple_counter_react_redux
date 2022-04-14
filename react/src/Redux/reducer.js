import { INC_COUNT, DEC_COUNT} from "./action";

const initState = {
    count: 0
}

export const reducer = (store = initState,{type,payload})=>{
    console.log("Store",store)
    switch(type){
        case INC_COUNT:
            return({...store,count: store.count +payload})
            case DEC_COUNT:
                return({...store,count: store.count - payload})
                default:
                    return store;
    }
}