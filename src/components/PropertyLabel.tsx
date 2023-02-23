import React from 'react';
import { WrapperFlexRow } from './style/AppStyle';
import { WrapperTitle, WrapperValue } from './style/PropertyLabelStyle';

type PropsType = {
  title?: string;
	value?: string;
}

export function PropertyLabel({title, value}: PropsType) {

	return (
		<WrapperFlexRow>
			<WrapperTitle>{title}</WrapperTitle>
			<WrapperValue>{value}</WrapperValue>
		</WrapperFlexRow>
	);
}

export default PropertyLabel;