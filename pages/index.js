import Master from '../components/Master';
import axios from 'axios';

const Index = (props) => (
    <Master>
        <div className="row">
            <div className="col-12">
                <h2>Bitcoin Value</h2>
            </div>

            <div className="col-md-8">
                <h2>Bitcoin News</h2>
            </div>

            <div className="col-md-4">
                <h2>Future Bitcoin Events</h2>
            </div>
            {console.log(props)}
        </div>
    </Master>
);

Index.getInitialProps = async () => {
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC`;

    const reqOptions = {
        headers: {
            "X-CMC_PRO_API_KEY": "b181ee87-a790-4eae-871b-64ce761b21b9",
            "Accept-Encoding": "deflate"
        },
        gzip: true
    }

    const response = await axios.get(url, reqOptions);
    // try {
        
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }

    return {
        bitcoinPrice: response.data
    }
}

export default Index;