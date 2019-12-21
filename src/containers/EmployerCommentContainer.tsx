import React, { FC } from 'react';

import { Card, Input, Button } from 'antd';

import { EmployerComment } from 'components';

export const EmployerCommentContainer: FC = () => {
  return (
    <Card title="یادداشت" style={{ width: 600 }}>
      <Card
        style={{ width: '100%', backgroundColor: '#fafafa', marginBottom: 12 }}>
        <Input
          placeholder="متنی برای تیم خود اضافه کنید. این نوشته برای همه اعضا تیم قابل مشاهده می باشد."
          style={{ marginBottom: 12 }}
        />
        <Button type="primary">انتشار</Button>
      </Card>
      <EmployerComment />
      <EmployerComment />
    </Card>
  );
};
