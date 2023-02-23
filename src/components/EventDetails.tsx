import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { IEvent } from '../models/IEvent';
import PropertyLabel from './PropertyLabel';
import { WrapperCard } from './style/AppStyle';
import { getCircuitUrl } from '../utils/getUrls';
import { dateLongFormat } from '../utils/formatDate';
import { CircuitImage, WrapperImage } from './style/EventItemStyle';

export type PropsTypeEventCard = {
  data?: IEvent;
}

export const EventDetails:FC<PropsTypeEventCard> = ({data}) => {
	const code: string | undefined = data?.code ;

	return (
		<WrapperCard >
			<Grid container spacing={1}>

				<Grid item xs={12} sm={12} md={4}>
					<WrapperImage>
						{code && <CircuitImage alt={code} src={getCircuitUrl(code)} />}
					</WrapperImage>
				</Grid>

				<Grid item xs={12} sm={12} md={8} >
					<PropertyLabel title="Code:" value={code?.toLocaleUpperCase()} />
					<PropertyLabel title="Short Name:" value={data?.shortName.toLocaleLowerCase()} />
					<PropertyLabel title="Sponsored  Name:" value={data?.sponsoredName} />
					<PropertyLabel title="Circuit  Name:" value={data?.circuit?.name} />
					<PropertyLabel title="Circuit  Location:" value={data?.circuit?.location} />
					<PropertyLabel title="Date of Start:" value={dateLongFormat(data?.schedule.localTime.dateOfStart)} />
					<PropertyLabel title="Date of End:" value={dateLongFormat(data?.schedule.localTime.dateOfEnd)} />
					<PropertyLabel title="Sequence:" value={data?.sequence.toString()} />
				</Grid>

			</Grid>
		</WrapperCard>
	);
};

export default EventDetails;