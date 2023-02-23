import React, { FC } from 'react';
import { ISeason } from '../models/ISeason';
import { dateLongFormat } from '../utils/formatDate';
import PropertyLabel from './PropertyLabel';
import { WrapperCard } from './style/AppStyle';

type PropsType = {
  data?: ISeason;
}

export const SeasonDetails:FC<PropsType> = ({data}) => {

	return (
		<WrapperCard >
			<PropertyLabel title={'Season: '} value={data?.name} />
			<PropertyLabel title={'Date of start: '} value={dateLongFormat(data?.dateOfStart)} />
			<PropertyLabel title={'Date of end: '} value={dateLongFormat(data?.dateOfEnd)} />
		</WrapperCard>
	);
};

export default SeasonDetails;