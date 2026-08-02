import axios from 'axios';

const client = axios.create({ baseURL: 'https://randomuser.me/api/' });

export const fetchEmployees = async (results = 50) => {
  const { data } = await client.get(`?results=${results}&seed=hrdash`);
  return data.results.map((u) => ({
    id: u.login.uuid,
    fullName: `${u.name.first} ${u.name.last}`,
    firstName: u.name.first,
    email: u.email,
    phone: u.phone,
    gender: u.gender,
    country: u.location.country,
    age: u.dob.age,
    picture: u.picture,
    registeredDate: u.registered.date,
  }));
};