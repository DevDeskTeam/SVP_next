'use client'
import store from "@/store/store";
import {Provider} from "react-redux";
import {ReactNode} from "react";
function ReduxProvider({children} : {children : ReactNode}){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider;