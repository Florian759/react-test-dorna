import React from "react"
import { Avatar, Grid } from "@mui/material";
import { CircuitImage, CodeEvent, WrapperHeaderEvent, WrapperEventItem, WrapperImage, WrapperTitleEvent, DateEvent, SubTitleEvent } from "./style/EventItemStyle";
import { IEvent } from "../models/IEvent";
import { useNavigate } from "react-router-dom";
import { getCircuitUrl, getFlagUrl } from "../utils/getUrls";
import { dateShortFormat } from "../utils/formatDate";

type PropsType = {
	item: IEvent;
}

export function EventCard({ item }: PropsType) {
	const navigate = useNavigate();
	const code: string = item.code;

  const handleOnClick = (id: string) => {
    navigate(`/event/${id}`)
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <WrapperEventItem onClick={() => handleOnClick(item.id)}>
				<WrapperHeaderEvent>
					<Avatar 
						alt={code} 
						src={getFlagUrl(code)} 
						sx={{ width: 40, height: 40 }}
					/>	
					<WrapperTitleEvent>
						<CodeEvent>{code}</CodeEvent>
						<DateEvent>{dateShortFormat(item.schedule.localTime.dateOfStart)}</DateEvent>
					</WrapperTitleEvent>
				</WrapperHeaderEvent>
				<WrapperImage>
					<CircuitImage alt={code} src={getCircuitUrl(code)} />
				</WrapperImage>
				<SubTitleEvent>{`${item.sequence} - ${item.shortName.toLowerCase()}`}</SubTitleEvent>
    	</WrapperEventItem>
  	</Grid>
  )
}

export default EventCard;