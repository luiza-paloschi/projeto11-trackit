import { createContext, useState } from 'react';

export const UserContext = createContext({});

function getInitialState() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : {};
  }


export const UserProvider = (props) => {
    const [user, setUser] = useState(getInitialState);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}