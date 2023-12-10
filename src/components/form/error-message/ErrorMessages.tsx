import React from 'react';
import { ErrorMessage } from 'formik';

interface ErrorMessagesProps {
  /** имя поля валидации */
  field: string;
}

/**
 * Компонент ошибки ввода значения в поле формы
 */
export const ErrorMessages = ({ field }: ErrorMessagesProps): React.ReactElement => {
  return (
    <div className="error">
      <ErrorMessage component="span" name={field} />
    </div>
  );
};
