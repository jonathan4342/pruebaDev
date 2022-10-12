import styled from 'styled-components'

export const SearchP=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
export const ContInput=styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    width:20rem;
    background-color:rgb(43, 57, 69);
    border-radius:1rem;
    justify-content:center;

`;
export const Icon=styled.button`
    display: flex;
    width:20%;
    align-items: center;
    height: 100%;
    background-color:rgb(43, 57, 69);
    border:0.063rem solid rgb(43, 57, 69);
    cursor: pointer;
    border-radius:1rem;
    padding-left: 1rem;
    .icon{
        font-size:1.5rem;
        color:#ffffff;
    }
`;
export const Input=styled.input`
    background-color:rgb(43, 57, 69);
    border:0.063rem solid rgb(43, 57, 69);
    width: 80%;
    color:#ffffff;
    padding-left: 2rem;
    ::placeholder{
        color: #ffffff;
    }
`;

export const Select=styled.select`
    background-color:rgb(43, 57, 69);
    border-radius:1rem;
    box-shadow: .5rem;
    border:0.063rem solid rgb(43, 57, 69);
    height: 3rem;
    color:#ffffff;
`;