import './index.css'

const TabItem = props => {
  const {tabDetails, onActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabId = () => {
    onActiveTabId(tabId)
  }

  const tabIdClassName = isActive && 'active-tab-btn'

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabIdClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
