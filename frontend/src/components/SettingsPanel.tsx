
import { usePomodoro } from "@/context/PomodoroContext";
import { Plus,Minus } from "lucide-react";

interface SettingsPanelProps {
  show: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ show, onClose }: SettingsPanelProps) {
  const { timeLeft, setTimeLeft } = usePomodoro(); //
  
  const increasePomodoro=()=>{
if (timeLeft<60) {
setTimeLeft(timeLeft+5)}
console.log("i pressed plus sign ")

  }
  const decreasePomodoro=()=>{
    if (timeLeft>10)
    setTimeLeft(timeLeft-5)
  }
  
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-slate-50 text-black shadow-lg transform ${
        show ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold">Settings</h2>
        <button
          className="absolute top-4 right-4 text-black-300 hover:text-white"
          onClick={onClose}
        >
          Close
        </button>

        {/* CARD */}
        <div className="mt-4 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 ml-auto">
                <button  onClick={increasePomodoro}   className="p-1 hover:bg-gray-200" >
                     <Plus size={15} className="text-gray-500"/>
                    </button>
                    <button  onClick={decreasePomodoro} className="p-1  hover:bg-gray-200" >
                     <Minus size={15}   className="text-gray-500 "/>
                    </button>
                    </div>
            <label htmlFor="volume" className="text-sm font-medium">
              Volume
            </label>
            <input
              id="volume"
              type="range"
              min="0"
              max="100"
              value="50"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-sm">50%</span>
          </div>
        </div>
      </div>
   
  );
}
