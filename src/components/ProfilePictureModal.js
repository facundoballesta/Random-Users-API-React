export default function ProfilePictureModal(props){
    return(
        <div className="modal fade" id="profilePictureModal" tabindex="-1" aria-labelledby="profilePictureModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="img-fluid" src={props.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}