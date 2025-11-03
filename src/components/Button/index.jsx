import PropTypes from 'prop-types'
import Button from "./styles.js"

export function DefaultButton({children, theme,  ...props}){
   console.log(props);
   
    
    return(
        <Button {...props} theme={theme} >{children}</Button>
    )
}

DefaultButton.PropTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string,
    
}
export default DefaultButton