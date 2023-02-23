import React from 'react';
import { Breadcrumbs as BreadcrumbsMUI } from '@mui/material';
import { useNavigate } from 'react-router';
import { BreadcrumbHover, WrapperBreadCrumbs } from './style/BreadcrumbsStyle';

export type PropsTypeBread = {
	name: string | undefined;
	to: string | undefined;
}

type PropsType = {
	data?: Array<PropsTypeBread>;
}

export function Breadcrumbs({data}: PropsType): JSX.Element {
	const navigate = useNavigate();

	const handleOnClick = (to: string | undefined) => {
		if (to) navigate(to);
	};

	return (
		<WrapperBreadCrumbs>
			<BreadcrumbsMUI aria-label="breadcrumb">
				{data?.map((item, index) => <BreadcrumbHover
					key={`${item?.name}${index}` }
					label={item?.name}
					onClick={() => handleOnClick(item.to)}
				/>)}
			</BreadcrumbsMUI>
		</WrapperBreadCrumbs>   
	);
}

export default Breadcrumbs;