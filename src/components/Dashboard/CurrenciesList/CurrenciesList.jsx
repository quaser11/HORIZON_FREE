import {ListContainer, ListItem} from './CurrenciesList.styled.js';

const currencies = ['EUR', 'ALL', 'DZD']
const CurrenciesList = ({onClick, list}) => {

    const currencies = Object.entries(list).map(([key, value]) => {
        if(value.id){
            return <ListItem key={key} onClick={(e) => onClick(value['short_code'], value.symbol)}>{value['short_code']}</ListItem>
        }
    })
    return <ListContainer>
        {currencies}
    </ListContainer>;
}

export default CurrenciesList