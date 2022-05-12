import styled from "styled-components";

export const ComandStyle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;

    .comands-wrapper{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;


        background-color: #FCFCFD;
        width: 100px;
        height: 30px;
        border: 1px #170C3A solid;;
        border-radius: 2px;
        cursor: pointer;
        font-weight: bold;

        img{
            height: 15px;
            margin-right: 15px;
            transform: rotate(45deg)
        }
    }



`