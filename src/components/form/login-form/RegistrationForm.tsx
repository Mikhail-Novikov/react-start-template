import React, { useState } from 'react';
import './../form.css';
import { Field, Form, Formik } from 'formik';
import { ErrorMessages } from '../error-message';
import { SignupSchema, validateEmail, validatePassword, validatePhone } from '../ValidationShema';

/**
 * Компонент формы регистрации
 */
export const RegistrationForm = () => {
  const [document_item, setDocument] = useState('passport');
  const [infoMethod, setInfoMethod] = useState<string>('phone');

  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
        age: '',
        document_item: '',
        document_type: 'passport',
        num_phone: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <ul className="flex-row wrap gap-16">
          <li className="pr-32">
            <label htmlFor="name">*Имя</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessages field="name" />
          </li>
          <li>
            <label htmlFor="password">*Пароль</label>
            <Field id="password" name="password" type="password" validate={validatePassword} />
            <ErrorMessages field="password" />
          </li>
          <li className="pr-32">
            <label htmlFor="document_type">*Документ</label>
            <Field
              component="select"
              id="document_type"
              name="document"
              onChange={(event: { target: { value: React.SetStateAction<string> } }) => setDocument(event.target.value)}
            >
              <option value="passport">Паспорт</option>
              <option value="card">Удостоверение</option>
            </Field>
          </li>
          <li>
            <label htmlFor="age">Возраст</label>
            <Field id="age" name="age" type="number" />
          </li>
        </ul>

        <Field
          className="mt-16"
          id="document_item"
          name="document_item"
          type="text"
          placeholder={document_item === 'passport' ? 'xxxx-xxxxxx' : 'Введите номер документа'}
        />
        <ErrorMessages field="document_item" />

        <div className="mb-32 mt-32">
          <label htmlFor="num_phone">*Для связи</label>
          {infoMethod === 'phone' ? (
            <>
              <Field
                id="num_phone"
                type="text"
                name="num_phone"
                placeholder="+7 111 111-11-11"
                validate={validatePhone}
              />
              <ErrorMessages field="num_phone" />
            </>
          ) : (
            <>
              <Field id="mail" type="text" name="email" placeholder="mail@mail.ru" validate={validateEmail} />
              <ErrorMessages field="email" />
            </>
          )}
          <div className="flex-row align-items-center gap-16 mt-16">
            <div className="flex-row align-items-center">
              <Field
                id="infoMethodPhone"
                type="radio"
                name="contact"
                value="phone"
                onChange={() => setInfoMethod('phone')}
                checked={infoMethod === 'phone'}
              />
              <label className="mb-0" htmlFor="infoMethodPhone">
                Phone
              </label>
            </div>

            <div className="flex-row align-items-center">
              <Field
                id="infoMethodPhoneMail"
                type="radio"
                name="contact"
                value="mail"
                onChange={() => setInfoMethod('mail')}
                checked={infoMethod === 'mail'}
              />
              <label className="mb-0" htmlFor="infoMethodPhoneMail">
                Mail
              </label>
            </div>
          </div>
        </div>

        <hr />
        <div className="txt-right">
          <button type="submit">Отправить</button>
        </div>
      </Form>
    </Formik>
  );
};
