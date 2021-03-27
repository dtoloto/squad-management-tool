import styled from 'styled-components';

export const ResponsiveTable = styled.div`
  overflow-y: auto;
  width: 100%;
`;

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
`;

export const SortIcon = styled.div`
  float: right;
  display: flex;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
`;

export const THEAD = styled.thead`
  tr {
    background: none !important;
  }
`;

export const TR = styled.tr`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};

    & > td {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const TH = styled.th`
  padding: 1rem 1.5rem;
  color: ${({ theme }) => theme.colors.mediumDark};
  font-weight: bolder;
  text-align: left;
  position: relative;
  &:first-child:after {
    content: '';
    position: absolute;
    top: 8px;
    right: 0;
    width: 1px;
    height: calc(100% - 16px);
    background: ${({ theme }) => theme.colors.light};
  }
`;

export const TD = styled.td`
  padding: 1rem 1.5rem;
  color: ${({ theme }) => theme.colors.mediumDark};
  font-weight: bolder;

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  }
  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  }
`;
