import React, { Dispatch, useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Layout } from './components/layout/Layout';
import { Budgets } from './components/budget';
import { useTranslation } from 'react-i18next';
import { CreateRandomOperation } from './homeworks/ts1/3_write';
import { createPortal } from 'react-dom';
import { Modal } from './components/modal';
import { BottomBtn } from './components/control';
import { TTableList } from './components/budget/models';

export enum Themes {
  dark = 'dark',
  light = 'light',
}

type ThemeContext = {
  setThemeState: Dispatch<React.SetStateAction<Themes>>;
  themesName: string;
};

type TNewOerations = {
  id: number;
  name: string;
  amount: string;
  desc: string;
  category: string;
};

export const Context = React.createContext<ThemeContext>({
  setThemeState: () => Themes,
  themesName: 'light',
});

const data: TTableList[] = [
  { id: 1, name: ['Зарплата', 'Основное', 'Аванс на работе', '2000'] },
  { id: 2, name: ['Подработка', 'Временное', 'Продал колёса', '300'] },
];

const App = () => {
  const [operations, setOperations] = useState<any>();

  /** обработчик получения операции */
  const getOperation = async () => {
    const operation = await CreateRandomOperation(new Date());
    const { id, name, amount, desc, category } = operation as TNewOerations;
    return { id, name: [name, category, desc, amount] };
  };

  /** инициализация первой операции */
  if (operations === undefined) {
    getOperation().then((o) => setOperations(o));
  }

  /** ручное добавление в таблицу оперции */
  const handleAddList = async (): Promise<void> => {
    setOperations(await getOperation());
    data.push(operations);
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
