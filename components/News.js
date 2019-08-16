const News = ({news}) => {

    //get datas
    const { urlToImage, url, title, description, source } = news;

    const renderDefaultImg = e => {
        e.preventDefault();

        e.target.src='http://pathobiologyresearch.com/wp-content/uploads/News.jpg';
    }

    var image = '';
    
    if( urlToImage !== '' )
        image = <img src={urlToImage} alt={title} onError={renderDefaultImg} className="card-img-top" />;
    
    else
        image = <img src="http://pathobiologyresearch.com/wp-content/uploads/News.jpg" alt={title} className="card-img-top" />;

   

    return (  
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {image}
                </div>

                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url} className="btn btn-success d-block">More</a>
                </div>
            </div>
        </div>
    );
}
 
export default News;