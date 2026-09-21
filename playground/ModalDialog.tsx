import React, { useEffect, useRef } from 'react';

interface ModalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function ModalDialog({
  isOpen,
  onClose,
  title,
  description,
  children,
}: ModalDialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Store the active element before opening the modal to restore it on close
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
    }
  }, [isOpen]);

  // Focus management and trapping
  useEffect(() => {
    if (!isOpen) return;

    // Focus the dialog box or the first focusable element inside it
    const focusableElements = dialogRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    } else {
      dialogRef.current?.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!dialogRef.current) return;

        const list = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (list.length === 0) {
          e.preventDefault();
          return;
        }

        const first = list[0] as HTMLElement;
        const last = list[list.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab: Wrap from first to last
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          // Tab: Wrap from last to first
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Disable background scrolling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
      
      // Restore focus to the trigger
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  // Handle clicking on the backdrop overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const titleId = 'modal-title';
  const descId = description ? 'modal-description' : undefined;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        tabIndex={-1}
        style={{
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          outline: 'none',
        }}
      >
        <div style={{ display: 'flex', justifycontent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
          <h2 id={titleId} style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, color: '#111' }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.25rem',
              padding: '4px',
              lineHeight: 1,
            }}
          >
            &times;
          </button>
        </div>
        {description && (
          <p id={descId} style={{ marginTop: 0, marginBottom: '16px', fontSize: '0.875rem', color: '#555' }}>
            {description}
          </p>
        )}
        <div style={{ color: '#333' }}>{children}</div>
      </div>
    </div>
  );
}
