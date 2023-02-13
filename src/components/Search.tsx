import React, { ChangeEvent } from 'react';
import { SearchIconWrapper, SearchInput, SearchWrapper } from './style/SearchStyle';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { eventsSetFilter, selectSeason } from '../reducers/seasonSlice';

export function SearchEvent() {
	const { filter } = useAppSelector(selectSeason);
	const dispatch = useAppDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
    event.preventDefault();
		dispatch(eventsSetFilter(event.target.value))
	}

  return (
		<SearchWrapper>
			<SearchIconWrapper>
					<SearchIcon />
			</SearchIconWrapper>
				<SearchInput
					placeholder={`search`}
					inputProps={{ 'aria-label': 'search' }}
					value={filter}
					onChange={handleChange}
			/>
		</SearchWrapper>
  )
}

export default SearchEvent;