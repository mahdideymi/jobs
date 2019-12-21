import React from 'react';

import { Card, Button, Input } from 'antd';

import { EmployerLayout } from 'layouts';
export const CandidatesPage: React.FC = () => {

  return (
    <EmployerLayout header={
      <div>موقعیت شغلی کارشناس منابع انسانی</div>
    }>
      <Card title="رزومه پروفایل" style={{ width: 600 }}>
        <Card
          style={{ width: '100%', backgroundColor: '#fafafa', marginBottom: 12 }}>
          <Input
            placeholder="متنی برای تیم خود اضافه کنید. این نوشته برای همه اعضا تیم قابل مشاهده می باشد."
            style={{ marginBottom: 12 }}
          />
          <Button type="primary">انتشار</Button>
        </Card>
      </Card>
    </EmployerLayout>
  );
};