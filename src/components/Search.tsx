import React, { ChangeEvent, FC } from 'react';
import { SearchIconWrapper, SearchInput, SearchWrapper } from './style/SearchStyle';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { eventsFilterEvents, eventsSetFilter, selectSeason } from '../reducers/seasonSlice';

let timer: NodeJS.Timeout;

export const SearchEvent:FC = () => {
	const { filter } = useAppSelector(selectSeason);
	const dispatch = useAppDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
		event.preventDefault();
		
		dispatch(eventsSetFilter(event.target.value));

		if (timer) clearTimeout(timer);	
		timer = setTimeout(() => {
			dispatch(eventsFilterEvents());
		}, 500);
	};

	return (
		<SearchWrapper>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<SearchInput
				placeholder={'search'}
				inputProps={{ 'aria-label': 'search' }}
				value={filter}
				onChange={handleChange}
			/>
		</SearchWrapper>
	);
};

export default SearchEvent;