import React, {useState} from 'react';

const ListForm = props => {

    const [list, setList] = useState({
        name: "",
        email: "",
        role: ""
    })


    //onChange handler to control inputs

    const handleChanges = e => {
        setList({ ...list, [e.target.name]: e.target.value})
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(list);
        setList({ name: "", email: "", role: ""})
    }

    return(
        <form onSubmit = {submitForm}>
            <label htmlFor="name">Team Member Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={list.title}
            />
            <label htmlFor="email">Team Member Email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={list.email}
            />
            <label htmlFor="role">Team Member Role</label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={handleChanges}
                value={list.role}
            />
            <button type="submit">Add Member</button>
        </form>
    )

}

export default ListForm;

