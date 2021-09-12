// Styles
import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ( {children, ...otherProps} ) => (
    <CustomButtonContainer {...otherProps} className="custom-button">
        { children }
    </CustomButtonContainer>
)

export default CustomButton;