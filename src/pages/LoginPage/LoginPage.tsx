import React, { useEffect } from 'react';
import { Footer } from 'components';
import { Card, Button, message } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import './LoginPage.scss';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'store/actions';
import * as Yup from 'yup';
import { LOGIN_SUCCESS } from 'store/actionTypes';
import { isAuth } from 'configs/isAuth';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim('لطفا ایمیل خود را وارد کنید')
    .email('ایمیل نامعتبر است!')
    .required('لطفا ایمیل خود را وارد کنید'),
  password: Yup.string()
    .required('لطفا رمز عبور خود را وارد کنید')
    .trim('لطفا رمز عبور خود را وارد کنید'),
});

export const LoginPage: React.FC = () => {
  let history = useHistory();
  const loadingState = useSelector((state: any) => state.login.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadingState === LOGIN_SUCCESS) {
      history.push('/dashboard');
    }
  }, [loadingState]);

  function isAuthHere() {
    return isAuth() ? history.push('./dashboard') : false;
  }

  return (
    <div className='login'>
      {isAuthHere()}
      <div className='container'>
        <div className='login__profileLogin'>
          <img alt='پروفایل' src={require('../../assets/profile-logo.svg')} />
        </div>
        <div className='login__cards'>
          <Card>
            <h3 className='login__title'>ورود به پروفایل</h3>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={LoginSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                dispatch(
                  loginRequest(values.email.trim(), values.password.trim()),
                );
                setSubmitting(false);
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
                    <span className='login__input__label'>
                      ایمیل یا آدرس پروفایل
                    </span>
                    <Input
                      className={
                        errors.email && touched.email
                          ? 'login__input--error'
                          : ''
                      }
                      id='email'
                      placeholder='ایمیل*'
                      type='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className='login__error'>{errors.email}</p>
                    )}
                    <span className='login__input__label'>رمز عبور</span>
                    <Input
                      className={
                        errors.password && touched.password
                          ? 'login__input--error'
                          : ''
                      }
                      id='password'
                      placeholder='رمز عبور*'
                      type='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <p className='login__error'>{errors.password}</p>
                    )}
                    <Button
                      className='login__button'
                      type='primary'
                      disabled={isSubmitting}
                      htmlType='submit'
                      name='ورود به پروفایل'>
                      ورود به پروفایل
                    </Button>
                  </form>
                );
              }}
            </Formik>
            <div className='login__forgetPass'>
              <Link to='# '>رمز عبور خود را فراموش کرده اید؟</Link>
            </div>
          </Card>
          <Card>
            <div className='login__secondcard__text'>
              <span> حسابی در پروفایل ندارید؟</span>
              {'  '}
              <Link to='/register'>ثبت نام در پروفایل </Link>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

// const mapStateToProps = (state: any) => {
//   return {
//     token: state.login.token,
//     status: state.login.status,
//   };
// };
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     login: (email: string, password: string) =>
//       dispatch({
//         type: LOGIN_REQUEST,
//         email: 'eve.holt@reqres.in',
//         password: 'cityslicka',
//       }),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(LoginPage);
