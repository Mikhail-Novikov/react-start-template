import React from 'react';
import './layout.css';

interface LayoutBoxProps {
  /** Контент */
  children: React.ReactElement;
}

/**
 * Компонент LayoutBox с рамкой и отступами
 */
export const Box = ({ children }: LayoutBoxProps) => <div className="box">{children}</div>;
