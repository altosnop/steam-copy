export type TGame = {
	appId: string;
	title: string;
	imgUrl: string;
	released: string;
	description?: string;
	price: string;
	liked?: boolean | undefined;
};

export type TState = {
	items: TGame[];
	params: {
		query: string;
		page: number;
	};
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
};

export type TUrlParams = {
	query: string;
	page: number;
};
