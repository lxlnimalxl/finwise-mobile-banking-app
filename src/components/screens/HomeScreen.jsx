import React, { useState } from 'react';
import IconNotification from '../../assets/icon-notification.svg';
import CatSalary from '../../assets/cat-salary.svg';
import CatGroceries from '../../assets/cat-groceries.svg';
import CatRent from '../../assets/cat-rent.svg';
import CatFood from '../../assets/cat-food.svg';
import GoalTravel from '../../assets/goal-travel.svg';
import GoalCar from '../../assets/goal-car.svg';
import GoalHome from '../../assets/goal-home.svg';
import { ArrowUpRight, ArrowDownLeft, Plus } from 'lucide-react';

export default function HomeScreen({ onNavigate, onOpenNotifications, onOpenAdd }) {
  const [period, setPeriod] = useState('Daily');

  const transactions = [
    {
      id: 1,
      title: 'Salary',
      category: 'Monthly',
      date: '18:27 - April 30',
      amount: '+$4,000.00',
      isIncome: true,
      icon: CatSalary,
    },
    {
      id: 2,
      title: 'Groceries',
      category: 'Pantry',
      date: '17:00 - April 24',
      amount: '-$100.00',
      isIncome: false,
      icon: CatGroceries,
    },
    {
      id: 3,
      title: 'Rent',
      category: 'Rent',
      date: '8:30 - April 15',
      amount: '-$674.40',
      isIncome: false,
      icon: CatRent,
    },
    {
      id: 4,
      title: 'Food & Dinner',
      category: 'Dinner',
      date: '19:30 - March 31',
      amount: '-$70.40',
      isIncome: false,
      icon: CatFood,
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#F1FFF3] overflow-y-auto no-scrollbar pb-6">
      {/* Top Header */}
      <div className="px-6 pt-2 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-[#093030]/80 tracking-wide uppercase">Good Morning</p>
          <h1 className="text-xl font-extrabold text-[#052224] tracking-tight">Hi, Welcome Back</h1>
        </div>
        <button
          onClick={onOpenNotifications}
          className="relative w-10 h-10 rounded-full bg-[#DFF7E2] hover:bg-[#cbeecd] transition-all flex items-center justify-center cursor-pointer shadow-xs"
          title="Notifications"
        >
          <img src={IconNotification} alt="Notifications" className="w-5 h-5 object-contain" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#0068FF] ring-2 ring-white animate-pulse" />
        </button>
      </div>

      {/* Main Balance & Budget Card (Figma Node 7033:612 & 7110:4831) */}
      <div className="px-5 mb-5">
        <div className="bg-[#00D09E] rounded-[28px] p-5 text-[#052224] shadow-lg shadow-[#00D09E]/20 relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute right-12 -bottom-10 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />

          {/* Balance & Expense Row */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#052224]/15">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-4 h-4 rounded-full bg-[#052224]/10 flex items-center justify-center">
                  <ArrowUpRight size={11} className="text-[#052224]" />
                </span>
                <span className="text-xs font-semibold text-[#093030]">Total Balance</span>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-[#F1FFF3] drop-shadow-xs">$7,783.00</h2>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-4 h-4 rounded-full bg-[#0068FF]/15 flex items-center justify-center">
                  <ArrowDownLeft size={11} className="text-[#0068FF]" />
                </span>
                <span className="text-xs font-semibold text-[#093030]">Total Expense</span>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-[#0068FF]">-$1,187.40</h2>
            </div>
          </div>

          {/* Progress / Budget Bar (Figma Node 7110:4826) */}
          <div className="pt-3.5">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="text-[#052224] text-[11px] font-bold">30% of your expenses, looks good.</span>
              <span className="text-[11px] font-extrabold text-[#052224] bg-white/30 px-2 py-0.5 rounded-full">
                30% of $20,000
              </span>
            </div>
            {/* Custom styled progress meter */}
            <div className="w-full h-3 bg-[#052224]/20 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-[#052224] rounded-full transition-all duration-700 ease-out"
                style={{ width: '30%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Switch Filter (Daily / Weekly / Monthly) (Figma Node 7065:2863) */}
      <div className="px-5 mb-5">
        <div className="bg-[#DFF7E2] rounded-full p-1 flex items-center justify-between shadow-xs">
          {['Daily', 'Weekly', 'Monthly'].map((item) => (
            <button
              key={item}
              onClick={() => setPeriod(item)}
              className={`flex-1 py-2 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer text-center ${
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

      {/* Savings on Goals Section (Figma Node 7105:3030) */}
      <div className="px-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-[#052224]">Savings on goals</h3>
          <button
            onClick={() => onNavigate('savings')}
            className="text-xs font-semibold text-[#0068FF] hover:underline cursor-pointer"
          >
            View all
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2.5">
          {[
            { name: 'Travel', pct: '30%', icon: GoalTravel, color: 'border-[#3299FF]' },
            { name: 'Car', pct: '80%', icon: GoalCar, color: 'border-[#6DB6FE]' },
            { name: 'House', pct: '45%', icon: GoalHome, color: 'border-[#00D09E]' },
            { name: 'New Goal', pct: '+', icon: null, isAdd: true },
          ].map((goal, idx) => (
            <div
              key={idx}
              onClick={() => (goal.isAdd ? onOpenAdd() : onNavigate('savings'))}
              className="bg-white rounded-2xl p-2.5 flex flex-col items-center justify-center border border-[#00D09E]/15 hover:border-[#00D09E] transition-all cursor-pointer shadow-xs group"
            >
              {goal.isAdd ? (
                <div className="w-11 h-11 rounded-full bg-[#DFF7E2] text-[#00D09E] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <Plus size={20} strokeWidth={2.5} className="text-[#052224]" />
                </div>
              ) : (
                <div className="relative mb-1">
                  <img src={goal.icon} alt={goal.name} className="w-11 h-11 object-contain rounded-xl" />
                  <span className="absolute -bottom-1 -right-1 bg-[#052224] text-white text-[9px] font-bold px-1 rounded-sm">
                    {goal.pct}
                  </span>
                </div>
              )}
              <span className="text-[11px] font-bold text-[#052224] truncate w-full text-center">
                {goal.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions List (Figma Node 7035:952) */}
      <div className="px-5 flex-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-[#052224]">Recent Transactions</h3>
          <button
            onClick={() => onNavigate('transactions')}
            className="text-xs font-semibold text-[#0068FF] hover:underline cursor-pointer"
          >
            See all
          </button>
        </div>

        <div className="space-y-2.5">
          {transactions.map((t) => (
            <div
              key={t.id}
              onClick={() => onNavigate('transactions')}
              className="bg-white rounded-2xl p-3 flex items-center justify-between border border-[#00D09E]/15 hover:border-[#00D09E]/40 transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center gap-3">
                <img src={t.icon} alt={t.title} className="w-11 h-11 object-contain rounded-xl" />
                <div>
                  <h4 className="text-xs font-bold text-[#052224]">{t.title}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-medium text-[#093030]/70">{t.category}</span>
                    <span className="text-[9px] text-[#0068FF] font-semibold">{t.date}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`text-xs font-extrabold ${
                    t.isIncome ? 'text-[#00D09E]' : 'text-[#0068FF]'
                  }`}
                >
                  {t.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
