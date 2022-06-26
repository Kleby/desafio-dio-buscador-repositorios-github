import React,{ useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';


const Header = () => {
  const {getUser} = useGithub(); 
  const [userNameForSearch, setUsernameForSearch] = useState(); 

  const submitGetUser = () =>{
    if(!userNameForSearch) return;

    return getUser(userNameForSearch)
  }
  return (
    <header>
        <S.Wrapper>
              <input 
                type="text" 
                placeholder="Procurar usuário" 
                onChange={(event) => setUsernameForSearch(event.target.value)} 
              />
              <button 
                type="submit"
                onClick={submitGetUser} 
              >
                <span>Buscar</span>
              </button>
        </S.Wrapper>
    </header>
  )
}

export default Header;