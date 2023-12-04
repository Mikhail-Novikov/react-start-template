import React, { Dispatch, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Layout } from './components/layout/Layout';
import { Budgets } from './components/budget';
import { useTranslation } from 'react-i18next';
import { CreateRandomOperation } from './homeworks/ts1/3_write';
import { createPortal } from 'react-dom';
import { Modal } from './components/modal';
import { BottomBtn } from './components/control';

export enum Themes {
  dark = 'dark',
  light = 'light',
}

type ThemeContext = {
  setThemeState: Dispatch<React.SetStateAction<Themes>>;
  themesName: string;
};

type TNewOerations = {
  name: string;
  amount: string;
  desc: string;
  category: string;
};

export const Context = React.createContext<ThemeContext>({
  setThemeState: () => Themes,
  themesName: 'light',
});

const data = [
  { id: 1, name: ['Зарплата', 'Основное', 'Аванс на работе', '2000'] },
  { id: 2, name: ['Подработка', 'Временное', 'Продал колёса', '300'] },
];

const App = () => {
  const [operations, setOperations] = useState<any>();
  const [idOperations, setIdOperations] = useState<number>(1);

  /** обработчик получения операции */
  const getOperation = async (id: number) => {
    const listOperation = CreateRandomOperation(id);
    setOperations(await listOperation);

    setIdOperations(idOperations + 1);
  };

  /** получаем операцию */
  if (operations === undefined) {
    getOperation(1);
  }

  /** формируем новую операцию { id, name:[] } */
  const newOperation = (el: TNewOerations, id: number) => {
    const { name, amount, desc, category } = el;
    return { id, name: [name, category, desc, amount] };
  };

  /** ручное добавление в таблицу оперции */
  const handleAddList = () => {
    getOperation(idOperations);
    return data.push(newOperation(operations, idOperations));
  };

  const [themesName, setThemeState] = React.useState<Themes>(Themes.light);
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  return (
    <Context.Provider value={{ setThemeState, themesName }}>
      <Header menuList={[{ name: t('menu_item_income') }, { name: t('menu_item_coast') }]} />

      <Layout className="mt-24">
        <>
          <Budgets type="Income" data={data} />
          <BottomBtn handleClick={handleAddList} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
        </>
      </Layout>

      {createPortal(<Modal content={'Form'} isOpen={isOpenModal} setIsOpen={setIsOpenModal} />, document.body)}
    </Context.Provider>
  );
};

export default App;
