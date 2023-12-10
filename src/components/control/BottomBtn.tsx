import React from 'react';
import { Button } from '../button';

interface BottomBtnProps {
  /** Обработчик клика на кнопку показать ещё */
  handleClick: () => void;
  /** Открытие модального окна */
  setIsOpenModal: (e: boolean) => void;
  /** Признак  открытия модального окна */
  isOpenModal: boolean;
}

/**
 * Компонент кнопок добавления операции и показать ещё
 */
export const BottomBtn = ({ setIsOpenModal, isOpenModal, handleClick }: BottomBtnProps): React.ReactElement => (
  <ul className="flex-row jce mt-24">
    <li className="mr-16">
      <Button label={'Добавить операцию'} onClick={() => setIsOpenModal(!isOpenModal)} />
    </li>
    <li>
      <Button label={'Показать ещё'} onClick={handleClick} />
    </li>
  </ul>
);
