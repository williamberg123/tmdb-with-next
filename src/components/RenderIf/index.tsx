import { ReactNode } from 'react';

interface RenderIfProps {
	children: ReactNode;
	isTrue: boolean;
}

export default function RenderIf({ children, isTrue }: RenderIfProps): ReactNode {
	return isTrue ? children : null;
}
