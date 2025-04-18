'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, Search } from 'lucide-react';

import type { SelectDropdownProps } from './interface';

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  isLoading = false,
  className = '',
  classNameSelect = '',
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  searchInputProps,
  ...restProps // All other HTML div attributes
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = options.find(opt => opt.value === value);
  const selectedLabel = selected?.label || '';

  // Filter options based on search query
  const filteredOptions = query
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(query.toLowerCase())
      )
    : options;

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  const handleOptionSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
  };

  const toggleDropdown = () => {
    if (!disabled && !isLoading) {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <div
      className={`relative w-full ${className}`}
      ref={containerRef}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative h-full">
        <button
          type="button"
          disabled={disabled || isLoading}
          onClick={toggleDropdown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className={`
            w-full border border-gray-300 bg-white px-4 py-2 pr-10 text-left text-sm text-gray-900 shadow-sm
            outline-none disabled:cursor-not-allowed disabled:opacity-60 ${classNameSelect}
          `}
        >
          {selectedLabel || (isLoading ? 'Loading...' : placeholder)}
        </button>

        {/* Clear button */}
        {value && (
          <button
            type="button"
            onClick={clearSelection}
            aria-label="Clear selection"
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 z-10"
          >
            <X size={16} />
          </button>
        )}

        <ChevronDown
          className={`absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={18}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-20 mt-1 w-full border border-gray-300 bg-white shadow-lg text-sm">
          {/* Search input */}
          <div className="p-2 border-b relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full border border-gray-200 rounded px-3 py-2 pl-8 text-sm outline-none"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...searchInputProps}
            />
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Options list */}
          <ul
            ref={listRef}
            className="max-h-60 overflow-auto py-1"
            role="listbox"
            aria-labelledby={label || undefined}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map(opt => (
                <li
                  key={opt.value}
                  onClick={() => handleOptionSelect(opt.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOptionSelect(opt.value);
                    }
                  }}
                  tabIndex={0}
                  role="option"
                  aria-selected={opt.value === value}
                  className={`
                    cursor-pointer px-4 py-2 hover:bg-gray-100 focus:bg-blue-100 focus:outline-none
                    ${opt.value === value ? 'bg-blue-50 font-medium' : ''}
                  `}
                >
                  {opt.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No options available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
