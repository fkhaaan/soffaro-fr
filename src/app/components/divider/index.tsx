import styled from 'styled-components';
export interface IDividerProps {
	width?: string;
	height?: string;
	bg?: string;
}
interface StyledProps {
	$width?: string;
	$height?: string;
	$bg?: string;
}
const DividerComponent = styled.span<StyledProps>`
    display: flex;
    min-width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};
    min-height: ${({ $height }) => ($height ? `${$height}px` : 'auto')};
    background: ${({ $bg }) => $bg || 'transparent'};
`;
function Divider({ width, height, bg }: IDividerProps) {
	return (
		<DividerComponent
			$width={width}
			$height={height}
			$bg={bg}
		/>
	);
}
export default Divider;