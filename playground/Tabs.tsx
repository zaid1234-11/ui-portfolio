import React, { useState, useRef, useEffect } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveId?: string;
  ariaLabel?: string;
}

export default function Tabs({ items, defaultActiveId, ariaLabel }: TabsProps) {
  const activeId = defaultActiveId || (items.length > 0 ? items[0].id : '');
  const [activeTabId, setActiveTabId] = useState<string>(activeId);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    let nextIndex = index;
    const maxIndex = items.length - 1;

    switch (e.key) {
      case 'ArrowRight':
        nextIndex = index === maxIndex ? 0 : index + 1;
        break;
      case 'ArrowLeft':
        nextIndex = index === 0 ? maxIndex : index - 1;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = maxIndex;
        break;
      default:
        return; // Let other keys propagate
    }

    e.preventDefault();
    const nextTabId = items[nextIndex].id;
    setActiveTabId(nextTabId);
    
    // Set focus to the new active tab
    tabRefs.current[nextTabId]?.focus();
  };

  return (
    <div style={{ width: '100%', border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden' }}>
      {/* TabList Container */}
      <div
        role="tablist"
        aria-label={ariaLabel}
        style={{
          display: 'flex',
          borderBottom: '1px solid #ddd',
          backgroundColor: '#f9f9f9',
        }}
      >
        {items.map((item, index) => {
          const isSelected = item.id === activeTabId;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el;
              }}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTabId(item.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                padding: '12px 16px',
                border: 'none',
                background: isSelected ? '#fff' : 'transparent',
                borderBottom: isSelected ? '2px solid #2563eb' : 'none',
                cursor: 'pointer',
                fontWeight: isSelected ? 600 : 400,
                color: isSelected ? '#2563eb' : '#555',
                outline: 'none',
                marginRight: '2px',
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* TabPanels */}
      {items.map((item) => {
        const isSelected = item.id === activeTabId;
        return (
          <div
            key={item.id}
            role="tabpanel"
            id={`panel-${item.id}`}
            aria-labelledby={`tab-${item.id}`}
            tabIndex={0}
            hidden={!isSelected}
            style={{
              padding: '20px',
              backgroundColor: '#fff',
              display: isSelected ? 'block' : 'none',
              outline: 'none',
            }}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}
