import React from "react"
import { Avatar, Grid } from "@mui/material";
import { CircuitImage, CodeEvent, WrapperHeaderEvent, WrapperEventItem, WrapperImage, WrapperTitleEvent, DateEvent, SubTitleEvent } from "./style/EventItemStyle";
import { IEvent } from "../models/IEvent";
import { useNavigate } from "react-router-dom";

type PropsType = {
	item: IEvent;
}

const options: Intl.DateTimeFormatOptions = {
  day: "numeric", month: "short"
};

export function EventItem({ item }: PropsType) {
	const navigate = useNavigate();
	const code: string = item.code;
	const dateOfStart: string = item.schedule.localTime.dateOfStart.toLocaleDateString("en-GB", options);
	const flagUrl: string = `https://dornacorporatestorage.blob.core.windows.net/public-assets/images/events/${code}/flag.png`;
  const circuitUrl: string = `https://dornacorporatestorage.blob.core.windows.net/public-assets/images/events/${code}/circuit.png`;

  const handleOnClick = (id: string) => {
    navigate(`/event/${id}`)
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <WrapperEventItem onClick={() => handleOnClick(item.id)}>
				<WrapperHeaderEvent>
					<Avatar 
						alt={code} 
						src={flagUrl} 
						sx={{ width: 40, height: 40 }}
					/>	
					<WrapperTitleEvent>
						<CodeEvent>{code}</CodeEvent>
						<DateEvent>{dateOfStart}</DateEvent>
					</WrapperTitleEvent>
				</WrapperHeaderEvent>
				<WrapperImage>
					<CircuitImage alt={code} src={circuitUrl} />
				</WrapperImage>
				<SubTitleEvent>{`${item.sequence} - ${item.shortName.toLowerCase()}`}</SubTitleEvent>
    	</WrapperEventItem>
  	</Grid>
  )
}

export default EventItem;