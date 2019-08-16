import News from './News';

const NewsList = ({newsList}) => {
    return (  
        <div className="row" >
            {newsList.map( news => (
                <News
                    key={news.url}
                    news={news}
                />
            ) )}

        </div>
    );
}
 
export default NewsList;