import React from 'react';
import BannerA from './BannerA';
import BannerB from './BannerB';
import BannerC from './BannerC';
import BannerD from './BannerD';

export default function Banner(props) {
  const { variant } = props;

  switch (variant) {
    case 'B':
      return <BannerB {...props} />;
    case 'C':
      return <BannerC {...props} />;
    case 'D':
      return <BannerD {...props} />;
    case 'A':
    default:
      return <BannerA {...props} />;
  }
}
