import { useState } from 'react'
import { JSONfetch } from '../api/fetch'


interface UserInfo {
    name: string
    address: UserAddress
}

interface UserAddress {
    street: string
    city: string
    zipcode: string
}

const About = () => {
    const [usersData, setUsersData] = useState<any>([])
    const fetchUser = async () => {
        const data = await JSONfetch();
        console.log(JSON.stringify(data, null, 2));
        setUsersData(data)
    }

    return (
        <div>
            <h1>About page</h1>
            <button className="button is-primary" onClick={fetchUser}>Fetch data</button>
            <table className="table table-fetch">
                <thead>
                    <tr>
                        <th></th>
                        <th><abbr title="Name">Name</abbr></th>
                        <th><abbr title="street">Street</abbr></th>
                        <th><abbr title="city">City</abbr></th>
                        <th><abbr title="zipcode">Zip code</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((user: UserInfo, idx: number) => (
                            <tr key={idx}>
                                <td></td>
                                <td>{user.name}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default About;