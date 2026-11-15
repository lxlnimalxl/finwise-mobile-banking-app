import React from 'react';
import GoalTravel from '../../assets/goal-travel.svg';
import GoalWedding from '../../assets/goal-wedding.svg';
import GoalCar from '../../assets/goal-car.svg';
import GoalHome from '../../assets/goal-home.svg';
import { Plus, CheckCircle2, ChevronRight } from 'lucide-react';

export default function SavingsScreen({ onOpenAdd }) {
  const savingsGoals = [
    {
      id: 1,
      title: 'Travel Trip to Kyoto',
      category: 'Vacation',
      saved: 1500,
      target: 5000,
      pct: 30,
      icon: GoalTravel,
      color: '#3299FF',
      dueDate: 'Dec 2026',
    },
    {
      id: 2,
      title: 'New Electric Car',
      category: 'Automotive',
      saved: 8000,
      target: 10000,
      pct: 80,
      icon: GoalCar,
      color: '#00D09E',
      dueDate: 'Aug 2026',
    },
    {
      id: 3,
      title: 'Wedding Ceremony',
      category: 'Celebration',
      saved: 9750,
      target: 15000,
      pct: 65,
      icon: GoalWedding,
      color: '#FF7A00',
      dueDate: 'Nov 2026',
    },
    {
      id: 4,
      title: 'Suburban House Downpayment',
      category: 'Real Estate',
      saved: 45000,
      target: 100000,
      pct: 45,
      icon: GoalHome,
      color: '#6DB6FE',
      dueDate: 'May 2027',
    },
  ];

  const totalSaved = savingsGoals.reduce((sum, g) => sum + g.saved, 0);
  const totalTarget = savingsGoals.reduce((sum, g) => sum + g.target, 0);
  const overallPct = Math.round((totalSaved / totalTarget) * 100);

  return (
    <div className="flex-1 flex flex-col bg-[#F1FFF3] overflow-y-auto no-scrollbar pb-6">
      {/* Header */}
      <div className="px-6 pt-2 pb-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-[#052224] tracking-tight">Savings Goals</h1>
          <p className="text-xs font-semibold text-[#093030]/70">Target Milestones & Deposits</p>
        </div>

        <button
          onClick={onOpenAdd}
          className="flex items-center gap-1.5 bg-[#00D09E] text-[#052224] font-extrabold text-xs px-3.5 py-2 rounded-full shadow-xs hover:bg-[#00b386] transition-all cursor-pointer"
        >
          <Plus size={15} strokeWidth={3} />
          <span>New Goal</span>
        </button>
      </div>

      {/* Overview Balance Card (Figma Node 7064:2811) */}
      <div className="px-5 mb-5">
        <div className="bg-[#00D09E] rounded-[28px] p-5 text-[#052224] shadow-md shadow-[#00D09E]/20 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[11px] font-bold text-[#093030]">Total Accumulated Savings</span>
              <h2 className="text-2xl font-black text-[#F1FFF3] drop-shadow-xs">
                ${totalSaved.toLocaleString()}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-bold text-[#093030]">Combined Goal</span>
              <h3 className="text-lg font-black text-[#052224]">${totalTarget.toLocaleString()}</h3>
            </div>
          </div>

          <div className="pt-2 border-t border-[#052224]/15">
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className="text-[#052224] text-[11px] font-bold">{overallPct}% of total goal achieved</span>
              <span className="text-[11px] font-black bg-white/30 px-2 py-0.5 rounded-full">
                ${(totalTarget - totalSaved).toLocaleString()} to go
              </span>
            </div>
            <div className="w-full h-2.5 bg-[#052224]/20 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-[#052224] rounded-full transition-all duration-700"
                style={{ width: `${overallPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Goals List */}
      <div className="px-5 space-y-3 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#052224]">Active Milestones</h3>
          <span className="text-xs text-[#093030]/60 font-semibold">{savingsGoals.length} Goals</span>
        </div>

        {savingsGoals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white rounded-2xl p-4 border border-[#00D09E]/15 hover:border-[#00D09E]/40 transition-all shadow-xs"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src={goal.icon} alt={goal.title} className="w-12 h-12 object-contain rounded-2xl" />
                <div>
                  <h4 className="text-xs font-black text-[#052224]">{goal.title}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-semibold text-[#093030]/70">{goal.category}</span>
                    <span className="text-[9px] text-[#0068FF] font-bold">Due {goal.dueDate}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-[#052224] block">
                  ${goal.saved.toLocaleString()}
                </span>
                <span className="text-[10px] font-bold text-[#093030]/60">
                  of ${goal.target.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex items-center justify-between text-[10px] font-bold text-[#093030] mb-1">
                <span>Progress</span>
                <span className="font-extrabold text-[#0068FF]">{goal.pct}%</span>
              </div>
              <div className="w-full h-2 bg-[#DFF7E2] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${goal.pct}%`, backgroundColor: goal.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
