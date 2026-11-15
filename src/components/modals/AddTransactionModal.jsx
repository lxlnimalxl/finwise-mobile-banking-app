import React, { useState } from 'react';
import { X, CheckCircle2, DollarSign, Calendar, Tag, FileText } from 'lucide-react';

export default function AddTransactionModal({ isOpen, onClose, onAddSuccess }) {
  const [type, setType] = useState('Expense'); // 'Expense' or 'Saving'
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Travel');
  const [date, setDate] = useState('2026-04-30');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'Travel',
    'Food & Dining',
    'Groceries',
    'Rent & Utilities',
    'Transport',
    'Medicine & Health',
    'Entertainment',
    'Gifts',
    'Savings Goal',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      if (onAddSuccess) {
        onAddSuccess({
          title,
          amount: parseFloat(amount),
          category,
          date,
          type,
          message,
        });
      }
      onClose();
    }, 1200);
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="w-full bg-[#F1FFF3] rounded-t-[32px] p-5 shadow-2xl border-t border-[#00D09E]/30 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#00D09E]/15 mb-3">
          <h2 className="text-base font-extrabold text-[#052224]">
            {type === 'Expense' ? 'Add New Expense' : 'Add to Savings'}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#052224] hover:bg-[#DFF7E2] transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Success message state */}
        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#00D09E] text-white flex items-center justify-center mb-3 shadow-lg shadow-[#00D09E]/30 animate-bounce">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-base font-black text-[#052224]">Transaction Saved!</h3>
            <p className="text-xs text-[#093030]/70 mt-1 font-medium">
              ${amount} for {title} has been logged successfully.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Type Switcher */}
            <div className="bg-[#DFF7E2] rounded-full p-1 flex items-center justify-between">
              {['Expense', 'Saving'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer text-center ${
                    type === t ? 'bg-[#00D09E] text-[#052224] shadow-xs' : 'text-[#093030]/70'
                  }`}
                >
                  {t === 'Expense' ? 'Expense' : 'Savings Deposit'}
                </button>
              ))}
            </div>

            {/* Title Input */}
            <div>
              <label className="text-[11px] font-bold text-[#052224] block mb-1">Expense Title</label>
              <div className="relative flex items-center">
                <FileText size={15} className="absolute left-3 text-[#093030]/50" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Travel deposit, Coffee"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-white rounded-xl py-2 pl-9 pr-3 text-xs font-semibold text-[#052224] border border-[#00D09E]/20 focus:outline-none focus:border-[#00D09E]"
                />
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label className="text-[11px] font-bold text-[#052224] block mb-1">Amount ($)</label>
              <div className="relative flex items-center">
                <DollarSign size={15} className="absolute left-3 text-[#093030]/50" />
                <input
                  type="number"
                  step="0.01"
                  required
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white rounded-xl py-2 pl-9 pr-3 text-xs font-black text-[#052224] border border-[#00D09E]/20 focus:outline-none focus:border-[#00D09E]"
                />
              </div>
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="text-[11px] font-bold text-[#052224] block mb-1">Category</label>
              <div className="relative flex items-center">
                <Tag size={15} className="absolute left-3 text-[#093030]/50" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white rounded-xl py-2 pl-9 pr-3 text-xs font-semibold text-[#052224] border border-[#00D09E]/20 focus:outline-none focus:border-[#00D09E] appearance-none cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Input */}
            <div>
              <label className="text-[11px] font-bold text-[#052224] block mb-1">Date</label>
              <div className="relative flex items-center">
                <Calendar size={15} className="absolute left-3 text-[#093030]/50" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white rounded-xl py-2 pl-9 pr-3 text-xs font-semibold text-[#052224] border border-[#00D09E]/20 focus:outline-none focus:border-[#00D09E]"
                />
              </div>
            </div>

            {/* Note / Message Input */}
            <div>
              <label className="text-[11px] font-bold text-[#052224] block mb-1">Note (Optional)</label>
              <input
                type="text"
                placeholder="Enter description or note"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white rounded-xl py-2 px-3 text-xs font-medium text-[#052224] border border-[#00D09E]/20 focus:outline-none focus:border-[#00D09E]"
              />
            </div>

            {/* Submit Button (Figma Node 7077:771: Save button) */}
            <button
              type="submit"
              className="w-full bg-[#00D09E] hover:bg-[#00b386] text-[#052224] font-black text-xs py-3 rounded-full transition-colors cursor-pointer shadow-sm shadow-[#00D09E]/30 mt-2"
            >
              Save Transaction
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
