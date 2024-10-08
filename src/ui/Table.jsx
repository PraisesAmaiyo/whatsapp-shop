import { createContext, useContext } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledTable = styled.div`
  height: min-content;
  font-size: 1.4rem;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
`;

const CommonRow = styled.header`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 1.5rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2rem;
  background-color: var(--color-brand-800);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-50);
`;

const StyledBody = styled.section`
  background-color: var(--color-brand-100);
  margin: 0.4rem 0;
`;

const StyledRow = styled(CommonRow)`
  padding: ${(props) => (props.istotalrow ? '0' : '1.2rem 2.4rem')};
  background-color: ${(props) =>
    props.istotalrow ? 'var(--color-brand-100)' : 'inherit'};

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Row({ children, istotalrow }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns} istotalrow={istotalrow}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length)
    if (!Array.isArray(data) || data.length === 0)
      return (
        <>
          <Empty>No data to show at the moment</Empty>;
        </>
      );
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
