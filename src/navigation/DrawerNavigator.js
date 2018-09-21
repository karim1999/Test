import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
// import AppTabNavigator from './appTabNavigator'
// import Loading from '../components/spinner'
// import Header2 from "../components/Header2";
import AccountType from "../screens/App/accountType";
import CarType from "../screens/App/CarType";
import DriverForm from "../screens/App/DriverForm";
import UserForm from "../screens/App/Form";
import ReportForm from "../screens/App/reportForm";
import Talabaty from "../screens/App/talbaty";
import Complainings from "../screens/App/complainings";
import Policy from "../screens/App/Policy";
import Invite from "../screens/App/Invite";
import OrderNow from "../screens/App/orderNow";
import Map1 from "../screens/App/map";

import { strings, currentLocale } from '../i18n';

const DrawerNavigator = createDrawerNavigator(
    {
        AccountType:
        {
            screen: AccountType,
        },
        CarType:
        {
            screen: CarType,
        },
        DriverForm:
        {
            screen: DriverForm,
        },
        UserForm:
        {
            screen: UserForm,
        },
        ReportForm:
        {
            screen: ReportForm,
        },
        Talabaty:
        {
            screen: Talabaty,
        },
        Complainings:
        {
            screen: Complainings,
        },
        Invite:
        {
            screen: Invite,
        },
        Policy:
        {
            screen: Policy,
        },
        OrderNow:
        {
            screen: OrderNow,
        },
        Map1:
        {
            screen: Map1,
        },

    },
    {
        // drawerPosition: currentLocale == 'ar' ? 'left' : 'right',
        initialRouteName: 'Map1',
    }
);
export default DrawerNavigator;
