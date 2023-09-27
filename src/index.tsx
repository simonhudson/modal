import React, { ReactNode, useState } from 'react';
import { Overlay, Wrapper, CloseButton } from './index.styles';

interface ModalProps {
	children?: ReactNode;
	onClose?: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
	const [hideModal, setHideModal] = useState<boolean>(false);

	return (
		<>
			{!hideModal ? (
				<Overlay>
					<Wrapper aria-modal="true" role="dialog">
						<CloseButton
							onClick={() => {
								setHideModal(true);
								if (onClose) onClose();
							}}
						>
							Close
						</CloseButton>
						{children}
					</Wrapper>
				</Overlay>
			) : null}
		</>
	);
};
