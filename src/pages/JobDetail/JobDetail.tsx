import React, { useEffect, useState } from 'react';
import { Button, Card, Avatar, Icon } from 'antd';
import './JobDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ApplyResume } from 'pages/ApplyResume/ApplyResume';
// import { jobDetailRequest } from 'store/actions';

export const JobDetail: React.FC = () => {
  //
  const title = useSelector((state: any) => state.jobDetail.title);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  // const company = useSelector((state: any) => state.jobDetail.company);
  // const detail = useSelector((state: any) => state.jobDetail.detail);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(jobDetailRequest());
  // }, []);
  useEffect(() => {
    // console.log(title + ' / ' + company + ' / ' + detail);
    //TODO: after have api we can set this variables two views
  }, [title]);

  let history = useHistory();
  function backIcon() {
    history.goBack();
  }

  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  function handleCancel() {
    setVisible(false);
  }
  return (
    <div className='jobDetail'>
      <div className='container'>
        <div className='jobDetail__card'>
          <Card style={{ height: '100%' }}>
            <div className='jobDetail__title'>
              <Icon
                type='arrow-right'
                style={{ fontSize: '18px' }}
                onClick={backIcon}
              />
              <p className='jobDetail__title__text'>طراح رابط کاربری</p>
              <p className='jobDetail__title__city'>مشهد</p>
            </div>
            <div className='jobDetail__company'>
              <Avatar
                style={{ width: 50, height: 50 }}
                alt='لوگو'
                src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              />
              <span className='jobDetail__company__name'>
                شرکت توسعه و سامان ویهان مهدی دیمی و اینا و اونا و پروفایلشون
              </span>
            </div>
            <div className='jobDetail__description'>
              <div className='jobDetail__description__body'>
                <h2 className='jobDetail__description__body__title'>
                  ویژگی های اخلاقی
                </h2>
                <p className='jobDetail__description__body__text'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <h2 className='jobDetail__description__body__title'>
                  تکنولوژی های لازم
                </h2>
                <p className='jobDetail__description__body__text'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                  زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                  متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                  طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                  فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                  دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                  وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className='jobDetail__button'>
          <Button
            onClick={showModal}
            type='primary'
            className='jobDetail__send'
            style={{ width: '100%', height: 40 }}>
            ارسال رزومه
          </Button>
          <ApplyResume visible={visible} cancle={handleCancel} ok={handleOk} />
        </div>
      </div>
    </div>
  );
};
