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
	select: string;
	order: string;
	loading: boolean;
	error: string;
};

export type TLikeListState = {
	items: TGame[];
	totalCount: number;
};

export type TButtonProps = {
	active?: boolean;
	disabled?: boolean;
};

export type TUrlParams = {
	query: string;
	page: number;
};
