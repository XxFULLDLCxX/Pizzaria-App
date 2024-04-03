import { createContext } from "react";


export const CartContext = createContext({

});

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);