import React, { useEffect, useState } from "react";
import {app} from "../firebaseConfig";
import Cargando from '../components/Cargando'

export const Context = React.createContext();

export const GlobalContext = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
            setUsuario(user);
            setShowChild(true);
        });
    }, []);

    if (!showChild) {
        return <Cargando/>;
    } else {
        return (
            <Context.Provider
                value={{
                    usuario
                }}
            >
                {children}
            </Context.Provider>
        );
    }
};
