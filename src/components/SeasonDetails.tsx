import React from 'react';
import { ISeason } from '../models/ISeason';
import PropertyLabel from './PropertyLabel';
import { WrapperCard } from './style/SeasonDetailsStyle';

type PropsType = {
  data?: ISeason;
}

const options: Intl.DateTimeFormatOptions = {
  day: "numeric", month: "short", year: "numeric",
  hour: "2-digit", minute: "2-digit"
};


export function SeasonDetails({data}: PropsType) {
  const dateOfStart: string | undefined = data?.dateOfStart.toLocaleDateString("en-GB", options);
  const dateOfEnd: string | undefined = data?.dateOfEnd.toLocaleDateString("en-GB", options);

  return (
    <WrapperCard >
      <PropertyLabel title={`Season: `} value={data?.name} />
      <PropertyLabel title={`Date of start: `} value={dateOfStart} />
      <PropertyLabel title={`Date of end: `} value={dateOfEnd} />
    </WrapperCard>
  )
}

export default SeasonDetails;