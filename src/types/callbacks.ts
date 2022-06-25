export interface Callbacks<T> {
	create: (x: T) => void,
	update: (x: T) => void,
	delete: (_id: string) => void
}