export type TGame = {
	appId: string;
	title: string;
	imgUrl: string;
	url: string;
	released: string;
	description?: string;
	price: string;
	liked?: boolean | undefined;
};

export type TGamesState = {
	items: TGame[];
	query: string;
	page: number;
	select: string;
	order: string;
	loading: boolean;
	error: string;
};

export type TLikeListState = {
	items: TGame[];
};

export type TButtonProps = {
	active?: boolean;
	disabled?: boolean;
};

export type TUrlParams = {
	query: string;
	page: number;
};

export type TGameCardProps = {
	id: string;
	img: string;
	url: string;
	title: string;
	date: string;
	price: string;
	liked: boolean | undefined;
};

export type TGamesListProps = {
	items: TGame[];
};
