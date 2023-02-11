import * as React from "react";
import { Fragment, ReactElement } from "react";
import { Helmet } from "react-helmet";

const App = (): ReactElement => (
    <Fragment>
        <Helmet>
            <title>Workouts</title>
        </Helmet>
        <h1>Hello World!</h1>
    </Fragment>
);

export { App };
