import * as React from "react";
import { Fragment, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app-routes";

const App = (): ReactElement => (
    <Fragment>
        <Helmet>
            <title>Workouts</title>
        </Helmet>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Fragment>
);

export { App };
