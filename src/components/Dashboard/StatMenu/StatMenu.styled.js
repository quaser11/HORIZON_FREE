import styled from "@emotion/styled";

export const StatMenuContainer = styled.div``

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap:20px;
    padding-left: 0;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    background-color: var(--components-color);
    width:249px;
    height:95px;
    padding:20px 12.79px 23px 17px;
    border-radius:20px;
    
     &:nth-of-type(4) {
        cursor:pointer
     }
     
     &:nth-of-type(5) span:nth-of-type(2){
        font-size:18px;
        line-height:1.6;
     }
     
     &:nth-of-type(5) div:nth-of-type(1){
        background: rgb(68,129,235);
        background: linear-gradient(90deg, rgba(68,129,235,1) 0%, rgba(4,190,254,1) 100%);
     }
`

export const Number = styled.span`
   font-size:24px;
   width:144px;
   line-height:1.22;
   color:var(--text-color);
   overflow:auto;
`

export const InfoContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    margin-left:18px;
    width:100%;
`

export const ImageContainer = styled.div`
    min-width:56px;
    height:56px;
    border-radius:50%;
    
    background-color:var(--dashboard-bg-color);
`

export const Text = styled.span`
    font-size:14px;
    line-height:1.7;
    font-weight:500;
    
    color:var(--sec-text-color)
`

export const CurrentCurrency = styled.span`
    position:absolute;
    top: 1em;
    right:0;
    color:var(--text-color);
    font-size:18px;
    line-height:1.6;
`