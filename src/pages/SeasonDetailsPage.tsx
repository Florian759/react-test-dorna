import React from 'react';
import { Grid } from '@mui/material';
import { Breadcrumbs, PropsTypeBread } from '../components/Breadcrumbs';
import SearchEvent from '../components/Search';
import { SeasonDetails } from '../components/SeasonDetails';
import { WrapperFlexRow, WrapperRoot } from '../components/style/AppStyle';
import { BottonsWrapper, EventIcon, Title, WrapperList, WrapperToolbarSection } from '../components/style/SeasonDetailsPageStyle';
import { selectSeason } from '../reducers/seasonSlice';
import { useAppSelector } from '../redux/hooks';
import EventCard from '../components/EventCard';

export function SeasonDetailsPage() {
  const { season, eventsFiltered } = useAppSelector(selectSeason);
  const breadcrumbs: Array<PropsTypeBread> = [
    {name: "Season", to: "/"}, 
  ]

  return (
    <WrapperRoot>
      <Breadcrumbs data={breadcrumbs}/>
      <SeasonDetails data={season} />
      <WrapperToolbarSection> 

        <WrapperFlexRow>
          <EventIcon />
          <Title variant="h3" noWrap>Events</Title>
        </WrapperFlexRow>

        <BottonsWrapper>
          <SearchEvent />
				</BottonsWrapper>

      </WrapperToolbarSection> 

      <WrapperList>
        <Grid container spacing={2}>
          {eventsFiltered.map(item => <EventCard key={item.id} item={item} />)}
        </Grid>
			</WrapperList>
    </WrapperRoot>
  )
}

export default SeasonDetailsPage;