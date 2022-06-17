import React from 'react';
import * as S from './styledCSS';

export default function Layout({children}) {
  return (
    <S.WrapperLayout>
        <header>Header</header>
        {children}
    </S.WrapperLayout>
  )
}
