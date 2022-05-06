import styled from "styled-components";

export const CardStyle = styled.div`
    width: 100%;
    height: fit-content;
    border: solid #000 2px;
    background-color: white;
    padding: .5rem;
    margin-bottom: 2rem;


    .card-title{
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #195F9B;
    }

    .card-title h1{
        text-decoration: underline;
    }

    .card-title button{
        height: 2rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .card-description{
        text-align: left;
    }

    .card-tags{
        text-align: left;
        font-weight: bold;
    }

`;

export const Test = styled.div`
    width: 100%;
`