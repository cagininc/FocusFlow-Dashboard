import {  useEffect } from "react";
import { usePomodoro } from "@/context/PomodoroContext";

const Pomodoro = () => {

  const {
    // activeTask,
    // setActiveTask,
    // pomodoroDuration,
    // setPomodoroDuration,
    timeLeft,
    setTimeLeft,
    // shortBreakDuration,
    // setShortBreakDuration,
    // longBreakDuration,
    // setLongBreakDuration,

    completedPomodoros,
    setCompletedPomodoros,
    // totalTimeSpent,
    // setTotalTimeSpent,
    // currentTimer,
    // setCurrentTimer,
    isRunning,
    setIsRunning}=usePomodoro()//FROM CONTEXT



//We will deliver the completed minutes to the duration variable for the DB, and then analytics will be provided.
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setCompletedPomodoros(completedPomodoros + 1);
    }

    return () => clearTimeout(timer);
  }, [isRunning, timeLeft]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60); // Başlangıç süresine döner
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-bold">Pomodoro Timer</h1>
      <div className="text-5xl font-mono">
        {formatTime(timeLeft)}
      </div>
      <div className="   space-x-4">
        <button
          onClick={handleStartStop}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
        >
          Reset
        </button>
        {/* <div className="text-lg font-semibold mt-6 justify-center">
        <p > ilk taskin adı burada yazıcak böylece hangi görevde oldugun anlaşılacak</p>
        </div> */}
        </div>
    </div>
  );
};

export default Pomodoro;
