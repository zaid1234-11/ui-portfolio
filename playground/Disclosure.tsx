import React, { useState } from 'react';

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function Disclosure({ title, children, defaultExpanded = false }: DisclosureProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const panelId = `disclosure-panel-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '6px', margin: '8px 0', overflow: 'hidden' }}>
      {/* Trigger Button */}
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={() => setIsExpanded(prev => !prev)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          backgroundColor: '#f9f9f9',
          border: 'none',
          borderBottom: isExpanded ? '1px solid #ddd' : 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '1rem',
          fontWeight: 600,
          color: '#333',
          outline: 'none',
        }}
      >
        <span>{title}</span>
        <span
          style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            display: 'inline-block',
          }}
        >
          ▼
        </span>
      </button>

      {/* Controlled Content Panel */}
      <div
        id={panelId}
        hidden={!isExpanded}
        style={{
          padding: '16px',
          backgroundColor: '#fff',
          display: isExpanded ? 'block' : 'none',
          color: '#555',
          fontSize: '0.95rem',
          lineHeight: '1.5',
        }}
      >
        {children}
      </div>
    </div>
  );
}
