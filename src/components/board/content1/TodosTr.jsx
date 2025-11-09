const TodosTr = ({ post }) => {
    const { id, title, ticket, date } = post;

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>
                <p> {ticket}</p>
            </td>
        </tr>
    );
};

export default TodosTr;
