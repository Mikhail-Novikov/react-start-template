import React from 'react';
import './style.css';
import { t } from 'i18next';

/**
 *  Заголовки столбцов таблицы
 */
const BudgetTableThead = () => (
  <>
    <colgroup>
      <col style={{ width: '15%' }} />
      <col style={{ width: '15%' }} />
      <col />
      <col style={{ width: '160px' }} />
      <col style={{ width: '160px' }} />
    </colgroup>
    <thead>
      <tr>
        <th>{t('table_column_name')}</th>
        <th>{t('table_column_category')}</th>
        <th>{t('table_column_description')}</th>
        <th>{t('table_column_amount')}</th>
        <th />
      </tr>
    </thead>
  </>
);

export default BudgetTableThead;
