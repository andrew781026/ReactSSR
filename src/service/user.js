import axios from 'axios';


class UserService {

    async getUsers() {
        const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
        return res.data;
    }

}


export default UserService;
