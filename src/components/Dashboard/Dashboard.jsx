import {DashboardContainer} from "./Dashboard.styled.js";
import Title from "./Title/Title.jsx";
import StatMenu from "./StatMenu/StatMenu.jsx";
import {getCurrencies, currencyConvert} from "../../utils/currency-serivce.js";
import {useEffect, useState} from "react";
import {useCode} from "../../currencyContext.jsx";

const Dashboard = ({data}) => {
    const {stats} = data
    const {code, changeCode} = useCode();
    const [curListShow, setCurListShow] = useState(false);
    const [earning, setEarning] = useState(stats.earnings);
    const [spendMo, setSpendMo] = useState(stats['spend_mo']);
    const [sales, setSales] = useState(stats.sales);
    const [balance, setBalance] = useState(stats.balance);
    const [symbol, setSymbol] = useState('$');
    const [curList, setCurList] = useState({});

    useEffect(() => {
        if (code !== 'USD') {
            currencyConvert(code, earning).then(res => setEarning(res.data.value));
            currencyConvert(code, spendMo).then(res => setSpendMo(res.data.value));
            currencyConvert(code, sales).then(res => setSales(res.data.value));
            currencyConvert(code, balance).then(res => setBalance(res.data.value));
        }
    }, [code])

    const onCurrencyClick = (currency, symbol) => {
        changeCode(currency);
        setSymbol(symbol);
    }

    useEffect(() => {
        if(curListShow){
            getCurrencies().then(res => setCurList(res.data));
        }
    }, [curListShow])

    return <DashboardContainer>
        <Title title={data.title}/>
        <StatMenu onCurrencyClick={onCurrencyClick} earning={earning} curList={curList}
                  curListShow={curListShow} setCurListShow={setCurListShow} symbol={symbol} spendMo={spendMo} sales={sales} balance={balance}/>
    </DashboardContainer>;
}

export default Dashboard;