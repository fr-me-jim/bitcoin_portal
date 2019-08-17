import Master from '../components/Master';
import Value from '../components/Value';
import NewsList from '../components/NewsList';
import Events from '../components/Events';

import axios from 'axios';

const Index = (props) => (
    <Master>
        <div className="row">
            <div className="col-12">
                <h2>Bitcoin Value</h2>

                <Value 
                    value={props.bitcoinValue}
                />
            </div>

            <div className="col-md-8">
                <h2 className="my-4" >Bitcoin News</h2>

                <NewsList
                    newsList={props.bitcoinNews}
                />
            </div>

            <div className="col-md-4">
                <h2 className="my-4" >Future Bitcoin Events</h2>

                <Events
                    events={props.bitcoinEvents}
                />
            </div>
        </div>
    </Master>
);

Index.getInitialProps = async () => {
    const urlValue = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC`;
    const urlNews = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-16&sortBy=publishedAt&apiKey=323c894f6d7443dea2613c06482e22e3&language=en`;
    const urlEvents = `https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=USA&token=QNFXWPO7LASB3UPIPC6P`;

    const reqOptions = {
        headers: {
            "X-CMC_PRO_API_KEY": "b181ee87-a790-4eae-871b-64ce761b21b9",
            "Accept-Encoding": "deflate"
        },
        json: true,
        gzip: true
    }

    
    // try {
        
    // } catch (error) {
    //     console.log(error);
    //     return {
    //         bitcoinValue: {},
    //         bitcoinNews: [],
    //         bitcoinEvents: []
    //     }
    // }

    const responseValue = await axios.get(urlValue, reqOptions);
    const responseNews = await axios.get(urlNews);
    const responseEvents = await axios.get(urlEvents);

    return {
        bitcoinValue: responseValue.data.data.BTC.quote.USD,
        bitcoinNews: responseNews.data.articles,
        bitcoinEvents: responseEvents.data.events
    }
    
    
}

export default Index;