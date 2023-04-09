import styled from "styled-components";

export const Container = styled.main`
    background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: .5rem;
	box-shadow:  0px 2rem 5rem rgba(0, 0, 0, 0.8);


    .hide{
        display: none;
    }
    button{
        cursor: pointer;
    }

    div{ 
        display: flex;
	    align-items: center;
	    justify-content: center;
	    flex-direction: column;

        h1{
            font-family: 'Montserrat', sans-serif;
	        color: #34355B;
	        font-size: 2.4rem;
	        line-height: 2.92rem;
	        width: 25.8rem;
	        text-align: center;
        }
     
    }
`

export const LandPage = styled.div`
    display: flex;
	flex-direction: column;
	width: 42.8rem;
	height: 42.2rem;

    button{
        border: none;
        background-color: transparent;
    }

    button:hover{
        position: relative;
		animation: treme 0.25s;
		animation-iteration-count: 15;
    }

    p{
	  margin: 1.4rem 0 2rem 0;
	  color: #34355B;
	  font-family: 'DM Sans', sans-serif;
	  font-size: 1.5rem;
	  align-self: center;
	}

    @keyframes treme {
        0% { transform: translate(.5rem, 1rem); }
	    25% { transform: translate(-.1rem, .3rem); }
	    50% { transform: translate(0, .1rem); }
	    75% { transform: translate(1rem, -.5rem); }
	    100% { transform: translate(0, 0); }
    }

`

export const LuckPage = styled.div`
    width: 42.8rem;
	height: 56.4rem;

    .hide{
        display: none;
    }
    p{
        font-family: 'Dancing Script', sans-serif;
        font-size: 2.4rem;
        line-height: 2.9rem;
        text-align: center;
        margin: 1.7rem 4.8rem;
        background: #E4EDF1;
        box-shadow: .2rem .2rem .2rem rgba(85, 85, 85, 0.5);
        width: 29.3rem;
        animation: showUp 2s;
        animation-iteration-count: 1;
        animation: showUp 1.5s;
	    animation-iteration-count: 1;
    }

    div:nth-of-type(2){
        height: 20rem;
	    margin-bottom: 1.7rem;
    }

    button{
        border: none;
        background: #FF9500;
        font-family: 'DM Sans', sans-serif;
        color: #FFFFFF;
        border-radius: .4rem;
        width: 17.4rem;
        height: 5.2rem;
    }
        
    button:hover{
	    background: #b36a04;
    }
    
    @keyframes showUp {
        0% { transform: translate(0, 35rem);}
        0% {scale: .6;}
        100% { transform: translate(0, 0); }
        100% {scale: 1;}
    } 

`


