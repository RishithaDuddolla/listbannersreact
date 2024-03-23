import './index.css'

const BoxComponent = props => {
  const {userdeets} = props
  const {headerText, discription, className} = userdeets

  return (
    <li className={`${className} bannercard`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="discription">{discription}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BoxComponent
