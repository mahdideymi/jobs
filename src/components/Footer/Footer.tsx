import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <div className="footer">
    <Link className="footer__link" to="# ">
      درباره ما
    </Link>
    <Link className="footer__link" to="# ">
      قوانین و مقررات
    </Link>
    <Link className="footer__link" to="# ">
      سرویس برنامه نویسان
    </Link>
    <Link className="footer__link" to="# ">
      راهنمای پروفایل
    </Link>
    <Link className="footer__link" to="# ">
      اپ موبایل
    </Link>
  </div>
);
