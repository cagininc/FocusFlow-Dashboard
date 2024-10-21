import  { createContext, ReactNode, useContext,useState } from 'react';

interface PomodoroContextType{
activeTask:string, //active task it's also under the timer and top of the list
setActiveTask: React.Dispatch<React.SetStateAction<string>>,
//theese are also controlled in settings section
pomodoroDuration:number,
setPomodoroDuration:React.Dispatch<React.SetStateAction<number>>
//
timeLeft:number //this is the actual time on clock
setTimeLeft:React.Dispatch<React.SetStateAction<number>>
//
shortBreakDuration: number; // short break 
setShortBreakDuration:React.Dispatch<React.SetStateAction<number>>
longBreakDuration: number; // long break
setLongBreakDuration:React.Dispatch<React.SetStateAction<number>>
//
completedPomodoros:number;
setCompletedPomodoros:React.Dispatch<React.SetStateAction<number>>; //setter for completed pomodoros
//
totalTimeSpent:number; //all pomodoros daily 
setTotalTimeSpent:React.Dispatch<React.SetStateAction<number>>
//
// i have been planning some UI design for each part
currentTimer:'pomodoro'|'shortBreak'|'longBreak';
setCurrentTimer:React.Dispatch<React.SetStateAction<'pomodoro'|'shortBreak'|'longBreak'>>
isRunning:boolean
setIsRunning:React.Dispatch<React.SetStateAction<boolean>>

}

const PomodoroContext=createContext<PomodoroContextType|undefined>(undefined);

export const usePomodoro=()=>{
    const context =useContext(PomodoroContext);
    if(!context){
        throw new Error("usePomodoro Hook inside pomodoro contextProvider!!!!" )
    }
    return context;
}
export const PomodoroProvider = ({ children }: { children: ReactNode }) => {
    const [activeTask, setActiveTask] = useState<string>('Initial Task');
     const [pomodoroDuration, setPomodoroDuration] = useState<number>(25);
    const [timeLeft, setTimeLeft] = useState<number>(pomodoroDuration * 60); // Example: Start with 25 minutes
    const [shortBreakDuration, setShortBreakDuration] = useState<number>(5);
    const [longBreakDuration, setLongBreakDuration] = useState<number>(15);
    const [completedPomodoros, setCompletedPomodoros] = useState<number>(0);
    const [totalTimeSpent, setTotalTimeSpent] = useState<number>(0);
    const [currentTimer, setCurrentTimer] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
    const [isRunning, setIsRunning] = useState<boolean>(false);
  
    return (
        <PomodoroContext.Provider value={{
          activeTask,
          setActiveTask,
          pomodoroDuration,
          setPomodoroDuration,
          timeLeft,
          setTimeLeft,
          shortBreakDuration,
          setShortBreakDuration,
          longBreakDuration,
          setLongBreakDuration,
          completedPomodoros,
          setCompletedPomodoros,
          totalTimeSpent,
          setTotalTimeSpent,
          currentTimer,
          setCurrentTimer,
          isRunning,
          setIsRunning
        }}>
          {children}
        </PomodoroContext.Provider>
      );
    };