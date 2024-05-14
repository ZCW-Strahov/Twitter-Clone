import axios from 'axios';

const BASE_URL = 'http://localhost:8315/api';

interface User {
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  activated: boolean;
  langKey: string;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  authorities: string[];
  password: string;
}

export const registerUser = async (
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
): Promise<any> => {
  try {
    const user: User = {
      login: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      imageUrl:
        'https://img.freepik.com/free-vector/hot-dog-street-snack-isolated-transparent_107791-18353.jpg?w=1060&t=st=1714324927~exp=1714325527~hmac=8ef5f90c36e8dc6eb35cfc88ef2ecc0b187375d5d9414ea19bf85727f754c1e9',
      activated: true,
      langKey: 'en',
      createdBy: 'admin',
      createdDate: new Date().toISOString(),
      lastModifiedBy: 'admin',
      lastModifiedDate: new Date().toISOString(),
      authorities: ['ROLE_USER'],
      password: password,
    };
    console.log(user);
    const response = await axios.post<any>(`${BASE_URL}/register`, user);

    //console.log('Response data:', response.data); // Log response data

    return response.data;
  } catch (error) {
    //console.error('Sign up error:', error.response || error.message);
    throw error;
  }
};

// export const loginUser = async (username: string, password: string): Promise<any> => {
//   try {
//     const response = await axios.post<any>(`${BASE_URL}/authenticate`, {
//       username,
//       password
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
