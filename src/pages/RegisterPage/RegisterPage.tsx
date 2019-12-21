import React, { useEffect, useState } from 'react';
import { Footer } from 'components';
import { Card, Button } from 'antd';
import './RegisterPage.scss';
import { Formik } from 'formik';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { registerRequest } from 'store/actions/registerActions';
import { useHistory } from 'react-router';
import { LOGIN_SUCCESS, LOGIN_ERROR } from 'store/actionTypes';
import { isAuth } from 'configs/isAuth';
import api from 'Api/api';

const RegisterSchemaValid = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'نام بیشتر از ۲ کاراکتر باشد')
    .max(20, 'نام کمتر از ۲۰ کاراکتر باشد')
    .required('لطفا نام خود را وارد کنید'),
  family: Yup.string()
    .trim()
    .min(3, 'نام خانوادگی بیشتر از ۳ کاراکتر باشد')
    .max(30, 'نام خانوادگی کمتر از ۳۰ کاراکتر باشد')
    .required('لطفا نام خانوادگی خود را وارد کنید'),
  password: Yup.string()
    .trim()
    .required('لطفا رمز عبور خود را وارد کنید')
    .trim('لطفا رمز عبور خود را وارد کنید'),
  email: Yup.string()
    .trim()
    .email('ایمیل نامعتبر')
    .required('لطفا ایمیل خود را وارد کنید'),
  companyName: Yup.string()
    .trim()
    .required('لطفا نام شرکت خود را وارد کنید'),
  // file: Yup.mixed().required('لطفا فایل مدنظر خود را اضافه کنید'),
});

export const RegisterPage: React.FC = () => {
  let history = useHistory();
  const loadingState = useSelector((state: any) => state.login.status);
  const dispatch = useDispatch();

  const [logo, setLogo] = useState(undefined);

  useEffect(() => {
    console.log('loadingState', loadingState);
    if (loadingState === LOGIN_SUCCESS) {
      uploadLogo(logo);
    }
  }, [loadingState]);

  function isAuthHere() {
    return isAuth() ? history.push('./dashboard') : false;
  }

  function uploadLogo(file: any) {
    console.log(typeof file);
    let formData = new FormData();
    //@ts-ignore
    formData.append(
      'file',
      document.querySelector<any>('input[type="file"]').files[0],
    );
    console.log('form data', formData);
    const headerConfig = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: 'hmac ' + localStorage.getItem('accessToken'),
      },
    };
    api
      .post('company/logo', formData, headerConfig)
      .then((response: any) => {
        console.log('response', response);
        // history.push('/dashboard');
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  return (
    <div className='register'>
      {isAuthHere()}
      <div className='container'>
        <div className='register__card'>
          <Card>
            <p className='register__title'>تکمیل اطلاعات فردی</p>
            <Formik
              initialValues={{
                name: '',
                family: '',
                password: '',
                email: '',
                companyName: '',
                file: undefined!,
              }}
              validationSchema={RegisterSchemaValid}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                dispatch(
                  registerRequest(
                    values.email.trim(),
                    values.password.trim(),
                    values.name.trim() + ' ' + values.family.trim(),
                    values.companyName.trim(),
                  ),
                );
                console.log('Values.file', typeof values.file);
                setLogo(values.file);
                if (
                  loadingState !== LOGIN_ERROR ||
                  loadingState === LOGIN_ERROR
                ) {
                  setSubmitting(false);
                }
              }}>
              {props => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <span className='register__input__label'>
                      نام ونام خانوادگی
                    </span>
                    <div className='register__nameAndFamily'>
                      <Input
                        className={
                          errors.name && touched.name
                            ? 'register__input--error'
                            : ''
                        }
                        id='name'
                        placeholder='نام'
                        type='text'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        className={
                          errors.family && touched.family
                            ? 'register__input--error'
                            : ''
                        }
                        id='family'
                        placeholder='نام خانوادگی'
                        type='text'
                        value={values.family}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {(errors.name && touched.name && (
                      <p className='register__error'>{errors.name}</p>
                    )) ||
                      (errors.family && touched.family && (
                        <p className='register__error'>{errors.family}</p>
                      ))}
                    <span className='login__input__label'>رمز عبور</span>
                    <Input
                      className={
                        errors.password && touched.password
                          ? 'register__input--error'
                          : ''
                      }
                      id='password'
                      placeholder='رمز عبور'
                      type='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <p className='register__error'>{errors.password}</p>
                    )}
                    <span className='register__input__label'>ایمیل</span>
                    <Input
                      className={
                        errors.email && touched.email
                          ? 'register__input--error'
                          : ''
                      }
                      id='email'
                      placeholder='ایمیل'
                      type='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className='register__error'>{errors.email}</p>
                    )}
                    <span className='register__input__label'>نام شرکت</span>
                    <Input
                      className={
                        errors.companyName && touched.companyName
                          ? 'register__input--error'
                          : ''
                      }
                      id='companyName'
                      placeholder='نام شرکت'
                      type='text'
                      value={values.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.companyName && touched.companyName && (
                      <p className='register__error'>{errors.companyName}</p>
                    )}
                    <span className='register__input__label'>
                      بارگذاری لوگو شرکت
                    </span>
                    <div className='applyResume__input__file'>
                      <label
                        className='applyResume__input__file__button'
                        htmlFor='file'>
                        {values.file ? (
                          (values.file as string).slice(
                            (values.file as string).lastIndexOf('\\') + 1,
                            (values.file as string).length < 25
                              ? (values.file as string).length
                              : (values.file as string).lastIndexOf('\\') + 25,
                          )
                        ) : (
                          <span> بارگذاری </span>
                        )}
                      </label>
                      <input
                        style={{ zIndex: -1, opacity: 0 }}
                        className='applyResume__inputFilediv__input'
                        type='file'
                        accept='.jpeg, .jpg , .png'
                        capture
                        id='file'
                        value={values.file}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors.file && touched.file && (
                      <p className='applyResume__input--textError'>
                        {errors.file}
                      </p>
                    )}
                    <p className='register__accept'>
                      با ثبت نام در پروفایل شما با <a href='# '>حریم خصوصی</a> و{' '}
                      <a href='# '>شرایط و قوانین</a> استفاده از سرویس های سایت
                      پروفایل موافقت میکنید.
                    </p>
                    <Button
                      htmlType='submit'
                      className='register__button'
                      type='primary'
                      disabled={isSubmitting}>
                      ادامه
                    </Button>
                  </form>
                );
              }}
            </Formik>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};
