import Event from './Event';

const Events = ({events}) => (  
    
    <div className="list-group">
        { events.map( event => (
            <Event
                key={event.id}
                event={event}
            />
        ) ) }
    </div>
);
 
export default Events;