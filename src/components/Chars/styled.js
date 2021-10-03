import styled from 'styled-components';

export const AreaItems = styled.section`
    
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h2{
        margin: 0px 0px 0px 30px;
    }

    .list-area{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    .list-area--item{
        width: 200px ;
        margin: 30px;
        cursor: pointer;

        &:hover .list-area--info{
            display: flex; 
        }
    }

    .list-area--item img{
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .list-area--name{
        padding: 5px;
        background-color: #DDD;
        color: #222;
        border-radius: 0 0 3px 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .list-area--name p{
        font-weight: bold;
    }

    .list-area--info{
        width: 200px;
        height: 300px;
        padding: 10px;
        background-color: #DDD;
        color: #222;
        text-align: left;
        opacity: .9;
        position: absolute;
        display: none;
        flex-direction: column;
        animation: go-back 0.8s;
    }

    .list-area--info span{
        font-weight: bold;
    }

    .list-area--info p{
        margin: 5px 0;
    }


    @keyframes go-back {
        0% {
            transform: translateY(-80px);
        }
        100% {
            transform: translateY(0);
        }
    }


    @media (max-width: 820px) {
        .list-area {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 500px) {
        .list-area {
            grid-template-columns: 1fr;
        }
        .list-area img {
            width: 100%;
            height: 300px;
            object-fit: contain;
        }
    }
`;
