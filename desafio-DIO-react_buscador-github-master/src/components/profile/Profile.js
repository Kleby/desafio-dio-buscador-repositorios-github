import React from 'react';
import * as S from './styled';

export default function Profile() {
  return (
    <S.Wrapper>
        <S.WarpperAvatarImg  
            src="https://avatars.githubusercontent.com/u/63982483?v=4"
            alt="perfil of user" 
        />
      <S.WarpperInfoUser>
        <div> 
          <h1>Kleby Veiga</h1> 
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a 
              href='https://github.com/Kleby' 
              target="_blank"
              rel='noreferrer'
            >
              Kleby
            </a>
          </S.WrapperUserName>
        </div>    
        <S.WrapperStatusCoount>
          <div>
            <h4>Followers</h4>
            <span>2</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>2</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>3</span>
          </div>
        </S.WrapperStatusCoount>
      </S.WarpperInfoUser>
    </S.Wrapper> 
  );
  }