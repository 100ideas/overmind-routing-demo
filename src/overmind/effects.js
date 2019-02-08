import page from "page";
import axios from "axios";

export const router = {
  route(route, action) {
    page(route, ({ params }) => action(params));
  },
  start: () => page.start(),
  open: url => page.show(url)
};

export const api = {

  async getUsers() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");

    let users = res.data;
    let deleteKeys = ['address', 'phone', 'website', 'company', 'email']
    
    // simulate "minimal" user api endpoint
    users.map( user =>
      deleteKeys.map( key => 
        delete user[key]
      )
    )
    return users
  },

  async getUserWithDetails(id) {
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    data = {
      id: data.id,
      name: data.name,
      details: {
        email: data.email,
        bio: data.company.catchPhrase,
        address: data.address
      }
    }

    return data
    
  }
};
