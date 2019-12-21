import React, { FunctionComponent } from 'react';
import { Modal, Button } from 'antd';
const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'آیا برای حذف کردن این کاربر مطمئن هستید؟!',
    content: 'کاربر به طور کامل حذف خواهد شد!',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}
const DeleteConfirm: FunctionComponent = () => {
  return (
    <>
      <Button type="danger" onClick={showConfirm}>
        حذف کاربر!
      </Button>
    </>
  );
};

export { DeleteConfirm };
