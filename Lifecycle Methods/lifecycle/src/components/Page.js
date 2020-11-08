import React from 'react'
import {Route , Switch} from 'react-router-dom'

import Discussion from './Discussion'
import Workflow from './Workflow'
import Rules from './Rules'

const Page = () => {
    return (
        <div>
            <Switch>
                {/*Two different ways of doing the same thing */}
                
                <Route exact path="/workflow" component={Workflow} />

                <Route exact path="/">
                    <Discussion/>
                </Route>

                <Route exact path="/rules" component={Rules} />
            </Switch>
        </div>
    )
}
export default Page;