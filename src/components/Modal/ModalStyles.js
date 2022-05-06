import styled from "styled-components";


export const ModalStyles = styled.div`
  
    width: 100%;;
    height: 100vh;
    background-color: rgba(0, 0, 0, .8);
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;



    .modal-box{
        width: 500px;
        min-height: 350px;
        display: flex;
        background-color: white;
        margin: 120px auto;

        flex-direction: column;
        padding: 10px 30px;

    }

    form{
        display: flex;
        flex-direction: column;
        /* justify-content: flex-start */
        text-align: left;
        /* align-items: left; */
    }

    form input,
    form textarea{
        margin-bottom: 20px;
    }

    form label{
        margin-bottom: 5px;
    }

    form #addButton{
        width: 20%;
        display: block;
        align-self: flex-end;
        
        
    }



`