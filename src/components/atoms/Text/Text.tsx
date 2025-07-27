import React from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'metric';
type TextColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'blue' | 'purple';

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}

const getVariantStyles = (variant: TextVariant) => {
  switch (variant) {
    case 'h1':
      return { fontSize: '32px', fontWeight: 'bold' };
    case 'h2':
      return { fontSize: '20px', fontWeight: '600' };
    case 'h3':
      return { fontSize: '18px', fontWeight: '600' };
    case 'body':
      return { fontSize: '14px' };
    case 'caption':
      return { fontSize: '12px' };
    case 'metric':
      return { fontSize: '24px', fontWeight: 'bold' };
    default:
      return { fontSize: '14px' };
  }
};

const getColorStyles = (color: TextColor) => {
  switch (color) {
    case 'primary':
      return { color: 'white' };
    case 'secondary':
      return { color: '#9CA3AF' };
    case 'success':
      return { color: '#10B981' };
    case 'warning':
      return { color: '#F59E0B' };
    case 'error':
      return { color: '#EF4444' };
    case 'blue':
      return { color: '#3B82F6' };
    case 'purple':
      return { color: '#8B5CF6' };
    default:
      return { color: 'white' };
  }
};

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'primary',
  weight,
  align = 'left',
  style
}) => {
  const variantStyles = getVariantStyles(variant);
  const colorStyles = getColorStyles(color);
  const fontWeight = weight || variantStyles.fontWeight;

  return (
    <span
      style={{
        ...variantStyles,
        ...colorStyles,
        fontWeight,
        textAlign: align,
        display: align !== 'left' ? 'block' : 'inline',
        ...style
      }}
    >
      {children}
    </span>
  );
};
