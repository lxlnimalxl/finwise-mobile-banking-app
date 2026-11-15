import React, { useState } from 'react';
import { Search, Plus, Filter, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import CatSalary from '../../assets/cat-salary.svg';
import CatGroceries from '../../assets/cat-groceries.svg';
import CatRent from '../../assets/cat-rent.svg';
import CatFood from '../../assets/cat-food.svg';
import CatTransport from '../../assets/cat-transport.svg';
import CatGift from '../../assets/cat-gift.svg';
import CatEntertainment from '../../assets/cat-entertainment.svg';

export default function TransactionsScreen({ onOpenAdd }) {
  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const transactionsData = [
    {
      month: 'April',
      items: [
        {
          id: 1,
          title: 'Salary',
          category: 'Monthly Salary',
          date: '18:27 - April 30',
          amount: 4000.0,
          isIncome: true,
          icon: CatSalary,
        },
        {
          id: 2,
          title: 'Groceries',
          category: 'Pantry & Market',
          date: '17:00 - April 24',
          amount: 100.0,
          isIncome: false,
          icon: CatGroceries,
        },
        {
          id: 3,
          title: 'Rent',
          category: 'Apartment Rent',
          date: '8:30 - April 15',
          amount: 674.4,
          isIncome: false,
          icon: CatRent,
        },
        {
          id: 4,
          title: 'Transport',
          category: 'Fuel & Commute',
          date: '9:30 - April 08',
          amount: 4.13,
          isIncome: false,
          icon: CatTransport,
        },
      ],
    },
    {
      month: 'March',
      items: [
        {
          id: 5,
          title: 'Food & Dinner',
          category: 'Dinner with friends',
          date: '19:30 - March 31',
          amount: 70.4,
          isIncome: false,
          icon: CatFood,
        },
        {
          id: 6,
          title: 'Salary',
          category: 'Monthly Bonus',
          date: '18:39 - March 31',
          amount: 4000.0,
          isIncome: true,
          icon: CatSalary,
        },
        {
          id: 7,
          title: 'Gift',
          category: 'Family Gift',
          date: '14:15 - March 22',
          amount: 45.0,
          isIncome: false,
          icon: CatGift,
        },
        {
          id: 8,
          title: 'Entertainment',
          category: 'Cinema & Movie',
          date: '20:00 - March 18',
          amount: 28.5,
          isIncome: false,
          icon: CatEntertainment,
        },
      ],
    },
  ];

  // Filter items
  const filteredGroups = transactionsData
    .map((group) => {
      const items = group.items.filter((item) => {
        const matchesType =
          filterType === 'All' ||
          (filterType === 'Income' && item.isIncome) ||
          (filterType === 'Expense' && !item.isIncome);
        const matchesSearch =
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
      });
      return { month: group.month, items };
    })
    .filter((g) => g.items.length > 0);

  return (
    <div className="flex-1 flex flex-col bg-[#F1FFF3] overflow-y-auto no-scrollbar pb-6 relative">
      {/* Header */}
      <div className="px-6 pt-2 pb-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-[#052224] tracking-tight">Transactions</h1>
          <p className="text-xs font-semibold text-[#093030]/70">History & Expense Log</p>
        </div>

        <button
          onClick={onOpenAdd}
          className="flex items-center gap-1.5 bg-[#00D09E] text-[#052224] font-extrabold text-xs px-3.5 py-2 rounded-full shadow-xs hover:bg-[#00b386] transition-all cursor-pointer"
        >
          <Plus size={15} strokeWidth={3} />
          <span>Add</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-5 mb-3.5">
        <div className="relative flex items-center">
          <Search size={16} className="absolute left-3.5 text-[#093030]/60 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search transactions..."
            className="w-full bg-white rounded-2xl py-2.5 pl-10 pr-4 text-xs font-medium text-[#052224] placeholder:text-[#093030]/40 border border-[#00D09E]/20 focus:outline-none focus:border-[#00D09E] shadow-2xs"
          />
        </div>
      </div>

      {/* Segmented Filter Buttons */}
      <div className="px-5 mb-4">
        <div className="bg-[#DFF7E2] rounded-full p-1 flex items-center justify-between shadow-xs">
          {['All', 'Income', 'Expense'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer text-center ${
                filterType === type
                  ? 'bg-[#00D09E] text-[#052224] shadow-xs scale-101'
                  : 'text-[#093030]/80 hover:text-[#052224]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions List Grouped by Month */}
      <div className="px-5 flex-1 space-y-4">
        {filteredGroups.map((group) => (
          <div key={group.month}>
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-black text-[#052224] uppercase tracking-wider">
                {group.month}
              </span>
              <span className="text-[10px] font-bold text-[#093030]/60">
                {group.items.length} records
              </span>
            </div>

            <div className="space-y-2">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3 flex items-center justify-between border border-[#00D09E]/15 hover:border-[#00D09E]/40 transition-all shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt={item.title} className="w-11 h-11 object-contain rounded-xl" />
                    <div>
                      <h4 className="text-xs font-bold text-[#052224]">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-medium text-[#093030]/70">{item.category}</span>
                        <span className="text-[9px] text-[#0068FF] font-semibold">{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-xs font-extrabold ${
                        item.isIncome ? 'text-[#00D09E]' : 'text-[#0068FF]'
                      }`}
                    >
                      {item.isIncome ? '+' : '-'}${item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <div className="py-12 text-center text-xs font-semibold text-[#093030]/60">
            No transactions found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
