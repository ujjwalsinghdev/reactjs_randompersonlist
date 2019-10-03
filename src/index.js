import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'



const Person = ({ img, name, job, children }) => {

    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`



    return (
        <article className="person" >
            <img src={url} alt="person image" />
            <h2>{name}</h2>
            <h1>{job}</h1>
            {children}
        </article>

    )
}





const PersonList = () => {
    return (
        <section className="personlist">
            <Person img="34" name="Melvin Howell" job="developer" />

            <Person img="22" name="Norman Dean" job="designer">
                <p>Hello i am excellent designer </p>

            </Person>
            <Person img="56" name="Louis Erickson" job="intern" />

        </section>
    )
}


ReactDOM.render(<PersonList />, document.getElementById('root'))