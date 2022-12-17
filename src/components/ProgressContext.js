import { createContext, useState } from 'react';


export const ProgressContext = createContext(0);

function getInitialState() {
    const progressData = localStorage.getItem('progress');
    return progressData ? JSON.parse(progressData) : 0
  }

export const ProgressProvider = (props) => {
    const [progress, setProgress] = useState(getInitialState);
    return (
        <ProgressContext.Provider value={[progress, setProgress]}>
            {props.children}
        </ProgressContext.Provider>
    );
}