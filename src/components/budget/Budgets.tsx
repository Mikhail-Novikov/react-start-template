import React from 'react';
import './../table/style.css';
import { TBudgetType, TTableList } from './models';
import Table from '../table/BudgetTable';

interface BudgetProps {
  data: TTableList[];
  type: keyof typeof TBudgetType;
}

/**
 * Компонент краткого отображения операции
 */
export const Budgets = ({ data, type }: BudgetProps) => (
  <>
    <div className="d-block table-title title-border mb-24">{TBudgetType[type]}</div>
    <Table data={data} />
  </>
);
