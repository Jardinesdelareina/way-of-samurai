import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import Calculator from './Calculator'

const mapStateToProps = (state) => ({})

const CalculatorContainer = compose(withAuthRedirect, connect(mapStateToProps, {}))(Calculator)

export default CalculatorContainer