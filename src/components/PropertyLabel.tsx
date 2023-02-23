import React, { FC } from 'react';
import { WrapperFlexRow } from './style/AppStyle';
import { WrapperTitle, WrapperValue } from './style/PropertyLabelStyle';

type PropsType = {
	title?: string;
	value?: string;
}

export const PropertyLabel:FC<PropsType> = ({title, value}) => {

	return (
		<WrapperFlexRow>
			<WrapperTitle>{title}</WrapperTitle>
			<WrapperValue>{value}</WrapperValue>
		</WrapperFlexRow>
	);
};

export default PropertyLabel;