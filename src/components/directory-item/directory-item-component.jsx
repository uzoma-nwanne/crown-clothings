import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item-style';
import { useNavigate } from 'react-router-dom';



const DirectoryItem = ({category}) =>{
    const { title, imageUrl, route } = category;
    const navigate = useNavigate();
    const navigateHandler = ()=> navigate(route);
    return(
        <DirectoryItemContainer onClick={navigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;