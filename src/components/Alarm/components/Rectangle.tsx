
import styled from "styled-components";

const RectangleWrapper = styled.div`
    display: flex;
    width: 90vw;
    min-width: 300px;
    max-width: 540px;
    align-items: center;
    background-color: #ffffff;
    border-radius: 18px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.16);
    padding-right: 20px;
    margin-left: 21px;
    margin-right: 21px;
    gap: 14px;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: #888888;
    border-radius: 10px;
    margin-left: 20px;
`;

type RectangleProps = {
    children: React.ReactNode;
};

const Rectangle: React.FC<RectangleProps> = ({ children }) => (
    <RectangleWrapper>
        <Icon />
        {children}
    </RectangleWrapper>
);

export default Rectangle;
