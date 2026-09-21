import React, { useState } from 'react';
import ModalDialog from './ModalDialog';
import Tabs from './Tabs';
import Disclosure from './Disclosure';

export default function PlaygroundDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabItems = [
    {
      id: 'html',
      label: 'HTML5',
      content: (
        <div>
          <h3 style={{ margin: '0 0 8px 0' }}>HyperText Markup Language</h3>
          <p style={{ margin: 0 }}>
            HTML is the standard markup language for creating Web pages. It describes the structure of a Web page semantically.
          </p>
        </div>
      ),
    },
    {
      id: 'css',
      label: 'CSS3',
      content: (
        <div>
          <h3 style={{ margin: '0 0 8px 0' }}>Cascading Style Sheets</h3>
          <p style={{ margin: 0 }}>
            CSS is a style sheet language used for describing the presentation of a document written in a markup language.
          </p>
        </div>
      ),
    },
    {
      id: 'js',
      label: 'JavaScript',
      content: (
        <div>
          <h3 style={{ margin: '0 0 8px 0' }}>ECMAScript</h3>
          <p style={{ margin: 0 }}>
            JavaScript is a programming language that conforms to the ECMAScript specification, enabling dynamic client-side scripting.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#111' }}>A11y Component Playground</h1>
      
      {/* 1. Modal Dialog section */}
      <section style={{ margin: '30px 0' }}>
        <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>1. Modal Dialog (W3C Pattern)</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: '10px 16px',
            backgroundColor: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Open Modal Dialog
        </button>

        <ModalDialog
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Interactive Dialog Box"
          description="This dialog traps keyboard focus, listens for the Escape key, and returns focus to the trigger upon closing."
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: 0 }}>
              Try pressing <kbd style={{ background: '#eee', padding: '2px 4px', borderRadius: '3px' }}>Tab</kbd> or{' '}
              <kbd style={{ background: '#eee', padding: '2px 4px', borderRadius: '3px' }}>Shift + Tab</kbd> to navigate focus.
              The focus will wrap between this button, input field, and the close button.
            </p>
            <input
              type="text"
              placeholder="Focusable input field"
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                padding: '8px 12px',
                backgroundColor: '#dc2626',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Action Button
            </button>
          </div>
        </ModalDialog>
      </section>

      {/* 2. Tabs section */}
      <section style={{ margin: '30px 0' }}>
        <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>2. Tabs Widget (W3C Pattern)</h2>
        <Tabs items={tabItems} ariaLabel="Web technologies comparison tabs" />
      </section>

      {/* 3. Disclosure section */}
      <section style={{ margin: '30px 0' }}>
        <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>3. Disclosure Widget (W3C Pattern)</h2>
        <Disclosure title="What is Web Accessibility?">
          Web accessibility (a11y) means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. Specifically, people can perceive, understand, navigate, and interact with the Web.
        </Disclosure>
        <Disclosure title="Who dictates these standards?">
          The World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI) publishes guidelines like the Web Content Accessibility Guidelines (WCAG) and the ARIA Authoring Practices Guide (APG).
        </Disclosure>
      </section>
    </div>
  );
}
