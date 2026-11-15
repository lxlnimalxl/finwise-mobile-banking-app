import React, { useState } from 'react';
import CatFood from '../../assets/cat-food.svg';
import CatGroceries from '../../assets/cat-groceries.svg';
import CatSaving from '../../assets/cat-saving.svg';
import CatMedicine from '../../assets/cat-medicine.svg';
import CatGift from '../../assets/cat-gift.svg';
import CatTransport from '../../assets/cat-transport.svg';
import CatRent from '../../assets/cat-rent.svg';
import CatEntertainment from '../../assets/cat-entertainment.svg';
import CatSalary from '../../assets/cat-salary.svg';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export default function CategoriesScreen({ onNavigate }) {
  const [selectedCat, setSelectedCat] = useState('Groceries');

  const categories = [
    { name: 'Food', icon: CatFood, spent: '$320.50', limit: '$600.00', pct: 53 },
    { name: 'Groceries', icon: CatGroceries, spent: '$450.00', limit: '$800.00', pct: 56 },
    { name: 'Savings', icon: CatSaving, spent: '$1,200.00', limit: '$2,000.00', pct: 60 },
    { name: 'Medicine', icon: CatMedicine, spent: '$85.00', limit: '$200.00', pct: 42 },
    { name: 'Gifts', icon: CatGift, spent: '$140.00', limit: '$300.00', pct: 46 },
    { name: 'Transport', icon: CatTransport, spent: '$115.00', limit: '$250.00', pct: 46 },
    { name: 'Rent', icon: CatRent, spent: '$674.40', limit: '$700.00', pct: 96 },
    { name: 'Entertainment', icon: CatEntertainment, spent: '$180.00', limit: '$350.00', pct: 51 },
    { name: 'More', icon: CatSalary, spent: '$250.00', limit: '$500.00', pct: 50 },
  ];

  const currentCategory = categories.find((c) => c.name === selectedCat) || categories[1];

  return (
    <div className="flex-1 flex flex-col bg-[#F1FFF3] overflow-y-auto no-scrollbar pb-6">
      {/* Header */}
      <div className="px-6 pt-2 pb-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-[#052224] tracking-tight">Categories</h1>
          <p className="text-xs font-semibold text-[#093030]/70">Budget Allocation & Limits</p>
        </div>
      </div>

      {/* Top Balance Summary Banner (Figma Node 7035:4) */}
      <div className="px-5 mb-5">
        <div className="bg-[#00D09E] rounded-[28px] p-5 text-[#052224] shadow-md shadow-[#00D09E]/20 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[11px] font-bold text-[#093030]">Total Monthly Budget</span>
              <h2 className="text-2xl font-black text-[#F1FFF3] drop-shadow-xs">$20,000.00</h2>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-bold text-[#093030]">Spent so far</span>
              <h3 className="text-xl font-black text-[#0068FF]">-$7,783.00</h3>
            </div>
          </div>

          <div className="pt-2 border-t border-[#052224]/15">
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className="text-[#052224] text-[11px] font-bold">30% of total limit consumed</span>
              <span className="text-[11px] font-black bg-white/30 px-2 py-0.5 rounded-full">
                $12,217.00 remaining
              </span>
            </div>
            <div className="w-full h-2.5 bg-[#052224]/20 rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-[#052224] rounded-full" style={{ width: '38%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* 3x3 Category Grid (Figma Node 7035:4) */}
      <div className="px-5 mb-5">
        <h3 className="text-sm font-bold text-[#052224] mb-3">Select Category</h3>
        <div className="grid grid-cols-3 gap-2.5">
          {categories.map((cat) => {
            const isSelected = selectedCat === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCat(cat.name)}
                className={`rounded-2xl p-3 flex flex-col items-center justify-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-[#00D09E] shadow-sm scale-102 ring-2 ring-[#00D09E]/30'
                    : 'bg-white/80 border-[#00D09E]/15 hover:bg-white hover:border-[#00D09E]/50 shadow-2xs'
                }`}
              >
                <img src={cat.icon} alt={cat.name} className="w-12 h-12 object-contain mb-1.5 rounded-xl" />
                <span className="text-xs font-bold text-[#052224] truncate w-full text-center">
                  {cat.name}
                </span>
                <span className="text-[10px] font-semibold text-[#093030]/70 mt-0.5">
                  {cat.spent}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Category Detail Card */}
      <div className="px-5">
        <div className="bg-white rounded-2xl p-4 border border-[#00D09E]/20 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img src={currentCategory.icon} alt={currentCategory.name} className="w-10 h-10 object-contain rounded-xl" />
              <div>
                <h4 className="text-xs font-black text-[#052224]">{currentCategory.name} Category</h4>
                <p className="text-[10px] text-[#093030]/70 font-semibold">
                  Budget: {currentCategory.spent} / {currentCategory.limit}
                </p>
              </div>
            </div>

            <span className="text-xs font-black text-[#0068FF] bg-[#DFF7E2] px-2.5 py-1 rounded-full">
              {currentCategory.pct}% used
            </span>
          </div>

          <div className="w-full h-2.5 bg-[#DFF7E2] rounded-full overflow-hidden p-0.5 mb-3">
            <div
              className="h-full bg-[#00D09E] rounded-full transition-all duration-500"
              style={{ width: `${currentCategory.pct}%` }}
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#00D09E]/10">
            <button
              onClick={() => onNavigate('transactions')}
              className="text-xs font-bold text-[#0068FF] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View transactions in {currentCategory.name}</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
