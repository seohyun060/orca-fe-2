import Gnb from '../Gnb';

import { GNBTableTypes } from '@typedef/types';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next"
type Props = { location: string };
const GnbContainer = ({ location }: Props) => {
  const route = location.split('/')[1];
  const navigate = useNavigate();
  const tabTable: GNBTableTypes[] = [
    {
      label: 'ORCA',
      path: '/orca',
    },
    {
      label: 'Researcher',
      path: '/researcher',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Events',
      path: '/events',
    },
    {
      label: 'Insights',
      path: '/insights',
    },
  ];
  const [selectedTab, setSelectedTab] = useState<string>('/');
  const [language, setLanguage] = useState('En');
  const [gnbColor, setGnbColor] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const { i18n, t } = useTranslation();

  const onItemClicked = useCallback((path: string) => {
    if (path === '/custom') {
      return;
    }
    setSelectedTab(path);
    navigate(path);
  }, []);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const gnbColorHandler = useCallback(() => {
    if (`/${route}` == '/') {
      if (scrollPosition > 2000) {
        setGnbColor('-white');
      } else {
        setGnbColor('');
      }
    } else if (`/${route}` == '/orca') {
      if (scrollPosition > 727) {
        setGnbColor('-white');
      } else {
        setGnbColor('');
      }
    } else if (`/${route}` == '/researcher') {
      if (scrollPosition > 1081) {
        setGnbColor('-white');
      } else {
        setGnbColor('');
      }
    } else if (`/${route}` == '/projects') {
      setGnbColor('-white');
    } else if (`/${route}` == '/researcherdetail') {
      setGnbColor('-white');
    } else if (`/${route}` == '/insights') {
      setGnbColor('-white');
    } else if (`/${route}` == '/events') {
      setGnbColor('-white');
    }
  }, [scrollPosition, route]);

  const onLanguageClicked = useCallback(() => {
    if (language === 'Kr') {
      setLanguage('En');
      i18n.changeLanguage('en')
    } else {
      setLanguage('Kr');
      i18n.changeLanguage('kr')
    }
  }, [language]);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    gnbColorHandler();
  }, [scrollPosition, route]);
  return (
    <div>
      <Gnb
        gnbColor={gnbColor}
        tabTable={tabTable}
        language={language}
        route={route}
        onLanguageClicked={onLanguageClicked}
        onItemClicked={onItemClicked}
      />
    </div>
  );
};

export default GnbContainer;
