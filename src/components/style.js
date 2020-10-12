import styled, { keyframes } from "styled-components";
// Importing styled component and key frames
import { ReactComponent as Search } from '../icons/search.svg'
import { ReactComponent as Info } from '../icons/info.svg'
import { ReactComponent as Cancel } from '../icons/cancel.svg'
// Importing 3 svg files as ReactComponents
import { motion } from "framer-motion"
// Importing framer-motion
export const FullPage = styled.div`
background-color:#141419;
height:100vh;
width:100%;
display:flex;
flex-direction:column;
`

export const TitlePage = styled.h1`
font-family:RussoOne;
color:#CCCC00;
text-align:center;
text-transform :uppercase;
letter-spacing: 2px;
font-size:40px;
margin: 25px  0;
@media (max-width: 570px){
    margin:10px 0;
    font-size:30px;
}
`
export const SearchDiv = styled.div`
background-color:#FFFFFF;
display: flex;
flex-direction: row;
width:400px;
justify-content: flex-end;
padding: 5px;
align-self: flex-end;
margin: 0 30px;
border-radius: 30px;
margin-bottom: 3vh;
@media (max-width: 750px) { 
width: 60vw;
}
@media (max-width: 500px){
    align-self:center;
    margin-left:0;
    margin-right:0;
    width: 95%;
}
`
export const SearchSpan = styled.span`
padding: 2px;
margin-right: 6px;
outline: none;
background: none;
border: none;
`

export const SeachSymbol = styled(Search)`
width:30px;
height:30px;
fill:#464646;
`


export const StyledInput = styled.input`
font-family:Play;
color:#3D3D3D;
text-transform: capitalize;
font-size:25px;
padding:0 5px;
width:100%;
margin: 0 5px;
border:none;
&:focus{
outline:none;
}
&::placeholder{
color:#7A7A7A;
}
`

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoadingScreen = styled.div`
border: 10px solid #FFFFFF;
border-radius: 100%;
border-top-color:#CCCC00;
padding:15px;
align-self:center;
margin-top:40px;
animation: ${loadingAnimation} 2s linear infinite;
`

export const AllCharactersUL = styled(motion.ul)`
    list-style-type: none;
    padding: 0;
    align-self: center;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap:10px;
    width: 95%;
    margin-top:3vh;
    @media (max-width: 500px){
        grid-template-columns:auto;
    }
    @media (min-width: 500px) and (max-width: 800px){
        grid-template-columns:auto auto;
    }
`

export const OneCharacterLI = styled.li`
display:flex;
height: fit-content;
flex-direction:row;
justify-content: space-between;
align-items: center;
padding:10px;
background-color: #313131;
border-radius: 40px;
`
export const InfoSymbol = styled(Info)`
width:25px;
height:25px;
fill:#FFFFFF;
`

export const InfoButton = styled.button`
padding: 2px;
outline: none;
cursor:pointer;
background: none;
border: none;
&:disabled{
    cursor: auto;
}
`
export const CharacterNameLI = styled.h3`
    letter-spacing: 1px;
    font-family: Play;
    color: #FFFFFF;
    text-align: center;
    margin:0 5px;
    font-size:20px;
`

export const AboveDiv = styled.div`
align-self: center;
display: flex;
width: 100%;
justify-content: center;
`

export const SelectedCharDiv = styled(motion.div)`
display:flex;
height: fit-content;
flex-direction:column;
justify-content: flex-start;
align-items: center;
background-color: #313131;
width: 91%;
align-self: center;
margin: 20px 0;
border-radius: 40px;
height: 0;
margin:0;
`

export const SelectedCharName = styled.h2`
    height:fit-content;
    letter-spacing: 1px;
    font-family: Play;
    color: #FFFFFF;
    text-align: center;
    margin:0 5px;
    font-size:35px;
     @media (max-width: 500px){
        font-size:30px;
    }

`

export const NameAndButtonDiv = styled.div`
    height: 70px;
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    transition: 0.5s;
    @media (max-height: 480px){
    align-items:center;
    height:60px;
}
`

export const CancelButton = styled.button`
border: none;
outline:none;
background-color:#990000;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
border-radius:30px;
cursor:pointer;
`

export const CancelSymbol = styled(Cancel)`
fill:#FFFFFF;
width: 30px;
height: 30px;
@media (max-width: 500px){
    width: 15px;
    height: 15px;
}
@media (max-height: 480px){
    height:15px;
    width:15px;
}
`

export const InfoText = styled.p`
color:#FFFFFF;
font-family: Play;
font-size:20px;
padding: 5px;
margin:0;
`

export const InfoTextDiv = styled.div`
    height: 60vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    transition: 0.5s;
    width:88%;
@media (max-height: 480px){
   justify-content:flex-start;
}
`