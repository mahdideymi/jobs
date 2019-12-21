import React from 'react';
import { Input, Modal, Icon, Button } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './ApplyResume.scss';

const applyResumeSchemaValid = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'نام بیشتر از ۲ کاراکتر باشد')
    .max(50, 'نام کمتر از ۲۰ کاراکتر باشد')
    .required('لطفا نام خود را وارد کنید'),
  email: Yup.string()
    .email('ایمیل نام معتبر')
    .required('لطفا ایمیل خود را وارد کنید'),
  phoneNumber: Yup.string()
    .matches(/^(\+98|0098|98|0)?9\d{9}$/, 'تلفن همراه نامعتبر است')
    .required('لطفا تلفن همراه را وارد کنید'),
  file: Yup.mixed().required('لطفا فایل مدنظر خود را اضافه کنید'),
});

interface IProps {
  visible: boolean;
  cancle: () => void;
  ok: () => void;
}

export const ApplyResume: React.FC<IProps> = props => {
  return (
    <Modal
      closable={false}
      visible={props.visible}
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon type='close' onClick={props.cancle} />
          <span style={{ marginRight: 12 }}>نهایی سازی ارسال رزومه</span>
        </div>
      }
      onOk={props.ok}
      onCancel={props.cancle}
      footer={null}>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phoneNumber: '',
          file: undefined!,
        }}
        validationSchema={applyResumeSchemaValid}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log('value', values);
          setSubmitting(false);
          //todo: after have api dispach send resume action here
          //   dispatch(
          //     applyResumeRequest(
          //       values.fullName,
          //       values.email,
          //       values.phoneNumber,
          //       values.file,
          //     ),
          //   );
        }}>
        {({
          values,
          touched,
          errors,
          // dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='applyResume__input'>
              <span className='applyResume__input__label'>
                نام ونام خانوادگی
              </span>
              <Input
                className={
                  errors.fullName && touched.fullName
                    ? 'applyResume__input--error'
                    : ''
                }
                id='fullName'
                placeholder='نام و نام خانوادگی'
                type='text'
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullName && touched.fullName && (
                <p className='applyResume__input--textError'>
                  {errors.fullName}
                </p>
              )}
            </div>
            <div className='applyResume__input'>
              <span className='applyResume__input__label'>ایمیل</span>
              <Input
                className={
                  errors.email && touched.email
                    ? 'applyResume__input--error'
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
                <p className='applyResume__input--textError'>{errors.email}</p>
              )}
            </div>
            <div className='applyResume__input'>
              <span className='applyResume__input__label'>شماره تلفن</span>
              <Input
                className={
                  errors.phoneNumber && touched.phoneNumber
                    ? 'applyResume__input--error'
                    : ''
                }
                id='phoneNumber'
                placeholder='تلفن همراه'
                type='text'
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p className='applyResume__input--textError'>
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div className='applyResume__inputFilediv'>
              <span className='applyResume__input__label'>فایل رزومه</span>
              <br />
              <label
                htmlFor='file'
                style={{
                  border: '1px solid lightgray',
                  padding: '4px 8px',
                  borderRadius: 4,
                  marginTop: 3,
                  cursor: 'pointer',
                }}>
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
                style={{ marginTop: 8, zIndex: -1, opacity: 0 }}
                className='applyResume__inputFilediv__input'
                type='file'
                id='file'
                accept='.pdf , .jpg , .jpeg'
                value={values.file}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.file && touched.file && (
                <p className='applyResume__input--textError'>{errors.file}</p>
              )}
            </div>
            <Button
              style={{ width: '100%', marginTop: 8 }}
              type='primary'
              disabled={isSubmitting}
              name='ارسال'
              htmlType='submit'>
              ارسال
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  );
};
