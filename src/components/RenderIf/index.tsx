import { ReactNode } from 'react';

interface RenderIfProps {
	children: ReactNode | null | undefined;
	isTrue: boolean;
}

export default function RenderIf({ children, isTrue }: RenderIfProps) {
	return isTrue ? children : null;
}
