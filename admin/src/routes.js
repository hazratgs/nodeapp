import React from 'react';
import { Route } from 'react-router';

import Root from './containers/Root';
import Pages from './containers/Pages';

// import Publications from './containers/Publications';
// import PublicationsList from './containers/Publications/modules/List';
// import NotFound from './components/NotFound';

export default (
    <Route path='/' component={Root}>
        {/*<IndexRedirect to='pages' />*/}
        <Route path='pages' component={Pages}/>
        {/*<Route path="publications" component={Publications}>*/}
            {/*<IndexRedirect to='list' />*/}
            {/*<Route path='list' component={PublicationsList} />*/}
        {/*</Route>*/}
        {/*<Route path='*' component={NotFound} />*/}
    </Route>
);
