import { DashboardCard } from "./DashboardCard";
import { ArrowBigLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { DashboardBadges } from "./DashboardBadges";
import focusFlowDash from '../images/statics.jpeg';

export function Dashboard() {
  return (
    <div className="h-screen w-full bg-cover bg-center"  style={{ backgroundImage: `url(${focusFlowDash})` }}>
      <div >
        {/* Back to the pomodoro */}
        <Link to={"/todos"}>
          <button className=   "top-0 right-0 mb-4">
            <ArrowBigLeft className="text-white size-8" />
          </button>
        </Link>
        <DashboardCard />
        <DashboardBadges />
      </div>
    </div>
  );
}
