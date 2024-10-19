import { Badge } from "@/components/ui/badge"
import { Hourglass, NotebookPen, Trophy } from 'lucide-react';

export function DashboardBadges() {
  return (
  
    <div className="flex justify-center gap-4 mt-4">
    <Badge className="text-lg px-4 py-2">
      <Hourglass/>
      
      
      Harcanan süre  38 h</Badge>
    <Badge className="text-lg px-4 py-2">Daily ortalama 4h <NotebookPen/>
    </Badge>
    <Badge className="text-lg px-4 py-2"> Focus Rate: %50 
      <Trophy/>
    </Badge>
  </div>
  )
}
