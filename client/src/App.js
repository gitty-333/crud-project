import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import TodosList from './todos/TodosList';
import AddTodos from './todos/AddTodos';
import Layout from './common/Layout';
import PostsList from './posts/PostsList';
import AddPosts from './posts/AddPosts';
import UsersList from './users/UsersList';
import AddUsers from './users/AddUsers'
import UpdatePost from './posts/UpdatePost';
import TodosFrom from './todos/TodosFrom';
import UpDateTodos from './todos/UpDateTodos';
import UpdateUser from './users/UpdateUser'
import PostsFrom from './posts/PostsFrom'
import UsersFrom from './users/UsersFrom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path='/todos'element={<TodosList />}/>
          <Route path='/todos/add'element={<AddTodos />}/>
          <Route path='/todos/UpdateTodos'element={<UpDateTodos/>}/>
          <Route path='/todos/:_id'element={<TodosFrom/>}/>
          <Route path="/posts" element={<PostsList/>}/>
          <Route path="/posts/add" element={<AddPosts/>}/>
          <Route path="/posts/updatePost" element={<UpdatePost/>}/>
          <Route path="/posts/:_id" element={<PostsFrom/>}/>
          <Route path="/users" element={<UsersList/>}/>
          <Route path="/users/add" element={<AddUsers/>}/>
          <Route path="/users/updateUser" element={<UpdateUser/>}/>
          <Route path="/users/:_id" element={<UsersFrom/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
