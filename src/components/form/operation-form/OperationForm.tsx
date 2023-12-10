import React from 'react';
import './../form.css';
import { Field, Form, Formik } from 'formik';
import { ErrorMessages } from '../error-message';
import { validateNumber, validateText } from '../ValidationShema';
import { Button } from './../../button';

/**
 * Компонент формы добавления операции дохода/расхода
 */
export const OperationForm = () => (
  <Formik
    initialValues={{
      title: '',
      category: '',
      description: '',
      amount: 0,
    }}
    onSubmit={(values, actions) => {
      console.log(values);
      actions.resetForm();
    }}
  >
    <Form className="">
      <div className="mb-32">
        <label htmlFor="title">*Название операции</label>
        <Field id="title" name="title" type="text" validate={validateText} />
        <ErrorMessages field="title" />
      </div>

      <div className="mb-16">
        <label htmlFor="category">*Категория</label>
        <Field id="category" name="category" type="text" validate={validateText} />
        <ErrorMessages field="category" />
      </div>

      <div className="mb-16">
        <label htmlFor="description">Описание</label>
        <textarea id="description" name="description" />
      </div>

      <div className="mb-16">
        <label htmlFor="amount">*Сумма</label>
        <Field id="amount" name="amount" type="number" validate={validateNumber} />
        <ErrorMessages field="amount" />
      </div>

      <div className="mt-16">
        <Button label="Сохранить" primary type="submit" />
      </div>
    </Form>
  </Formik>
);
