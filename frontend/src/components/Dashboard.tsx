import { DashboardCard } from "./DashboardCard";
import { ArrowBigLeft } from 'lucide-react';

export function Dashboard (){
return(

    <div>
        {/* Back to the pomodoro */}
        <button><ArrowBigLeft/></button>
        <DashboardCard/>
    </div>
  );
}