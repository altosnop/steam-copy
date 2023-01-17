export type TGame = {
	appId: string;
	title: string;
	imgUrl: string;
	released: string;
	description: string;
	price: string;
	liked: boolean;
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
};

export type TButtonProps = {
	active?: boolean;
};

export type TUrlParams = {
	query: string;
	page: number;
};
