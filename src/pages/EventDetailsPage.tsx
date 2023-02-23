import React, { useState, useEffect, FC } from 'react';
import { useAppSelector } from '../redux/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { selectSeason } from '../reducers/seasonSlice';
import { WrapperRoot } from '../components/style/AppStyle';
import Breadcrumbs, { PropsTypeBread } from '../components/Breadcrumbs';
import { IEvent } from '../models/IEvent';
import EventDetails from '../components/EventDetails';

export const EventDetailsPage:FC = () => {
	const { id } = useParams();
	const { events } = useAppSelector(selectSeason);
	const [ data, setData ] = useState<IEvent>();
	const navigate = useNavigate();

	const breadcrumbs: Array<PropsTypeBread> = [
		{name: 'Season', to: '/'},
		{name: data?.shortName, to: undefined},
	];

	useEffect(() => {
		if (id) {
			const found: IEvent | undefined = events.find(item => item.id === id);    
			if (found) {
				setData(found);
			} else {
				navigate('/');
			}
		}
	}, [id, events, navigate]);

	return (
		<WrapperRoot>
			<Breadcrumbs data={breadcrumbs}/>
			<EventDetails data={data}/>
		</WrapperRoot>
	);
};

export default EventDetailsPage;
