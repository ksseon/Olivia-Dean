import TodosTr from './TodosTr';
import { TodosStyle } from './style';

const TodosTable = ({ currentPosts, loading }) => {
    if (loading) {
        return <div>loading...</div>;
    }
    return (
        <TodosStyle>
            <caption></caption>
            <table>
                <colgroup>
                    <col className="id" />
                    <col className="title" />
                    <col className="date" />
                    <col className="ticket" />
                </colgroup>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Ticket</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {currentPosts.map((post) => (
                        <TodosTr key={post.id} post={post} />
                    ))}
                </tbody>
            </table>
        </TodosStyle>
    );
};

export default TodosTable;
