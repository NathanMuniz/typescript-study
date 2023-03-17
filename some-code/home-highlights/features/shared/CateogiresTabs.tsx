import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { useAppDIspatch } from '../../store'



export const CateogriesTabs: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedCateogry = useSelector(getSelectedCategory);

  const categoriesLabls: Record<AgendaEventCategory, string> = {
    current: "What's on",
    exhibitions: 'Exhibitions',
    thetreadaddance: 'Theatre and Dance',
    music: 'Music',
    sports: 'Sports',
    fairs: 'Fairs',
    events: 'Events',
    christmas: 'Christmas',
  };

  function handleTabChange(
    _event: ChangeEvnet,
    newTab: AgendaEventCategory,
  ): void {
    dispatch(selectedCateogry(newTab))
  }

  return (
    <Paper className="cateogriesTabs">
      <Tabs
        indicatorColor="secondary"
        textColor="primary"
        onChange={handleTabChange}
        value={selectedCateogry}
      >
        {Object.keys(cateogiresLables).map((category) => (
          <Tab
            key={category}
            label={cateogriesLabels[category]}
            value={category}
          />
        ))}
      </Tabs>
    </Paper>
  );
}; 
