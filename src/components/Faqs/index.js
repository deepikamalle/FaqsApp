import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqList} = this.props
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">FAQS</h1>
          <ul className="faqs-list">
            {faqList.map(eachItem => (
              <FaqItem key={eachItem.id} faqDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
