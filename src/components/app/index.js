import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from '../navbar';
import ButtonList from '../button-list/';
import HelpPage from '../help-page';
import {ContractPO, ContractLicense, ContractAlienation, Confident, 
    ModelSecure, OrderPO, OrderPD, EmptyComp} from '../template-page';  
import './app.css';



const App = () => {
    return (
        <div className="app">
            <Router>
                    <div className="jumbotron search-group">
                            <Navbar/>
                        <div className="open">
                            <Route path='/' component={ButtonList} exact/>
                            <Route path="/help" component={HelpPage} />
                            <Route path="/confident" component={Confident} />
                            <Route path="/contract-po" component={ContractPO} />
                            <Route path="/contract-license" component={ContractLicense} />
                            <Route path="/model-secure" component={ModelSecure} />
                            <Route path="/order-po" component={OrderPO} />
                            <Route path="/contract-alienation" component={ContractAlienation} />
                            <Route path="/order-pd" component={OrderPD}/>
                            <Route path="/empty-comp" component={EmptyComp}/>
                        </div>
                    </div>
            </Router>
        </div>
    )
}

export default App;
