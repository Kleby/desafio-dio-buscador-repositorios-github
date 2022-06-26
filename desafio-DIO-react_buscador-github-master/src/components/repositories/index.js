import React, { useState, useEffect } from 'react';
import useGithub from '../../hooks/github-hooks';
import RepositoryItem from '../repository-item';
import * as S from './styled';

export default function Repositories() {
  const {githubState, getUserRepos, getUserStarred} = useGithub();

  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState (false);
  const [hasUserForSearchStarred, setHasUserForSearchStarred] = useState (false);

  useEffect(() => {
    if(githubState.user.login){
      getUserRepos(githubState.user.login)
    }
    setHasUserForSearchRepos(githubState.repositories)
  }, [githubState.user.login])
  //inserido agora
  useEffect(() => {
    if(githubState.user.login){
      getUserStarred(githubState.user.login)
    }
    setHasUserForSearchStarred(githubState.repositories)
  }, [githubState.user.login])
  
  return (
        <S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
        >
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <>
          {hasUserForSearchRepos ? 
        <S.WrapperTabPanel>
          <S.WrapperList>
          {githubState.repositories.map((item) => (
             <RepositoryItem 
                key={item.id}
                name={item.name} 
                linkToRepo={item.html_url}
                full_name = {item.full_name}
           />
          ))}
          </S.WrapperList>         
        </S.WrapperTabPanel>
          :
              <></>
          }
        </>
        <>
          {hasUserForSearchStarred ? 
        <S.WrapperTabPanel>  
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem 
                    key={item.id}
                    name={item.name} 
                    linkToRepo={item.full_name}
                    fullName = {item.full_name}
              />
            ))}
            </S.WrapperList>
          </S.WrapperTabPanel>        
          :
          <></>
          }
        </>
    </S.WrapperTabs> 
  )
}
