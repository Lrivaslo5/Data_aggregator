// this component populates based on wether we are deailing with detail or batch item 

function Item({props, option}) {
  const {batchID, status,ranOn,source}= props

  if (option == 'main')
    return ( 
        <div id = "batch-items">
        <div id = "item">
          <img className = 'item__checkbox'src = 'src/assets/dashboard/unchecked.svg'/>
          <div id = "batch">{batchID}</div>
          <div id = "imported">
            <h4>{status.items} Items</h4>
            <div id = "import-widget">
              <p>100%</p>  {/* use state to keep track of percentage over items??*/}
              <div id = "progress-bar"></div>
            </div>
          </div>
          <div id = "status">
            <div id ="status-message">
              <p>{status.current}</p>
            </div>
            <div id = "errors"><p>this status</p></div>
          </div>
          <div className = 'item__col4'>{status.successes} [{status.errors}]</div>
          <div className = 'item__col5'>{source}</div>
          <div className = 'item__col6'>{ranOn}</div>
        </div>
      </div>
    )
  else if(option == 'detail') 
    return(
    <div>
      <p>fuck</p>
    </div>
    )
}

export default Item
  
