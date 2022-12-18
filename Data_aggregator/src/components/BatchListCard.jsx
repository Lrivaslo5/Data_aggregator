
// This will populate a list of titles for each column based on props passed in

function BatchListCard({props , option}) {
    const titles =  props[option]
    var titleList = titles.map(function(title){
        return<li>{title}</li>
    })
    
    return ( 
    <div id= "batch-list">
        <ul>
            {/* <button onClick={() => (alert(titles))}>test</button> */}
            {titleList}
        </ul>
    </div>

    )
}

export default BatchListCard
  
