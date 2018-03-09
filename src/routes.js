import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import Home from './components/home/home';
import Library from './components/library/library';
import Archive from './components/archive/archive';
import BlankPage from './components/blankpage/blankpage';



export default function Router() {
    return (

        <Switch>
            <Route path="/" component={Home} exact />
            {/* 42J */}
            <Route path="/library" children={(props) => (
                props.match
                    ? <Archive /> : <BlankPage />
            )} />
            {/* 42J */}
            <Route path="/archive/:id" component={Archive} />
        </Switch >

    )
}