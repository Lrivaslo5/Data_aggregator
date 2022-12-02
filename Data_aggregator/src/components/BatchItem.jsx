
// Refactor this component so that it is reusable
// 

function BatchItem() {
    return ( 
        <div id = "batch-items">
        <div id = "item">
          <img className = 'item__checkbox'src = 'src/assets/dashboard/unchecked.svg'/>
          <div id = "batch">#32132320</div>
          <div id = "imported">
            <h4>250 Items</h4>
            <div id = "import-widget">
              <p>100%</p>
              <div id = "progress-bar"></div>
            </div>
          </div>
          <div id = "status">
            <div id ="status-message">
              <p>Status</p>
            </div>
            <div id = "errors"><p>this status</p></div>

          </div>
          <div className = 'item__col4'>this</div>
          <div className = 'item__col5'>test</div>
          <div className = 'item__col6'>last</div>
        </div>
      </div>
    )
}

export default BatchItem
  
