const Value = ({value}) => {

    //get data
    const { price, percent_change_1h, percent_change_7d, percent_change_24h } = value;

    return (  
        <div className="card text-white bg-info mb-3">
            <div className="card-header">
                Bitcoin Value
            </div>

            <div className="card-body">
                <h4 className="card-title">Current Value: ${ price }</h4>

                <div className="d-md-flex justify-content-between" >
                    <p className="card-text">
                        <span className="font-weight-bold">Last Hour:  </span> {percent_change_1h} %
                    </p>

                    <p className="card-text">
                        <span className="font-weight-bold">7 Days Ago: </span> {percent_change_7d} %
                    </p>

                    <p className="card-text">
                        <span className="font-weight-bold">Last 24 Hours: </span> {percent_change_24h} %
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Value;