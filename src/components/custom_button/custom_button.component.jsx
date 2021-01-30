// Styles
import "./custom_button.styles.scss";

const CustomButton = ( {children, isGoogle, inverted, ...otherProps} ) => (
    <button className={`custom-button ${isGoogle ? "google" : "" } ${inverted ? "inverted" : ""}`} {...otherProps}>
        { children }
    </button>
)

export default CustomButton;