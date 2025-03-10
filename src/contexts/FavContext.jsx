import { createContext, useState } from "react";

export const FavContext = createContext(null)

function FavProvider ({children}) {
    const [fav, setFav] = useState([])
    


    return <FavContext.Provider value={{setFav, fav}}>
        {children}
    </FavContext.Provider>
}

export default FavProvider