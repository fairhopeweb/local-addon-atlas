import React from 'react';
import {
	Card,
	Container,
	Divider,
	IReactComponentProps,
	TextButton,
} from '@getflywheel/local-components';

interface AtlasBlueprintCardProps extends IReactComponentProps {
	thumbnailSrc: string;
	title: string;
	byline: string;
	excerpt: string;
	previewHref: string;
	repoHref: string;
	detailsHref: string;
}

const AtlasBlueprintCard: React.FC<AtlasBlueprintCardProps> = ({
	thumbnailSrc,
	title,
	byline,
	excerpt,
	previewHref,
	repoHref,
	detailsHref,
	...otherProps
}) => (
	<Card
		className="AtlasBlueprintCard"
		headerIconContainerClassName="AtlasBlueprintCard_HeaderIconContainer"
		headerIconPath={thumbnailSrc}
		contentClassName="AtlasBlueprintCard_Content"
		contentDescriptionClassName="AtlasBlueprintCard_Description"
		contentTitle={title}
		contentSub={byline}
		contentDescription={excerpt}
		{...otherProps}
		content={
			<Container className="AtlasBlueprintCard_Links">
				<TextButton tag="a" tagProps={{ href: previewHref }} onClick={(e) => e.stopPropagation()}>
					Preview Site
				</TextButton>
				<TextButton tag="a" tagProps={{ href: repoHref }} onClick={(e) => e.stopPropagation()}>
					Open the code on GitHub
				</TextButton>
				<Divider />
				<TextButton
					tag="a"
					onClick={(e) => {
						e.stopPropagation();
						alert(`Atlas Blueprint Details: ${detailsHref}`);
					}}
				>
						Show more details
				</TextButton>
			</Container>
		}
	/>
);

export default AtlasBlueprintCard;
