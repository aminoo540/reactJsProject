import React, {Component} from 'react';
import CardsList from './CardsList';
import {BOATS_OFFERS} from '../constants/boatsOffers';
import {DatabaseClient} from "../modules/databaseHandler";

//import {api} from "../utils/api";

/**
 * todo : to add loading gif
 */
class App extends Component {
    constructor() {
        super();
        this.client = new DatabaseClient();
        this.state = {
            boatOffers: BOATS_OFFERS,
            isLoading: true
        }
    }

    componentDidMount() {
        this._requestBoatOffers().catch((err) => console.error('err', err))
    }


    //todo to request offers using the query
    _requestBoatOffers = async () => {
        //    const result = await api.getData(this.client, '/listZizooChallengeOffers', {query: "query"});
        //todo to validate & save request result into local state and switch off loading if exists or show error popup
        this.setState({
            isLoading: false
        });
    };


    render() {
        const {isLoading, boatOffers} = this.state;
        if (isLoading) {
            return null;
        }
        return <CardsList boats={boatOffers}/>;
    }
}

export default App;
