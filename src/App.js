import React from 'react';
import jsonServerProvider from 'ra-data-json-server'; // Fetching the JSON-Data
import { Admin, Resource } from 'react-admin'
import { PostList, PostEdit, PostCreate } from './posts'; // Customizing the EditGuesser
import { UserList } from './users'; // Customizing the ListGuesser
import PostIcon from '@material-ui/icons/Book'; // Customizing the menu icon
import UserIcon from '@material-ui/icons/Group'; // Customizing the menu icon
import Dashboard from './Dashboard'; // Customizing the Dashboard
import authProvider from './authProvider'; // To enable authentication strategy

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => ( // <Resource name="users" list={ListGuesser} />
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin >
);

export default App;