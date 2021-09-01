import React from 'react';
import * as yup from 'yup';

//dosya seçimi için boyut ve desteklenen dosya türü ayarı
const FILE_SIZE = 5000000; // 5 MB
const SUPPORTED_FORMATS = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
];

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Adınız 2 harften az olamaz')
    .max(20, 'Adınız 20 harften fazla olamaz.')
    .matches(/^[aA-zZ-wığüşöçĞÜŞÖÇİ\s]+$/, 'Geçersiz Ad.')
    .required('Lütfen Adınızı Giriniz.'),
  lastName: yup
    .string()
    .min(2, 'Soyadınız 2 harften az olamaz')
    .max(20, 'Soyadınız 20 harften fazla olamaz.')
    .matches(/^[aA-zZ-wığüşöçĞÜŞÖÇİ\s]+$/, 'Geçersiz Soy Ad.')
    .required('Lütfen Soyadınızı Giriniz.'),
  age: yup
    .string()

    .matches(/^[0-9]+$/, 'Lütfen yaşınızı rakamla Giriniz')
    .required('Lütfen yaşınızı giriniz'),

  identityNumber: yup
    .string()
    .max(11, 'TC 11 haneli olmalı')
    .test('len', 'Geçersiz Tc No - Çok Kısa', (val) => val.length === 11)
    .matches(/^[0-9]+$/, 'Geçersiz Tc No ! - Rakam Giriniz')
    .test('len', 'Geçersiz TC No', (val) => val.substr(0, 1) !== 0)

    .required('Lütfen TC No Giriniz.'),
  address: yup
    .string()
    .min(5, 'Adres Çok Kısa.')
    .max(200, 'Adres Çok Uzun.')
    .required('Lütfen Adres Giriniz.'),
  reasonOfApp: yup
    .string()
    .min(5, 'Başvuru Nedeni Çok Kısa.')
    .max(200, 'Başvuru Nedeni Çok Uzun.')
    .required('Lütfen Başvuru Nedeni Yazınız.'),
  photosDocs: yup
    .mixed()
    .test(
      'fileSize',
      'dosya çok büyük',
      (value) => !value.length || (value.length && value[0].size <= FILE_SIZE)
    )
    .test(
      'fileFormat',
      'desteklenmeyen dosya türü',
      (value) =>
        !value.length ||
        (value.length && SUPPORTED_FORMATS.includes(value[0].type))
    ),
});
export const LoginSchema = yup.object().shape({
  userName: yup.string().required('Lütfen kullanıcı adınızı giriniz'),
  password: yup.string().required('Lütfen şifrenizi giriniz'),
});
export const CodeSchema = yup.object().shape({
  code: yup.string().required('Lütfen başvuru kodu giriniz'),
});
export const AdminAnswerSchema = yup.object().shape({
  answer: yup.string().required('Lütfen cevap yazınız'),
});
