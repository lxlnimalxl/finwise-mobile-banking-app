import React from 'react';
import StatusBar from './StatusBar';
import BottomNavBar from './BottomNavBar';
import {
  Home,
  BarChart3,
  Receipt,
  Grid3X3,
  Target,
  User,
  Bell,
  PlusCircle,
  ExternalLink,
  Smartphone,
  Sparkles,
} from 'lucide-react';

export default function PhoneFrame({
  activeTab,
  onSelectTab,
  onOpenNotifications,
  onOpenAdd,
  children,
}) {
  const screens = [
    { id: 'home', label: 'Home Dashboard', icon: Home, desc: 'Balance card, goals, recent transactions' },
    { id: 'analysis', label: 'Financial Analysis', icon: BarChart3, desc: 'Income & Expense chart, targets' },
    { id: 'transactions', label: 'Transaction Feed', icon: Receipt, desc: 'Filterable log, search by month' },
    { id: 'category', label: 'Category Budgets', icon: Grid3X3, desc: '3x3 grid, limits & spending' },
    { id: 'savings', label: 'Savings Goals', icon: Target, desc: 'Milestone trackers & target dates' },
    { id: 'profile', label: 'Profile & Security', icon: User, desc: 'Biometrics, settings & help' },
  ];

  return (
    <div className="min-h-screen bg-[#07100f] text-slate-100 flex flex-col lg:flex-row items-center justify-center p-0 lg:p-8 font-sans selection:bg-[#00D09E] selection:text-[#052224]">
      {/* Desktop Showcase Side Panel (Visible on lg+) */}
      <div className="hidden lg:flex flex-col w-[390px] mr-10 xl:mr-14 shrink-0 space-y-6">
        {/* Brand Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D09E]/15 border border-[#00D09E]/30 text-[#00D09E] text-xs font-bold tracking-wide">
            <Sparkles size={14} />
            <span>PORTFOLIO PIECE #3</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-2">
            <span>FinWise</span>
            <span className="text-xs font-black bg-[#00D09E] text-[#052224] px-2 py-0.5 rounded-md">
              v1.0
            </span>
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            Finance Management & Budget Tracker Mobile App UI Kit. 1:1 Pixel-Perfect implementation from Figma with React 19 and Tailwind CSS v4.
          </p>
        </div>

        {/* Screen Switcher */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
            Interactive Screen Switcher
          </span>
          <div className="space-y-1.5">
            {screens.map((screen) => {
              const Icon = screen.icon;
              const isActive = activeTab === screen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => onSelectTab(screen.id)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#00D09E]/15 border-[#00D09E] text-white shadow-sm shadow-[#00D09E]/20'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#00D09E] text-[#052224]' : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      <Icon size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">{screen.label}</span>
                      <span className="text-[10px] text-slate-400 font-medium truncate block max-w-[200px]">
                        {screen.desc}
                      </span>
                    </div>
                  </div>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00D09E]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Modal Actions */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
            Modals & Overlays
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onOpenNotifications}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 transition-colors cursor-pointer"
            >
              <Bell size={14} className="text-[#00D09E]" />
              <span>Notification Drawer</span>
            </button>
            <button
              onClick={onOpenAdd}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#00D09E] hover:bg-[#00b386] text-xs font-black text-[#052224] transition-colors cursor-pointer"
            >
              <PlusCircle size={14} />
              <span>Add Transaction</span>
            </button>
          </div>
        </div>

        {/* Design System Tokens */}
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Figma Color Tokens
          </span>
          <div className="flex items-center gap-1.5">
            {[
              { name: 'Caribbean Green', hex: '#00D09E' },
              { name: 'Light Green', hex: '#DFF7E2' },
              { name: 'Honeydew BG', hex: '#F1FFF3' },
              { name: 'Fence Green Text', hex: '#052224' },
              { name: 'Ocean Blue', hex: '#0068FF' },
              { name: 'Vivid Blue', hex: '#3299FF' },
              { name: 'Light Blue', hex: '#6DB6FE' },
            ].map((c) => (
              <div
                key={c.name}
                className="w-7 h-7 rounded-lg border border-white/20 transition-transform hover:scale-125 cursor-pointer relative group"
                style={{ backgroundColor: c.hex }}
                title={`${c.name} (${c.hex})`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* iPhone 16 Pro Frame Wrapper */}
      <div className="relative w-full lg:w-auto flex items-center justify-center">
        {/* Physical Phone Outer Chassis (on desktop) */}
        <div className="relative w-full max-w-[430px] lg:w-[410px] xl:w-[420px] h-[100dvh] lg:h-[870px] bg-black lg:rounded-[52px] lg:p-[12px] lg:border-[5px] lg:border-[#1a2e2b] shadow-[0_25px_70px_rgba(0,208,158,0.25)] flex flex-col overflow-hidden">
          {/* Hardware Buttons (Hidden on mobile) */}
          <div className="hidden lg:block absolute -left-[8px] top-28 w-[3px] h-12 bg-[#2d4742] rounded-l-md" />
          <div className="hidden lg:block absolute -left-[8px] top-44 w-[3px] h-12 bg-[#2d4742] rounded-l-md" />
          <div className="hidden lg:block absolute -right-[8px] top-32 w-[3px] h-16 bg-[#2d4742] rounded-r-md" />

          {/* Inner Phone Screen */}
          <div className="w-full h-full bg-[#F1FFF3] lg:rounded-[42px] overflow-hidden flex flex-col relative">
            {/* Dynamic Island Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center">
              <div className="w-28 h-6 bg-black rounded-full flex items-center justify-between px-2.5 shadow-xs transition-all hover:w-36 hover:h-7 group cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D09E]/80 animate-pulse" />
                <span className="text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  FinWise
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0068FF]/80" />
              </div>
            </div>

            {/* iOS Status Bar */}
            <StatusBar />

            {/* Active Screen Content (Scrollable) */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
              {children}
            </div>

            {/* Persistent Bottom Nav Bar */}
            <BottomNavBar activeTab={activeTab} onSelectTab={onSelectTab} />

            {/* iOS Home Indicator Bar */}
            <div className="w-full pb-1 pt-0.5 bg-[#DFF7E2] flex items-center justify-center select-none">
              <div className="w-32 h-1 bg-[#052224]/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
