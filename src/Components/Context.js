import React, { useState } from 'react'

export const UserContext = React.createContext();

export function UserProvider({children}) {
  const [theme,setTheme] = useState("light");   

    return (
      <UserContext.Provider value={[theme,setTheme]}>
        {children}
      </UserContext.Provider>
    )
}