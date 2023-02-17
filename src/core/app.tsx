import * as React from "react";
import { Fragment, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app-routes";
import { IntlWrapper } from "./i18n/intl-wrapper";

const App = (): ReactElement => (
    <Fragment>
        <Helmet>
            <title>Workouts</title>
        </Helmet>
        <IntlWrapper>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </IntlWrapper>
    </Fragment>
);

export { App };
