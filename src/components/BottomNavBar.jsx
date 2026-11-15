import React from 'react';
import TabHome from '../assets/tab-home.svg';
import TabAnalysis from '../assets/tab-analysis.svg';
import TabTransaction from '../assets/tab-transaction.svg';
import TabCategory from '../assets/tab-category.svg';
import TabProfile from '../assets/tab-profile.svg';

export default function BottomNavBar({ activeTab, onSelectTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: TabHome },
    { id: 'analysis', label: 'Analysis', icon: TabAnalysis },
    { id: 'transactions', label: 'Transactions', icon: TabTransaction },
    { id: 'category', label: 'Category', icon: TabCategory },
    { id: 'profile', label: 'Profile', icon: TabProfile },
  ];

  return (
    <nav className="w-full bg-[#DFF7E2] px-3 py-2 flex items-center justify-between border-t border-[#00D09E]/20 shadow-[0_-4px_25px_rgba(0,208,158,0.12)] z-30 select-none">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
              isActive ? 'scale-105' : 'opacity-70 hover:opacity-100 hover:scale-102'
            }`}
          >
            <div className={`w-12 h-11 rounded-2xl flex items-center justify-center transition-colors ${
              isActive ? 'bg-[#00D09E] shadow-sm shadow-[#00D09E]/40' : 'bg-transparent'
            }`}>
              <img
                src={tab.icon}
                alt={tab.label}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className={`text-[10px] mt-0.5 font-medium tracking-tight ${
              isActive ? 'text-[#052224] font-bold' : 'text-[#093030]'
            }`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
