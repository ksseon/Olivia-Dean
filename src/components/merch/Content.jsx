import MerchList from './MerchList';
import { ContentStyle } from './style';

const Content = () => {
    return (
        <ContentStyle>
            <div className="inner">
                <h2>Merch</h2>
                <MerchList />
            </div>
        </ContentStyle>
    );
};

export default Content;
