import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Имя обязательно к заполнению'),
  document_item: Yup.string().min(10).required('Введите номер документ'),
});

export const validateEmail = (value: string): string => {
  if (!value) {
    return 'При регистрации, телефон или почта, обязательно к заполнению';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Формат электронной почты должен быть mail@mail.ru';
  }
};

export const validatePhone = (value: string): string => {
  if (!value) {
    return 'При регистрации, телефон или почта, обязательно к заполнению';
  } else if (value.length < 10) {
    return 'Номер телефона должен быть не менее 10 цифр';
  }
};

export const validatePassword = (value: string): string => {
  if (!value) {
    return 'Введите пароль';
  } else if (value.length < 6) {
    return 'Пароль должен быть не менее 6 символов';
  }
};

export const validateText = (value: string): string => {
  if (!value) return 'Заполните поле';
};

export const validateNumber = (value: number): string => {
  if (!value) {
    return 'Неверно заполненое поле';
  } else if (value < 0) {
    return 'Число не может быть меньше нуля';
  }
};
