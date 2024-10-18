

interface SettingsPanelProps {
    show:boolean,
    onClose:()=>void;

}


export default function SettingsPanel({show,onClose}:SettingsPanelProps){




    return(


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
        {/* Settings */}
        <div className="mt-4">
          
          <label className="block text-sm mb-2">Setting 1</label>
          <input type="checkbox" className="mb-4" />
          <label className="block text-sm mb-2">Setting 2</label>
          <input type="checkbox" />
        </div>
        <div className="flex items-center space-x-4">
  <label htmlFor="volume" className="text-sm font-medium">Volume</label>
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




    )
}