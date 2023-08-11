import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 8px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #555555;
  }
  &:nth-of-type(even) {
    background-color: #dddddd;
  }
`;

export const DeleteButton = styled.button`
  height: 24px;
  margin-left: auto;
`;
