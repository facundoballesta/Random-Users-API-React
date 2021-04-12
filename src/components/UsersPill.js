
export default function UserPill(props){
    return(
    
        <div className="pill m-2 bg-white rounded-pill p-1 text-center text-dark container">
                <div className="row">
                    <div className="col-md-12 col-lg-2">
                        <img className="rounded-circle d-inline" src={props.img} alt=""/>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <p className="d-inline strong h6">@{props.username}</p>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <button className="btn btn-warning ms-auto rounded-pill">Follow</button>
                    </div>
                </div>            
        </div>
    
    )
}