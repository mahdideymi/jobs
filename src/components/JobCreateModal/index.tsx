import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Form, Input, Typography } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { addJob, editJob } from 'store/actions';
import './style.scss';

const { Text } = Typography;
const { TextArea } = Input;

const schema = Yup.object().shape({
  title: Yup.string()
    .required('لطفا عنوان موقعیت شغلی را وارد کنید')
    .min(3, 'عنوان موقعیت شغلی نمیتواند از 3 حرف کمتر باشد')
    .max(20, 'عنوان موقعیت شغلی نمیتواند از 20 حرف بیشتر باشد'),
  description: Yup.string()
    .required('لطفا توضیحات را وارد کنید')
    .min(5, 'توضیحات نمیتواند از 5 حرف کمتر باشد')
    .max(100, 'توضیحات نمیتواند از 100 حرف بیشتر باشد'),
});

interface IProps {
  modalTitle: string;
  job: any;
  isVisible: boolean;
  hideModal: () => void;
}

export const JobCreateModal: React.FC<IProps> = props => {
  const dispatch = useDispatch();

  function handleOk(values: any) {
    dispatch(
      addJob({
        title: values.title.trim(),
        description: values.description.trim(),
      }),
    );
    props.hideModal();
  }

  function handleEdit(id: number, values: any) {
    dispatch(
      editJob({
        id,
        title: values.title.trim(),
        description: values.description.trim(),
      }),
    );
    props.hideModal();
  }

  return (
    <Modal
      destroyOnClose={true}
      closable={false}
      title={props.modalTitle}
      visible={props.isVisible}
      onCancel={() => props.hideModal()}
      footer={null}>
      <Formik
        enableReinitialize
        initialValues={{
          title: props.job ? props.job.title : '',
          description: props.job ? props.job.description : '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          if (props.modalTitle === 'ویرایش') {
            handleEdit(props.job.id, values);
          } else {
            handleOk(values);
          }
          setSubmitting(false);
          values.title = '';
        }}>
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <span>عنوان موقعیت شغلی</span>

            <Input
              autoComplete='off'
              className={`job-create-modal__input ${
                errors.title && touched.title
                  ? 'job-create-modal__input--error'
                  : ''
              } `}
              id='title'
              placeholder='طراح گرافیک'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title && (
              <Text className='job-create-modal__danger' type='danger'>
                {errors.title}
              </Text>
            )}
            <span>توضیحات</span>
            <TextArea
              autosize={{
                minRows: 4,
                maxRows: 6,
              }}
              className={`job-create-modal__input ${
                errors.description && touched.description
                  ? 'job-create-modal__input--error'
                  : ''
              }`}
              id='description'
              placeholder='توضیحات موقعیت شغلی خود را بنویسید'
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && touched.description && (
              <Text className='job-create-modal__danger' type='danger'>
                {errors.description}
              </Text>
            )}
            <Button
              className='job-create-modal__button'
              type='primary'
              htmlType='submit'
              disabled={isSubmitting}>
              ایجاد
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
