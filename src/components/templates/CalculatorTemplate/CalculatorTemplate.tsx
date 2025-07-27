import React from 'react';

interface CalculatorTemplateProps {
  header: React.ReactNode;
  inputSection: React.ReactNode;
  resultsSection: React.ReactNode;
  footer: React.ReactNode;
}

export const CalculatorTemplate: React.FC<CalculatorTemplateProps> = ({
  header,
  inputSection,
  resultsSection,
  footer
}) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#111827', 
      color: 'white', 
      padding: '24px' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          {header}
        </div>

        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '32px' 
        }}>
          {/* Input Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {inputSection}
          </div>

          {/* Results Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {resultsSection}
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          marginTop: '32px', 
          textAlign: 'center', 
          color: '#6B7280', 
          fontSize: '14px' 
        }}>
          {footer}
        </div>
      </div>
    </div>
  );
};
