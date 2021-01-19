// Styles
import "./custom_button.styles.scss";

const CustomButton = ( {children, isGoogle, ...otherProps} ) => (
    <button className={`custom_button ${isGoogle ? "google" : "" }`} {...otherProps}>
        { children }
    </button>
)

export default CustomButton;