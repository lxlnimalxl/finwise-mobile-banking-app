import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, ChevronRight, Target } from 'lucide-react';
import GoalTravel from '../../assets/goal-travel.svg';
import GoalCar from '../../assets/goal-car.svg';
import GoalWedding from '../../assets/goal-wedding.svg';
import GoalHome from '../../assets/goal-home.svg';

export default function AnalysisScreen({ onNavigate }) {
  const [period, setPeriod] = useState('Weekly');
  const [selectedDay, setSelectedDay] = useState('Thu');

  const chartData = [
    { day: 'Mon', income: 4500, expense: 1200 },
    { day: 'Tue', income: 2800, expense: 2100 },
    { day: 'Wed', income: 8200, expense: 3400 },
    { day: 'Thu', income: 14200, expense: 5600 },
    { day: 'Fri', income: 6100, expense: 4800 },
    { day: 'Sat', income: 9300, expense: 3900 },
    { day: 'Sun', income: 3200, expense: 1900 },
  ];

  const maxVal = 16000;

  const targets = [
    { title: 'Travel Trip', saved: '$1,500', target: '$5,000', pct: 30, icon: GoalTravel, color: '#3299FF' },
    { title: 'New Car', saved: '$8,000', target: '$10,000', pct: 80, icon: GoalCar, color: '#00D09E' },
    { title: 'Wedding Ceremony', saved: '$9,750', target: '$15,000', pct: 65, icon: GoalWedding, color: '#FF7A00' },
    { title: 'Dream House', saved: '$45,000', target: '$100,000', pct: 45, icon: GoalHome, color: '#6DB6FE' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#F1FFF3] overflow-y-auto no-scrollbar pb-6">
      {/* Header */}
      <div className="px-6 pt-2 pb-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-[#052224] tracking-tight">Income & Expenses</h1>
          <p className="text-xs font-semibold text-[#093030]/70">Financial Analysis & Targets</p>
        </div>
      </div>

      {/* Period Filter (Daily / Weekly / Monthly / Year) */}
      <div className="px-5 mb-4">
        <div className="bg-[#DFF7E2] rounded-full p-1 flex items-center justify-between shadow-xs">
          {['Daily', 'Weekly', 'Monthly', 'Year'].map((item) => (
            <button
              key={item}
              onClick={() => setPeriod(item)}
              className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer text-center ${
                period === item
                  ? 'bg-[#00D09E] text-[#052224] shadow-xs scale-101'
                  : 'text-[#093030]/80 hover:text-[#052224]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Chart Card (Figma Node 7033:781) */}
      <div className="px-5 mb-5">
        <div className="bg-white rounded-[28px] p-5 border border-[#00D09E]/20 shadow-xs">
          {/* Legend and Total */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D09E]" />
                <span className="text-[11px] font-bold text-[#052224]">Income</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0068FF]" />
                <span className="text-[11px] font-bold text-[#052224]">Expense</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-[#093030]/70 block font-semibold">Average Net</span>
              <span className="text-xs font-black text-[#00D09E]">+$2,932.60</span>
            </div>
          </div>

          {/* Bar Chart Area */}
          <div className="h-44 w-full flex items-end justify-between gap-2 pt-2 px-1 border-b border-[#00D09E]/15 pb-2">
            {chartData.map((d) => {
              const incomeHeight = `${Math.round((d.income / maxVal) * 100)}%`;
              const expenseHeight = `${Math.round((d.expense / maxVal) * 100)}%`;
              const isSelected = selectedDay === d.day;

              return (
                <div
                  key={d.day}
                  onClick={() => setSelectedDay(d.day)}
                  className={`flex-1 flex flex-col items-center h-full justify-end cursor-pointer group transition-all ${
                    isSelected ? 'opacity-100 scale-105' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  <div className="w-full flex items-end justify-center gap-1 h-32 relative">
                    {/* Tooltip on selected */}
                    {isSelected && (
                      <div className="absolute -top-7 bg-[#052224] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-10 animate-fade-in">
                        ${d.income.toLocaleString()}
                      </div>
                    )}
                    {/* Income Bar */}
                    <div
                      className="w-2.5 bg-[#00D09E] rounded-t-sm transition-all duration-500 ease-out group-hover:brightness-110"
                      style={{ height: incomeHeight }}
                    />
                    {/* Expense Bar */}
                    <div
                      className="w-2.5 bg-[#0068FF] rounded-t-sm transition-all duration-500 ease-out group-hover:brightness-110"
                      style={{ height: expenseHeight }}
                    />
                  </div>
                  <span
                    className={`text-[10px] mt-2 font-bold ${
                      isSelected ? 'text-[#0068FF]' : 'text-[#093030]/70'
                    }`}
                  >
                    {d.day}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Metrics Row (Figma Node 7033:781) */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-[#F1FFF3] rounded-2xl p-3 border border-[#00D09E]/20 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#00D09E]/20 flex items-center justify-center">
                <ArrowUpRight size={16} className="text-[#00D09E]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#093030]/70 block">Total Income</span>
                <span className="text-sm font-black text-[#052224]">$4,120.00</span>
              </div>
            </div>

            <div className="bg-[#F1FFF3] rounded-2xl p-3 border border-[#0068FF]/20 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0068FF]/20 flex items-center justify-center">
                <ArrowDownLeft size={16} className="text-[#0068FF]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#093030]/70 block">Total Expense</span>
                <span className="text-sm font-black text-[#0068FF]">-$1,187.40</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Targets Section (Figma: My Targets) */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Target size={16} className="text-[#00D09E]" />
            <h3 className="text-sm font-bold text-[#052224]">My targets</h3>
          </div>
          <button
            onClick={() => onNavigate('savings')}
            className="text-xs font-semibold text-[#0068FF] hover:underline cursor-pointer flex items-center gap-0.5"
          >
            Manage <ChevronRight size={14} />
          </button>
        </div>

        <div className="space-y-2.5">
          {targets.map((tgt, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate('savings')}
              className="bg-white rounded-2xl p-3 flex items-center justify-between border border-[#00D09E]/15 hover:border-[#00D09E]/40 transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center gap-3">
                <img src={tgt.icon} alt={tgt.title} className="w-11 h-11 object-contain rounded-xl" />
                <div>
                  <h4 className="text-xs font-bold text-[#052224]">{tgt.title}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-semibold text-[#093030]/70">
                      {tgt.saved} of {tgt.target}
                    </span>
                  </div>
                </div>
              </div>

              {/* Circular Progress Representation */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#DFF7E2] flex items-center justify-center relative">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-t-transparent border-l-transparent"
                    style={{ borderColor: tgt.color }}
                  />
                  <span className="text-[10px] font-extrabold text-[#052224]">{tgt.pct}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
