import Todos from '../components/board/content1/Todos';
import TodosVisual from '../components/board/content1/TodosVisual';
import { Container } from './style';

const Board = () => {
    return (
        <Container>
            <TodosVisual />
            <Todos />
        </Container>
    );
};

export default Board;
