export type TGame = {
	appId: string;
	title: string;
	imgUrl: string;
	released: string;
	price: string;
};
export type TState = {
	items: TGame[];
	params: {
		query: string;
		page: number;
	};
	loading: boolean;
};
