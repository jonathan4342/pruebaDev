import styled from "styled-components";

interface Props {
    gap?:string
}
export const ContCard=styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({gap}:Props)=>gap?gap:'0'};
`;

export const CardData=styled.div`
    display: flex;
    flex-direction: row;
    gap:10rem
`;

export const Data=styled.div`
    display: flex;
    flex-direction:column;
    gap:1rem
`;

export const TableData=styled.table`
    
`;

export const Error=styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-weight:300 ;
`;