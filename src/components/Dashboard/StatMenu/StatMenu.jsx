import {
    StatMenuContainer,
    List,
    ListItem,
    Number,
    ImageContainer,
    Text,
    InfoContainer,
    CurrentCurrency
} from "./StatMenu.styled.js";
import {useCode} from "../../../currencyContext.jsx";
import {getCurrencies, currencyConvert} from "../../../utils/currency-serivce.js";
import {useEffect, useState} from "react";
import CurrenciesList from '../CurrenciesList/CurrenciesList.jsx'

const StatMenu = ({
                      data,
                      onCurrencyClick,
                      earning,
                      curList,
                      curListShow,
                      setCurListShow,
                      symbol,
                      spendMo,
                      sales,
                      balance
                  }) => {
    const {code} = useCode()

    return <StatMenuContainer>
        <List>
            <ListItem>
                <ImageContainer></ImageContainer>
                <InfoContainer>
                    <Text>Earnings</Text>
                    <Number>
                        {`${symbol}${Math.trunc(earning * 100) / 100}`}
                    </Number>
                </InfoContainer>
            </ListItem>
            <ListItem>
                <ImageContainer></ImageContainer>
                <InfoContainer>
                    <Text>Spend this month</Text>
                    <Number>
                        {`${symbol}${Math.trunc(spendMo * 100) / 100}`}
                    </Number>
                </InfoContainer>
            </ListItem>
            <ListItem>
                <InfoContainer>
                    <Text>Sales</Text>
                    <Number>
                        {`${symbol}${Math.trunc(sales * 100) / 100}`}
                    </Number>
                </InfoContainer>
            </ListItem>
            <ListItem onClick={() => setCurListShow(!curListShow)}>
                <InfoContainer>
                    <Text>Your balance</Text>
                    <Number>
                        {`${symbol}${Math.trunc(balance * 100) / 100}`}
                    </Number>
                    <CurrentCurrency>{code}</CurrentCurrency>
                    {curListShow && <CurrenciesList onClick={onCurrencyClick} list={curList}/>}
                </InfoContainer>
            </ListItem>
            <ListItem>
                <ImageContainer></ImageContainer>
                <InfoContainer>
                    <Text>New Tasks</Text>
                    <Number>
                        154
                    </Number>
                </InfoContainer>
            </ListItem>
            <ListItem>
                <ImageContainer></ImageContainer>
                <InfoContainer>
                    <Text>Total Projects</Text>
                    <Number>
                        2935
                    </Number>
                </InfoContainer>
            </ListItem>
        </List>
    </StatMenuContainer>
}

export default StatMenu