import React from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import BreadCrumbs, { PropsTypeBread } from '../components/Breadcrumbs';
import { WrapperHelpCard, WrapperRoot } from '../components/style/AppStyle';

export function HelpPage() {
	const breadcrumbs: Array<PropsTypeBread> = [
		{name: "Season", to: "/"}, 
		{name: "Help", to: undefined}
	]

  return (
    <WrapperRoot>
		<BreadCrumbs data={breadcrumbs}/>

		<WrapperHelpCard >
			<EmojiEmotionsIcon/>
			I'm sorry, I can not help you!
		</WrapperHelpCard>
    </WrapperRoot>
  )
}

export default HelpPage;