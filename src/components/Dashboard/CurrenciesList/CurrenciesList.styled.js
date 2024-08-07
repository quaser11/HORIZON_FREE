import styled from "@emotion/styled";

export const ListContainer = styled.div`
    position: absolute;
    top: 90px;
    left: -35px;
    width:243px;
    max-height:183.2px;
    border-radius: 20px;
    overflow: auto;
`

export const ListItem = styled.div`
    background-color: var(--components-color);
    color:var(--text-color);
    padding:20px 12.79px 23px 17px;
    text-align:right;
    cursor:pointer;
    
    font-size:18px;
    line-height:1.6;
    
    &:not(:last-child){
        border-bottom:1px solid var(--dashboard-bg-color);
    }
`