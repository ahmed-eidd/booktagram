import React from 'react';
import {
  Tabs as CTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import classes from './Tabs.module.scss';

const Tabs = ({tabs = [], className = '',}) => {
  // const tabs = ['Speakers', 'Details', 'Orgnaizer'];

  const tabSelected = {
    opacity: '100% !important',
    boxShadow: '0 !important',
    borderBottom: '1px solid #21545F',
    outline: 'none',
  };
  return (
    <CTabs  variant="unstyled" className={[classes.Tabs, className].join(' ')}>
      <TabList>
        {tabs?.map((el) => (
          <Tab _selected={tabSelected} className={classes.Tab}>
            {el}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </CTabs>
  );
};

export default Tabs;
